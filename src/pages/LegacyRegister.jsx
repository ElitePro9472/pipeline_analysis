import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../constant'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
// import GoogleIcon from '../assets/icons/google.svg'

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  rePassword: ''
}
const LegacyRegister = () => {
  const [userData, setUserData] = useState(initialData)
  const [validation, setValidation] = useState(initialData)
  const [checkPrivacy, setCheckPrivacy] = useState(false)
  const [disabledRegister, setDisabledRegister] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setDisabledRegister(
      Object.values(validation).filter(item => item.length).length ||
        Object.values(userData).filter(item => item.length).length !== 5 ||
        !checkPrivacy
    )
  }, [validation, userData, checkPrivacy])

  const onChangeUserData = (val, type) => {
    if (type === 'firstName' && val === '') {
      setValidation({ ...validation, firstName: 'Input First Name!' })
      return
    }

    if (type === 'lastName' && val === '') {
      setValidation({ ...validation, lastName: 'Input Last Name!' })
      return
    }

    if (type === 'email') {
      if (val === '') {
        setValidation({ ...validation, email: 'Input Email!' })
        return
      }
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) {
        setValidation({ ...validation, email: 'Email is invalid!' })
        return
      }
    }

    if (type === 'password' && val === '') {
      setValidation({ ...validation, password: 'Input Password!' })
      return
    }

    if (type === 'rePassword' && val === '') {
      setValidation({ ...validation, rePassword: 'Input Retype Password!' })
      return
    }

    if (type === 'rePassword' && userData.password !== val) {
      setValidation({ ...validation, rePassword: 'Passwords do not match!' })
      return
    }

    setUserData({ ...userData, [type]: val })
    setValidation(initialData)
  }

  const onClickRegister = () => {
    delete userData.rePassword
    fetch(`${BACKEND_URL}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${userData.firstName} ${userData.lastName}`,
        password: userData.password,
        email: userData.email
      })
    })
      .then(async response => {
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.detail)
        }
        return response.json()
      })
      .then(res => {
        toast.success('register success')
        navigate('/login')
      })
      .catch(err => {
        toast.error(err.toString().replace('Error:', ''))
      })
  }

  return (
    <div className='border border-primary max-w-fit mx-auto p-10 rounded-xl'>
      <div className='my-4'>
        <h1 className='text-3xl font-semibold'>Register</h1>
      </div>
      <div className='text-xl mt-8'>
        Increase your limits for free simply by registering.
      </div>
      {/* <button className='w-full bg-white text-center  py-3 rounded-md border border-primary text-[#383838] flex items-center justify-center relative mt-6'>
        <img src={GoogleIcon} alt='' className='w-10 absolute left-2' />
        Sign in with Google
      </button> */}
      {/* <div className='flex items-center my-4'>
        <div className='w-1/2 border-t-primary border-t h-0'></div>
        <div className='mx-3'>Or</div>
        <div className='w-1/2 border-t-primary border-t h-0'></div>
      </div> */}
      <div className='flex'>
        <div>
          <input
            name='first_name'
            type='text'
            placeholder='First Name'
            className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
            onChange={e => onChangeUserData(e.target.value, 'firstName')}
          />
          <p className='text-red-600 mt-1'>{validation.firstName}</p>
        </div>
        <div>
          <input
            name='last_name'
            type='text'
            placeholder='Last Name'
            className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4 ml-4'
            onChange={e => onChangeUserData(e.target.value, 'lastName')}
          />
          <p className='text-red-600 mt-1 ml-4'>{validation.lastName}</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <input
          name='Email'
          type='text'
          placeholder='Email'
          className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
          onChange={e => onChangeUserData(e.target.value, 'email')}
        />
        <p className='text-red-600 mt-1'>{validation.email}</p>
        <input
          name='password'
          type='password'
          placeholder='Password'
          className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
          onChange={e => onChangeUserData(e.target.value, 'password')}
        />
        <p className='text-red-600 mt-1'>{validation.password}</p>
        <input
          name='confirm_password'
          type='password'
          placeholder='Re-enter password'
          className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
          onChange={e => onChangeUserData(e.target.value, 'rePassword')}
        />
        <p className='text-red-600 mt-1'>{validation.rePassword}</p>
        <div className='flex items-center mt-4'>
          <input
            type='checkbox'
            // value={checkPrivacy}
            onChange={e => setCheckPrivacy(e.target.checked)}
          />
          <p className='ml-2 text-lg font-normal'>
            By registering you agree to our Privacy and Terms policies.
          </p>
        </div>
        <button
          className={`w-full ${
            !disabledRegister ? 'bg-primary' : 'bg-slate-600'
          } text-center text-white py-3 rounded-md hover:${
            !disabledRegister ? 'bg-hover-button' : 'bg-slate-600'
          } mt-4`}
          disabled={disabledRegister}
          onClick={onClickRegister}
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default LegacyRegister
