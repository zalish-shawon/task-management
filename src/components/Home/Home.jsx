/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Link } from 'react-router-dom';
import Benefits from '../Benefits/Benefits';

const Home = () => {
    return (
        <div className='mb-10'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between" bis_skin_checked="1">
                    <div className="flex flex-col justify-center px-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left" bis_skin_checked="1">
                        <h1 className="text-3xl font-bold leadi sm:text-6xl">
                            Task Management Application
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Efficiently organize and prioritize tasks with our intuitive task management application, 
                            <br className="hidden md:inline lg:hidden" />streamlining productivity and ensuring deadlines are met effortlessly
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start" bis_skin_checked="1">
                            <Link to={"/dashboard/home"}>
                            <a rel="noopener noreferrer" href="" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-blue-500 text-white" >Let’s Explore</a>
                            </Link>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">More</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" bis_skin_checked="1">
                        <img src="https://projectsly.com/images/task-management-screenshot-1.png?v=1691124479409199525" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <div className='mt-5 mb-8'>
                <Benefits></Benefits>
            </div>
        </div>
    );
};

export default Home;