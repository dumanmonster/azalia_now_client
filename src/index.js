import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MessageBoard from './pages/MessageBoard/MessageBoard';

import AverageNumbers from './pages/AverageNumbers/AverageNumbers';
const router = createBrowserRouter([
  {
    path: "/message",
    element: <MessageBoard />
  },
  {
    path: "/average",
    element: <AverageNumbers/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

