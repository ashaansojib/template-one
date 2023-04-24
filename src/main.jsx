import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import CheckList from './components/CheckLisk/CheckList.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import AuthProviders from './providers/AuthProviders.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Services.json')
      },
      {
        path: '/checklist',
        element: <CheckList></CheckList>
      }
    ]
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login></Login>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
)
