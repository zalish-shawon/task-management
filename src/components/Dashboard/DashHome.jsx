import React from 'react';
import { Link } from 'react-router-dom';

const DashHome = () => {
    return (
        <div>
            
            <div>
            <Link to={"/dashboard/addNewTask"}>
            <button className="btn btn-primary mt-2">Add new task</button>
            </Link>
            </div>
            <div className='flex justify-center items-center gap-4'>
                {/* first column */}
                <div className='w-1/3 h-[300px] bg-slate-100 mt-5'>
                    <div>
                    <h1 className='text-2xl font-semibold p-3 bg-slate-400 text-center'>To Do</h1>
                    </div>
                    <div className='bg-slate-200'>
                        <p className='text-xl font-semibold mt-2 p-3'>1. New task added</p>
                    </div>
                   
                </div>
                {/* second column */}
                <div className='w-1/3 h-[300px] bg-slate-100 mt-5'>
                    <div>
                    <h1 className='text-2xl font-semibold p-3 bg-slate-400 text-center'>Ongoing</h1>
                    </div>
                    <div className='bg-slate-200'>
                        <p className='text-xl font-semibold mt-2 p-3'>1. New task added</p>
                    </div>
                   
                   
                </div>
                {/* 3rd column */}
                <div className='w-1/3 h-[300px] bg-slate-100 mt-5'>
                    <div>
                    <h1 className='text-2xl font-semibold p-3 bg-slate-400 text-center'>Completed</h1>
                    </div>
                    <div className='bg-slate-200'>
                        <p className='text-xl font-semibold mt-2 p-3'>1. New task added</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default DashHome;