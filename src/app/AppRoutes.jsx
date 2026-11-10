import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from '../features/auth/ui/pages/Login'
import PublicLayout from '../layout/PublicLayout'
import Register from '../features/auth/ui/pages/Register'
import MainRoutes from './protected/MainRoutes'
import MainLayout from '../layout/MainLayout'
import Dashboard from '../features/dashboard/ui/pages/Dashboard'
import PublicRoutes from './protected/PublicRoutes'

const AppRoutes = () => {





    const router = createBrowserRouter([
        {
            path:'/',
            element:<PublicRoutes/>,
            children:[
                {
                    path:'',
                    element:<PublicLayout/>,
                    children:[
                        {
                            path:'',
                            element:<Login/>
                        },
                        {
                            path: 'register',
                            element:<Register/>
                        }
                    ]
                }
            ]
        },
        {
            path:'/dashboard',
            element:<MainRoutes/>,
            children:[
                {
                    path:'',
                    element:<MainLayout/>,
                    children:[
                        {
                            path:'',
                            element:<Dashboard/>
                        }
                    ]
                }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes
