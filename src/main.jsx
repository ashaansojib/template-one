import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import CheckList from './components/CheckLisk/CheckList.jsx'
import Register from './components/Register/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/Services.json')
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router}></RouterProvider>)
