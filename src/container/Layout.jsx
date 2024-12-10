import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Layout = ({ children }) => {
  return (
    <div className='min-h-full'>
      <Header />
      <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 z-0'>
        {children}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default Layout
