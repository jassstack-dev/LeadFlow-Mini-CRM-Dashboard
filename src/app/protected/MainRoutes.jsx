import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const MainRoutes = () => {

    const { user, isAuthenticaeted, isloading} = useSelector((store)=> store.auth)

    if(isloading) return <h1>loading....</h1>
  
    
    if(!user) return <Navigate to='/'/>
   

  return <Outlet/>
}

export default MainRoutes
