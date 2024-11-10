import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <div className='min-h-full'>
      <Header />
      <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 z-0'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
