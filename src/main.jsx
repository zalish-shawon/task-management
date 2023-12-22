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
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Edit from './components/Edit/Edit';

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
    },
    {
      path: "editTask/:id",
      element: <Edit></Edit>,
      loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
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
