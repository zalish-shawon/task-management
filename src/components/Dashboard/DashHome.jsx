/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';


const Task = ({ task, onTaskMove }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { id: task._id, status: task.status },
  });


  const handleDeleteItem = (_id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            axios.delete(`https://task-management-server-virid-six.vercel.app/tasks/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your task has been deleted.',
                        'success'
                      )

                     
                }
            })
          
        }
      })
    }

  return (
    <div ref={drag} className='bg-slate-200 flex justify-between items-center mt-1'>
      <div>
      <p className='text-lg font-semibold mt-2 ml-3'>{task.name}</p>
      <p className='text-red-700 font-semibold ml-3'>Deadline: {task.date}</p>
      </div>
      <div className='mt-1'>
        <Link to={`/dashboard/editTask/${task._id}`}><button className='px-2 py-1 rounded-lg bg-blue-400'>edit</button></Link>
        <button onClick={()=> handleDeleteItem(task._id)} className='px-2 py-1 rounded-lg bg-blue-400 ml-2'>Delete</button>
      </div>
    </div>
  );
};

const Column = ({ title, tasks, status, onTaskMove }) => {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onTaskMove(item.id, item.status, status),
  });

  return (
    <div className='w-[90%] mx-auto lg:w-1/3 h-[300px] bg-slate-100 mt-5' ref={drop}>
      <div>
        <h1 className='text-2xl font-semibold p-3 bg-slate-400 text-center'>{title}
        </h1>
        
      </div>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onTaskMove={onTaskMove} />
      ))}
    </div>
  );
};

const DashHome = () => {
  const {user} = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { data: allTasks = [], refetch } = useQuery({
    queryKey: ['allTasks'],
    queryFn: async () => {
      const res = await axios.get('https://task-management-server-virid-six.vercel.app/tasks');
      return res.data;
    },
  });

  const moveTask = async (taskId, fromStatus, toStatus) => {
    try {
      // Make a PUT request to update the task status on the server
      await axios.patch(`https://task-management-server-virid-six.vercel.app/tasks/${taskId}`, { status: toStatus });

      // Refetch the 'allTasks' query
      await queryClient.refetchQueries('allTasks');
    } catch (error) {
      console.error('Error updating task status:', error);
    }
    refetch();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div>
          <Link to='/dashboard/addNewTask'>
            <button className='btn btn-primary mt-2'>Add new task</button>
          </Link>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
          <Column title='To Do' tasks={allTasks.filter((task) => task.status === 'todo' && task.email === user?.email)} status='todo' onTaskMove={moveTask} />
          <Column title='Ongoing' tasks={allTasks.filter((task) => task.status === 'ongoing' && task.email === user?.email)} status='ongoing' onTaskMove={moveTask} />
          <Column title='Completed' tasks={allTasks.filter((task) => task.status === 'completed' && task.email === user?.email)} status='completed' onTaskMove={moveTask} />
        </div>
      </div>
    </DndProvider>
  );
};

export default DashHome;
