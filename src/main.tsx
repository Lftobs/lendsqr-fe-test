import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.scss'
import Layout from './layout/Layout';
import { rootLoader, loader as usersLoader, detailsLoader } from './layout/Loaders';
import Users from './components/users/Users';
import Details from './components/users/Details';


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  // },
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>an error occured</div>,
    children: [
      {
        loader: usersLoader,
        index: true,
        element: <Users />
      },
      {
        path: 'user-detail/:userId',
        loader: detailsLoader,
        element: <Details />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },

  // {
  //   path: "/user-detail/:userId",
  //   element: <DetailsPage />
  // }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
