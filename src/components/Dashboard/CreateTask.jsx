/* eslint-disable react/no-unknown-property */
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, setValue } = useForm()
    const navigate = useNavigate();

    useEffect(() => {
        setValue('email', user?.email);
        setValue('status', 'todo');
      }, [user, setValue]);

    const onSubmit = (data) => {
        try {
            axios.post(`http://localhost:5000/tasks`, data)
            .then(res => {
                if(res.data.insertedId) {
                    Swal.fire(
                        'Welcome!',
                        'Task has been added!',
                        'success'
                      )
                }
                // console.log(res.data);
                navigate("/dashboard/home")
            })

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <div>
                <h1 className='font-bold mt-5 text-3xl'>Create a new task</h1>
            </div>
            <div className=''>


                <form onSubmit={handleSubmit(onSubmit)} class="max-w-sm mx-auto">
                    <div class="mb-2">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Task Name</label>
                        <input {...register("name")} name='name' type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Task name" required />
                    </div>
                    <div class="mb-2">
                        <label  class="block mb-2 text-sm font-medium text-gray-900">Due Date</label>
                        <input {...register("date")} name='date' type="date" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-2">
                        <label class="block mb-2 text-sm font-medium text-gray-900">Priority</label>
                        <select {...register("priority")} name="priority" id="" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            <option value="Low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <textarea {...register("description")} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write description here..."></textarea>


                    <button type="submit" class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Task</button>
                </form>

            </div>
        </div>
    );
};

export default CreateTask;