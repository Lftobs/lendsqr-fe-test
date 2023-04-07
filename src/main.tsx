import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import DetailsPage from "./pages/DetailsPage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/user-detail/:userId",
    element: <DetailsPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
