import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarUser from '../components/sideBarUser'

function LayoutReception() {
  return (
    <div className='flex bg-gray-100'>
      <SideBarUser />
      <div className='w-full min-h-screen' style={{marginLeft: '1rem', marginRight: '1rem', paddingTop: '1rem'}}>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutReception