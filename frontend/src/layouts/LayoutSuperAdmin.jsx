import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarSuperAdmin from '../components/sideBarSuperAdmin'

function LayoutReception() {
  return (
    <div className='flex bg-gray-100'>
      <SideBarSuperAdmin />
      <div className='w-full min-h-screen' style={{marginLeft: '1rem', marginRight: '1rem', paddingTop: '1rem'}}>
        <Outlet />
        <h1>HHHHHHHHHHHHHhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
      </div>
    </div>
  )
}

export default LayoutReception