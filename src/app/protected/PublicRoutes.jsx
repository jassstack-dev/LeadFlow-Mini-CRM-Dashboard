import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoutes = () => {

        const {user, isAuthenticated, isloading} = useSelector((store)=> store.auth)

    if(isloading) return <h1>loading...</h1>
       
    
    if(user) return <Navigate to='/dashboard'/>
    

    

  return <Outlet/>
}

export default PublicRoutes
