import React from 'react'
const Forgot = () => {
  return (
    <div className='border border-primary max-w-md mx-auto p-10 rounded-xl'>
      <div className='my-4'>
        <h1 className='text-3xl font-semibold'>Reset Password</h1>
      </div>
      <input
        name='Email'
        type='text'
        placeholder='Email'
        className='border border-primary rounded-lg px-4 py-2 w-full text-lg focus:border-input-border focus:outline-none focus:border-input-inset mt-4'
      />
      <button className='w-full bg-primary text-center text-white py-3 rounded-md hover:bg-hover-button mt-4'>
        Submit
      </button>
    </div>
  )
}

export default Forgot
