import React from 'react'
import {assets} from "../assets/assets"

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between mr-5 ml-5'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        <button onClick={()=> setToken('')} className='bg-blue-500 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-md text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar