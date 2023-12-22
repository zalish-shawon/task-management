/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex flex-col lg:flex-row lg:gap-8">
            <aside class="flex flex-col w-full lg:w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                {/* <a href="#" class="mx-auto">
                    <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                </a> */}

                <div class="flex flex-col items-center mt-6 -mx-2">
                    <img class="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL} alt="avatar" />
                    <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user?.displayName}</h4>
                    <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user?.email}</p>
                </div>

                <div class="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <Link to={"home"}>
                        <a class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" href="#">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span class="mx-4 font-medium">Dashboard</span>
                        </a>
                        </Link>

                       
                    </nav>
                </div>
            </aside>
            <div className="w-[78%]">
                <div>
                <h1 className='mt-5 p-5 bg-slate-400 text-center font-bold text-3xl'>Welcome to task management application</h1>
                </div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;