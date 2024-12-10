import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { persistor } from '../store'

const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const logout = () => {
    persistor.purge()
    window.location.reload()
  }
  return (
    <header className='border-b-[1px] border-primary px-8 py-10'>
      <div className='flex justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 align-middle'>
        <Link
          to='/'
          className='text-3xl font-bold tracking-tight text-white hover:cursor-pointer'
        >
          Pipeline Magic
        </Link>
        {!isAuthenticated ? (
          <div className='grid grid-cols-2 gap-2 '>
            <Link to='/login' className='text-white text-lg'>
              Login
            </Link>
            <Link to='/register' className='text-white text-lg'>
              Register
            </Link>
          </div>
        ) : (
          <div className='grid grid-cols-2 gap-2 '>
            <p className='text-white text-lg cursor-pointer' onClick={logout}>
              Log out
            </p>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
