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
import AuthProvider from './provider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Edit from './components/Edit/Edit';
import PrivateRoutes from './components/PrivateRoutes';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/about",
        element: <About></About>
      }
      
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
    {
      path: "home",
      element: <PrivateRoutes><DashHome></DashHome></PrivateRoutes>
    },
    {
      path: "addNewTask",
      element: <CreateTask></CreateTask>
    },
    {
      path: "editTask/:id",
      element: <Edit></Edit>,
      loader: ({params}) => fetch(`https://task-management-server-virid-six.vercel.app/tasks/${params.id}`)
    }

  ]
    
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     </QueryClientProvider>
     
  </React.StrictMode>,
)
