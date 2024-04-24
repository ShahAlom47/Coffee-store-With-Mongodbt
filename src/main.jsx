import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

import AddCoffee from './Component/AddCoffee.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';
import Home from './Component/Home.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import AuthProvider from './AuthProvider.jsx';
import Users from './Component/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/add-coffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`https://coffee-store-server-six-ecru.vercel.app/coffee/${params.id}`)
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
    path: "/users",
    element: <Users></Users>,
    loader:()=>fetch ('https://coffee-store-server-six-ecru.vercel.app/user')
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
