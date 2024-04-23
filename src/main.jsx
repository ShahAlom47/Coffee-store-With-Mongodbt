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
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
