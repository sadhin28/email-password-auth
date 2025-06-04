import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import SignIn from './components/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<SignIn></SignIn>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
         <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
