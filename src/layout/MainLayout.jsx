import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/ui/components/Navbar'

const MainLayout = () => {
  return (
   <div className="flex min-h-screen">
  {/* Sidebar */}
  <aside className="w-64 fixed left-0 top-0 h-screen">
    <Navbar />
  </aside>

  {/* Main Content */}
  <main className="ml-64 flex-1 min-w-0">
    <Outlet />
  </main>
</div>
  )
}

export default MainLayout
