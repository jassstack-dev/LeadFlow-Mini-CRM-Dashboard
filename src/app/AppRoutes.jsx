import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from '../features/auth/ui/pages/Login'
import PublicLayout from '../layout/PublicLayout'
import Register from '../features/auth/ui/pages/Register'
import MainRoutes from './protected/MainRoutes'
import MainLayout from '../layout/MainLayout'
import Dashboard from '../features/dashboard/ui/pages/Dashboard'
import PublicRoutes from './protected/PublicRoutes'
import { AuthMe } from '../features/auth/apis/apis'
import { useDispatch } from 'react-redux'
import { addUser, deleteUser } from '../features/auth/store/authSlice'
import Leads from '../features/leads/ui/pages/Leads'
import CreateLeads from '../features/leads/ui/pages/createLeads'

const AppRoutes = () => {

    const dispatch = useDispatch()

    const hydrateApi =async ()=>{

        try {
            const data = await AuthMe()
            if (data) {
      dispatch(addUser(data));
    } else {
      dispatch(deleteUser());
    }
            console.log(data)
        } catch (error) {
    console.log(error);
    dispatch(deleteUser());
  }


    }

    useEffect(()=>{
        hydrateApi()
    },[])


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
                        },
                        {
                            path:'leads',
                            element:<Leads/>
                        },
                        {
                            path:'create',
                            element:<CreateLeads/>
                        }
                    ]
                }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes
