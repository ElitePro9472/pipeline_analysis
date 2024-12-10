import React, { useState } from 'react'
const Forgot = () => {
  const [email, setEmail] = useState('')
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
        onChange={e => setEmail(e.target.value)}
      />
      <button
        className={`w-full ${
          email.length !== 0 ? 'bg-primary' : 'bg-slate-600'
        } text-center text-white py-3 rounded-md hover:${
          email.length !== 0 ? 'bg-hover-button' : 'bg-slate-600'
        } mt-4`}
      >
        Submit
      </button>
    </div>
  )
}

export default Forgot
