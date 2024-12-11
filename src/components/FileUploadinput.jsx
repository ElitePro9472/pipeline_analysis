import React from 'react'

const FileUploadInput = ({ id, name, step, title, loadFile }) => {
  return (
    <div className='mt-4 flex justify-center rounded-lg border-gray-900/25 px-6 py-20 bg-[#f1f0ef]'>
      <div className='text-center'>
        <div className='text-3xl font-semibold text-[#005fab]'>{step}</div>
        <div className='mt-4 flex text-sm/6 text-gray-600'>
          <label
            htmlFor={id}
            className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
          >
            <div className='bg-[#0176d3] hover:bg-[#032d60] text-white font-semibold text-3xl px-9 py-4 rounded-xl h-[140px]'>
              {title} <br />
              <span className='text-lg text-white'>(xlsx or csv)</span>
            </div>
            <input
              id={id}
              name={name}
              type='file'
              className='sr-only'
              onChange={loadFile}
              accept='.csv, .xlsx'
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default FileUploadInput
