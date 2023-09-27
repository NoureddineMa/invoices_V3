import React from 'react'
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { getUsers , postUser , deleteUser } from '../../API/Req'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Users = () => {

  const [usersData,setUsersData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);


  async function getUsersThenFetch(){
    const dataUser = await getUsers()
    setUsersData(dataUser)
  }

  useEffect(() => {
    getUsersThenFetch()
  },[])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const [Email,setEmail] = useState('')
  const [Password,setPassword] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const userdata = {
      Email,
      Password,
      Role: "user"
    }
    try {
      postUser(userdata).then((data) => {
        toast("user created Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
          setIsModalOpen(false);
          getUsersThenFetch()
          setEmail('')
          setPassword('')
        console.log(data)
      }).catch((err) => {
        toast("error , please try Again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
      })
    } catch (error) {
      toast("error , please try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    }
  }




  // delete function : 
  const DeleteUserById = (id) => {
    try {
      deleteUser(id).then(() => {
        let res = usersData.filter((user) => user._id !== id)
        setUsersData(res)
        toast("User deleted Successfully !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
      }).catch((err) => {
        toast("error deleting , please try Again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
      })
    } catch (error) {
      toast("error deleting , please try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })

    }
  }


  // pagination : 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page's data
  // const currentData = data.slice(startIndex, endIndex);
  const currentData = usersData.filter(user => user.Email.toLowerCase().includes(searchQuery.toLowerCase())).slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(usersData.length / itemsPerPage);

  // Handle page navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const pageNumbers = [];
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i > 0 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }


  return (
    <div>
      <div className='flex justify-between my-4'>
        <h1 className='font-bold text-3xl'>List Users</h1>
        <Button className='bg-pink-600 hover:bg-pink-700 hover:text-white px-7   text-white' onClick={showModal}>
          Add User
        </Button>
      </div>

      {usersData.length > 0 ? (<div className='flex justify-start items-center gap-4 my-3'>
          <label className='text-xs font-bold' htmlFor="CompanyName">Search User</label>
          <input
            type='text'
            placeholder='Search User by email'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='border  text-sm border-1 border-pink-500  px-2 w-52 py-3 mr-2'
          />
        </div>) : (<></>)}

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs  uppercase bg-black text-white ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                
              </th>
              <th scope="col" className="px-6 py-3">
                
                </th>
                <th scope="col" className="px-6 py-3">
                
                </th>
                <th scope="col" className="px-6 py-3">
                
                </th>
                <th scope="col" className="px-6 py-3">
                
                </th>
              
            </tr>
          </thead>
          <tbody>
            {currentData?.map((user) => (
               <tr className="border-b bg-gray-800 border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                {user.Email}
              </th>
              <td className="px-6 py-4">
                user
              </td>
              <td className="px-6 py-4">
                
              </td>
              <td className="px-6 py-4">
                
              </td>
              <td className="px-6 py-4">
                
              </td>
              <td className="px-6 py-4">
                
              </td>
              <td className="flex justify-end pr-4 py-4">
                <button onClick={() => DeleteUserById(user._id)} className='bg-pink-600 rounded-md text-white px-8 py-2'>delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>



          {/* Previous button */}
          <div className='my-4 flex justify-center items-center'>
            {/* Previous button */}
            {currentPage > 1 && (
              <button
                className="bg-pink-600 hover:bg-pink-900 text-white py-2 px-4 rounded-l-md"
                onClick={() => goToPreviousPage()}
              >
                <div className='flex flex-row items-center gap-4 rounded-full'>
                  <svg width="15" height="12" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM41 16.5L3 16.5V21.5L41 21.5V16.5Z" fill="white" />
                  </svg>
                  <p className='text-xs'>Previous</p>
                </div>
              </button>
            )}

            {/* Page numbers */}
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`border-[1px] border-pink-600 text-black hover:text-white hover:bg-pink-700 py-[3px]   px-3 ${pageNumber === currentPage ? 'font-bold bg-pink-500 text-white' : ''}`}
                onClick={() => goToPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}

            {/* Next button */}
            {currentPage < totalPages && (
              <button
                className="bg-pink-600 hover:bg-pink-900 text-white py-2 px-4 rounded-r-md"
                onClick={() => goToNextPage()}
              >
                <div className='flex flex-row items-center gap-4 rounded-full'>
                <p className='text-xs'>Next</p>
                  <svg width="15" height="12" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.7678 20.7678C40.7441 19.7915 40.7441 18.2085 39.7678 17.2322L23.8579 1.32233C22.8816 0.346022 21.2986 0.346022 20.3223 1.32233C19.346 2.29864 19.346 3.88156 20.3223 4.85787L34.4645 19L20.3223 33.1421C19.346 34.1184 19.346 35.7014 20.3223 36.6777C21.2986 37.654 22.8816 37.654 23.8579 36.6777L39.7678 20.7678ZM-2.18557e-07 21.5L38 21.5L38 16.5L2.18557e-07 16.5L-2.18557e-07 21.5Z" fill="white" />
                  </svg>
                </div>
              </button>
            )}
          </div>

      <Modal title="Add User"  okButtonProps={{ hidden: true }} cancelButtonProps={{ hidden: true }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="mb-2">
          <label for="email" className="block mb-2 text-xs font-medium text-gray-400 ">Email</label>
          <input onChange={handleEmail} value={Email} type="email" name='Email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="example@email.com" />
        </div>
        <div className="mb-1">
          <label for="email" className="block mb-2 text-xs font-medium text-gray-400 ">Password</label>
          <input onChange={handlePassword} value={Password} type="text" name='Password' id="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="*******" />
        </div>
        <div className="mb-1">
          <label for="email" className="block mb-2 text-xs font-medium text-gray-400 ">Role</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '>
            <option selected>user</option>
          </select>
        </div>
        <div className='flex gap-2 mt-5 justify-end'>
        <button onClick={handleCancel} className="text-white bg-red-600 hover:bg-red-800  rounded-sm text-xs px-5 py-2 text-center inline-flex items-center" type="submit" >Annuler</button>
        <button onClick={handleAdd} className="text-white bg-green-600 hover:bg-green-800  rounded-sm text-xs px-5 py-2 text-center inline-flex items-center" type="submit" >Ajouter</button>
        </div>
      </Modal>
    </div>
  )
}

export default Users
