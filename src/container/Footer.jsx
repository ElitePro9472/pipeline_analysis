import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 w-full border-t-[1px] border-primary px-8 py-4 bg-white z-10'>
      <div className='flex justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 align-middle'>
        <p className='text-sm'>Copyright © 2024 Pipeline analysis Ltd.</p>
        <div>
          Earn Credits | About | API Docs | About | Terms | Privacy | Blog
        </div>
      </div>
    </footer>
  )
}

export default Footer
