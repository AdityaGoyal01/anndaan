import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Donate from './components/About/Donate.jsx'
import Collect from './components/Contact/Collect.jsx'
import Dashboard from './components/user/Dashboard.jsx'; 
import { Auth0Provider } from '@auth0/auth0-react';



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
       },
       {
        path: 'dashboard',
        element: <Dashboard />
       }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-3w4inh1xad1ngqvr.us.auth0.com"
  clientId="MtR8rHqiWYQlzKv97H1GZXeuwCoHFzTK"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <RouterProvider router={router} />
</Auth0Provider>
)
