import React from 'react'
import GoogleIcon from '../assets/icons/google.svg'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()

  return (
    <div className='border border-primary max-w-md mx-auto p-10 rounded-xl'>
      <div className='my-4'>
        <h1 className='text-3xl font-semibold'>Log In</h1>
      </div>
      <input
        name='password'
        type='text'
        placeholder='Email'
        className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-2'
      />

      <input
        name='password'
        type='text'
        placeholder='Password'
        className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
      />

      <button
        className='w-full bg-primary text-center text-white py-3 rounded-md hover:bg-hover-button mt-4'
        onClick={() => {
          navigate('/chart')
        }}
      >
        Log in
      </button>

      <div className='flex items-center mt-4'>
        <div className='w-1/2 border-t-primary border-t h-0'></div>
        <div className='mx-3'>Or</div>
        <div className='w-1/2 border-t-primary border-t h-0'></div>
      </div>

      <button className='w-full bg-white text-center  py-3 rounded-md border border-primary text-[#383838] flex items-center justify-center relative mt-4'>
        <img src={GoogleIcon} alt='' className='w-10 absolute left-2' />
        Sign in with Google
      </button>

      <div className='flex mt-2'>
        <p className='text-lg text-second-color'>Don't have an account?</p>
        <Link to='/register' className='text-primary ml-4 text-lg'>
          Register
        </Link>
      </div>

      <div className='mt-2'>
        <Link to='/forgot' className='text-primary text-lg'>
          Forgot Password?
        </Link>
      </div>
    </div>
  )
}

export default Login
