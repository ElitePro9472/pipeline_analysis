import React from 'react'

const NeedMorePanel = () => {
  return (
    <div className='mt-6 bg-[#E8EBFA] rounded-xl p-8'>
      <h2 className='text-2xl font-bold'>Need more?</h2>
      <div className='flex justify-between'>
        <div>
          <p className='mt-4 text-md'>
            We provide bespoke services for clients who have other document
            formats to process. Let us know how we can help!
          </p>
        </div>
        <div>
          <button className="text-white text-center bg-primary px-6 py-4 rounded-xl">Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default NeedMorePanel
