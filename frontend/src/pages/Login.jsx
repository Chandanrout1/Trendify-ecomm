import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-2xl'>{currentState}</p>
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/> }
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p>Forgot your password?</p>
        {
          currentState === "Login"
          ? <p onClick={()=> setCurrentState("Sign Up")} className='cursor-pointer'>Create account</p>
          : <p onClick={()=> setCurrentState("Login")} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-blue-600 text-white text-md mt-4 px-3 py-2 rounded-md'>{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  )
}

export default Login