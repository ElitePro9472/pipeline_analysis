import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='border-b-[1px] border-primary px-8 py-4'>
      <div className='flex justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 align-middle'>
        <Link to="/" className='text-3xl font-bold tracking-tight text-gray-900 uppercase hover:cursor-pointer'>
          pipeline
        </Link>
        <div className='grid grid-cols-2 gap-2 '>
          <Link to='/login' className='text-[#2554ae] text-base'>
            Login
          </Link>
          <Link to='/register' className='text-[#2554ae] text-base'>
            Register
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
