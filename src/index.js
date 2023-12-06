import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Promisses from './Promisses';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/Login',
      element: <Login/>
    },
    {
      path: '/Promisses',
      element: <Promisses/>
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);