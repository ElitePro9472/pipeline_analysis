import React, { useState } from 'react'
// import GoogleIcon from '../assets/icons/google.svg'
import { Link, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../constant'
import { useDispatch } from 'react-redux'
import { setAuthenticate, setUserInfo } from '../redux/authSlice'
import { toast } from 'react-toastify'
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const onClickLogin = () => {
    fetch(`${BACKEND_URL}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(async response => {
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.detail)
        }
        return response.json()
      })
      .then(res => {
        toast.success('login success')
        dispatch(setAuthenticate({ isAuthenticated: true }))
        dispatch(setUserInfo({ userInfo: res }))
        navigate('/')
      })
      .catch(err => {
        console.log(err)
        toast.error(err.toString().replace('Error:', ''))
      })
  }

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
        onChange={e => setLoginData({ ...loginData, email: e.target.value })}
      />

      <input
        name='password'
        type='password'
        placeholder='Password'
        className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
        onChange={e => setLoginData({ ...loginData, password: e.target.value })}
      />

      <button
        className={`w-full ${
          loginData.email !== '' && loginData.password !== ''
            ? 'bg-primary'
            : 'bg-slate-600'
        } text-center text-white py-3 rounded-md hover:${
          loginData.email !== '' && loginData.password !== ''
            ? 'bg-hover-button'
            : 'bg-slate-600'
        } mt-4`}
        onClick={onClickLogin}
      >
        Log in
      </button>

      {/* <div className='flex items-center mt-4'>
        <div className='w-1/2 border-t-primary border-t h-0'></div>
        <div className='mx-3'>Or</div>
        <div className='w-1/2 border-t-primary border-t h-0'></div>
      </div> */}

      {/* <button className='w-full bg-white text-center  py-3 rounded-md border border-primary text-[#383838] flex items-center justify-center relative mt-4'>
        <img src={GoogleIcon} alt='' className='w-10 absolute left-2' />
        Sign in with Google
      </button> */}

      <div className='flex mt-2'>
        <p className='text-lg text-second-color'>Don't have an account?</p>
        <Link to='/register' className='text-primary ml-4 text-lg'>
          Register
        </Link>
      </div>

      <div className='mt-2'>
        {/* <Link to='/forgot' className='text-primary text-lg'>
          Forgot Password?
        </Link> */}
      </div>
    </div>
  )
}

export default Login
