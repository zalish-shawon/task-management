import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import DashHome from './components/Dashboard/DashHome';
import CreateTask from './components/Dashboard/CreateTask';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
    {
      path: "home",
      element: <DashHome></DashHome>
    },
    {
      path: "addNewTask",
      element: <CreateTask></CreateTask>
    }
  ]
    
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <RouterProvider router={router} />
     
  </React.StrictMode>,
)
