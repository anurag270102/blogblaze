import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Onearticale from './Components/OneArticle/Onearticle.jsx';
import ContactUs from './pages/Contact/ContactUS.jsx';
import Myprofile from './Components/Myprofile/Myprofile.jsx';
import Login from './pages/LoginPage/Loginpage.jsx';
import Registerpage from './pages/RegisterPage/RegisterPage.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Addblogpage from './pages/Addblogpage/Addblogpage.jsx';
import Allarticle from './pages/Allarticle/Allarticle.jsx';
import AddArticlePage from './pages/AddArticlePage/AddArticlePage.jsx';
import Allpostpage from './pages/Allpostpage/Allpostpage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:'/register',
    element:<Registerpage></Registerpage>
  },
  {
    path:"/blog/:blogId",
    element:<Blog></Blog>
  },
  {
    path:'/blog',
    element:<Allpostpage></Allpostpage>
  },
  {
    path:'/addblog',
    element:<Addblogpage></Addblogpage>
  },
  {
    path:'/contact',
    element:<ContactUs></ContactUs>
  },
  
  {
    path: "/addarticle",
    element: <AddArticlePage></AddArticlePage>,
  },
  {
    path: "/article",
    element: <Allarticle/>,
  },
  {
    path: "article/:articleId",
    element: <Onearticale></Onearticale>,
  },
  {
    path: "myprofile/:id",
    element: <Myprofile></Myprofile>,
  },
  {
    path: "/login",
    element: <Login></Login>,
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