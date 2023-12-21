import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Task = ({ task, onTaskMove }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { id: task._id, status: task.status },
  });

  return (
    <div ref={drag} className='bg-slate-200'>
      <p className='text-xl font-semibold mt-2 p-3'>{task.name}</p>
    </div>
  );
};

const Column = ({ title, tasks, status, onTaskMove }) => {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onTaskMove(item.id, item.status, status),
  });

  return (
    <div className='w-1/3 h-[300px] bg-slate-100 mt-5' ref={drop}>
      <div>
        <h1 className='text-2xl font-semibold p-3 bg-slate-400 text-center'>{title}</h1>
      </div>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onTaskMove={onTaskMove} />
      ))}
    </div>
  );
};

const DashHome = () => {
  const queryClient = useQueryClient();

  const { data: allTasks = [], refetch } = useQuery({
    queryKey: ['allTasks'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/tasks');
      return res.data;
    },
  });

  const moveTask = async (taskId, fromStatus, toStatus) => {
    try {
      // Make a PUT request to update the task status on the server
      await axios.put(`http://localhost:5000/tasks/${taskId}`, { status: toStatus });

      // Refetch the 'allTasks' query
      await queryClient.refetchQueries('allTasks');
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div>
          <Link to='/dashboard/addNewTask'>
            <button className='btn btn-primary mt-2'>Add new task</button>
          </Link>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <Column title='To Do' tasks={allTasks.filter((task) => task.status === 'todo')} status='todo' onTaskMove={moveTask} />
          <Column title='Ongoing' tasks={allTasks.filter((task) => task.status === 'ongoing')} status='ongoing' onTaskMove={moveTask} />
          <Column title='Completed' tasks={allTasks.filter((task) => task.status === 'completed')} status='completed' onTaskMove={moveTask} />
        </div>
      </div>
    </DndProvider>
  );
};

export default DashHome;
