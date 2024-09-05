import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider, UNSAFE_ErrorResponseImpl} from 'react-router-dom'
  import Home from './views/Home/home'
  import Add from './views/Add/add' 
  import Show from './views/Show/show'


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/add",
    element: <Add/>
  },
  {
    path: "/show",
    element: <Show/>
  },
  {
    path: "*",
    element: <h1>404 Not Found </h1>
  }
])

root.render(
    <RouterProvider router={router}/>
);