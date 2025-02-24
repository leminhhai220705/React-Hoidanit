import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import UserPage from './pages/user.jsx'
import ProductPage from './pages/product.jsx'
import './styles/global.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <UserPage />
      },

      {
        path: "/products",
        element: <ProductPage />
      },
    ]
  },

  {
    path: "/register",
    element: <RegisterPage />
  },

  {
    path: "/login",
    element: <LoginPage />
  },

])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)



