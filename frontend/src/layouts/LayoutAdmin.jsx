import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarAdmin from '../components/sideBarAdmin'


function LayoutReception() {
  return (
    <div className='flex bg-gray-100'>
      <SideBarAdmin />
      <div className='w-full min-h-screen' style={{marginLeft: '1rem', marginRight: '1rem', paddingTop: '1rem'}}>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutReception