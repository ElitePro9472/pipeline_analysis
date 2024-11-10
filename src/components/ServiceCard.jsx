import React from 'react'

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className='text-center'>
      <div className='w-12 h-12 m-auto'>
        <img src={icon} alt="service icon" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p>
        {text}
      </p>
    </div>
  )
}

export default ServiceCard;