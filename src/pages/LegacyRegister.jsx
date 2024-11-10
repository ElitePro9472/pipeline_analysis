import React from 'react'
import GoogleIcon from '../assets/icons/google.svg'
const LegacyRegister = () => {
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
      <div className='flex items-center my-4'>
        <div className='w-1/2 border-t-primary border-t h-0'></div>
        <div className='mx-3'>Or</div>
        <div className='w-1/2 border-t-primary border-t h-0'></div>
      </div>
      <div className='flex'>
        <input
          name='first_name'
          type='text'
          placeholder='First Name'
          className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
        />
        <input
          name='second_name'
          type='text'
          placeholder='Second Name'
          className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4 ml-4'
        />
      </div>
      <div className='flex flex-col'>
        <input
          name='Email'
          type='text'
          placeholder='Email'
          className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
        />
        <input
          name='password'
          type='password'
          placeholder='Email'
          className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
        />
        <input
          name='confirm_password'
          type='password'
          placeholder='Re-enter password'
          className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
        />
        <input
          name='referral_code'
          type='text'
          placeholder='Referral code'
          className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
        />
        <div className='flex items-center mt-4'>
          <input type='checkbox' />
          <p className='ml-2 text-lg font-normal'>By registering you agree to our Privacy and Terms policies.</p>
        </div>
        <button className='w-full bg-primary text-center text-white py-3 rounded-md hover:bg-hover-button mt-4'>
          Register
        </button>
      </div>
    </div>
  )
}

export default LegacyRegister
