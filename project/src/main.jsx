import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Donate from './components/About/Donate.jsx'
import Collect from './components/Contact/Collect.jsx'



const router = createBrowserRouter([
 {
    path: '/',
    element: <Layout/>,
    children: [
       {
        path: "",
        element: <Home />
       },
      
       {
        path: "donate",
        element:  <Donate/> 
       },
       {
        path: "collect",
        element:  <Collect/> 
       }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
