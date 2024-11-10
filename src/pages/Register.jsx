import React from 'react'
import GoogleIcon from '../assets/icons/google.svg'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='border border-primary max-w-fit mx-auto p-10 rounded-xl'>
      <div className='my-4'>
        <h1 className='text-3xl font-semibold'>Register</h1>
      </div>
      <div className='text-xl mt-8'>
        Increase your limits for free simply by registering.
      </div>
      <button className='w-full bg-white text-center  py-3 rounded-md border border-primary text-[#383838] flex items-center justify-center relative mt-6'>
        <img src={GoogleIcon} alt='' className='w-10 absolute left-2' />
        Sign in with Google
      </button>
      <div className='flex flex-col mt-4'>
        <Link to='/forgot' className='text-primary text-lg'>
          Forgot Password?
        </Link>
        <Link to='/legacy-register' className='text-primary text-lg'>
          Register with Email?
        </Link>
      </div>
    </div>
  )
}

export default Register
