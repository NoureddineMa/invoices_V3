import React from 'react'
import { Link } from 'react-router-dom'

const SideBarSuperAdmin = () => {
  return (
       <aside className="flex flex-col w-48   h-screen px-5 py-8 bg-black border-r "> 
      <div className='text-white flex justify-start font-bold text-2xl'>
        Invoi<span className='text-pink-700'>Ces</span>
      </div>
      <div>
        <div className='flex flex-col justify-start  gap-1 mt-[3rem] mb-[3rem]'>
        <h1 className='text-white text-sm font-semibold'>Noureddine Maher</h1>
        <span>Super Admin</span>
        </div>
        <hr className='border-3 border-pink-700' />
      </div>
  <div className="flex flex-col justify-between flex-1 mt-6">
    <nav className="-mx-3 space-y-6 ">
      <div className="space-y-3 ">
      <Link to="/">
           <a href className="flex items-center px-3 py-2 hover:cursor-pointer text-white transition-colors duration-300 transform rounded-lg  hover:bg-pink-700">
          <span className="mx-2 text-sm my-2 font-medium">Home</span>
        </a>
        </Link>
        <Link  to="/">
           <a href className="flex items-center px-3 py-2 hover:cursor-pointer text-white transition-colors duration-300 transform rounded-lg  hover:bg-pink-700">
          <span className="mx-2 text-sm my-2 font-medium">Deconnexion</span>
        </a>
        </Link>
      </div>
    </nav>
  </div>
</aside>
  )
}

export default SideBarSuperAdmin
