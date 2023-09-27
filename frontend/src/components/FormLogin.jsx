import React from 'react'
import { useState } from 'react'
import { Login } from '../API/Auth/Auth'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'



const FormLogin = () => {

  const navigate = useNavigate()

  const [Email,setEmail] = useState('')
  const [Password,setPassword] = useState('')

  const handleEmail = (e) => {
        setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
     const user = {
      Email,
      Password
     }
     try {
      console.log(user)
        Login(user).then((data) => {
          console.log(data);
          Cookies.set('role', data.nameRole)
          Cookies.set('token',data.token)
          Cookies.set('Email',data.user.Email)
          Cookies.set('id',data.user._id)
          Cookies.set('role_id',data.user.Role)
          if(data.nameRole === "user"){
            navigate('/user')
          } else if(data.nameRole === "admin"){
            navigate('/users')
          } else if(data.nameRole === "superadmin"){
            navigate('/superadmin')
          }
        }).catch((err) => {
          toast(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
            console.log(err.response.data.message)
        })} 
        catch (error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
        console.log(error.response.data.message)
     }
  }

  return (
    <form className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Email</label>
                                <input type="email" value={Email} onChange={handleEmail} name="email" id="email" className="border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="example@email.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">Password</label>
                                <input type="password" value={Password} onChange={handlePassword} name="Password" id="Password" placeholder="••••••••" className="border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <button onClick={handleLogin} type="submit" className="w-full bg-pink-600 hover:bg-pink-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Sign in</button>
                        </form>
  )
}

export default FormLogin
