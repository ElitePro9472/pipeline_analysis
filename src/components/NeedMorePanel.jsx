import React from 'react'

const NeedMorePanel = () => {
  return (
    <div className='group'>
      <div className='group-hover:translate-y-[-3px] transition-transform mt-6 bg-white rounded-xl p-8'>
        <h2 className='text-2xl font-bold'>Need more?</h2>
        <div className='flex justify-between'>
          <div>
            <p className='mt-4 text-md'>
              We provide bespoke services for clients who have other document
              formats to process. Let us know how we can help!
            </p>
          </div>
          <div>
            <button className='bg-white hover:bg-[#eaf5fe] text-center text-[#0176d3] px-6 py-4 border-[2px] b border-[#0176d3]  rounded-xl'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NeedMorePanel
