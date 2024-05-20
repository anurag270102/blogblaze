import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Allpost from './Components/Allpost/Allpost.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "search/:search",
    element: <Allpost></Allpost>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
//  #057092
//  #031000 black
//  #91CC12
//  #EA452E
//  #FFB340 orange