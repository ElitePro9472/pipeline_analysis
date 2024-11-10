import React from 'react'
import CheckIcon from '../assets/icons/check.svg'
import { Link } from 'react-router-dom'
const _ = require('lodash')

const PurchaseCard = ({
  title,
  text,
  hourText,
  isFree,
  isRegister,
  isFocus
}) => {
  return (
    <div
      className={`flex flex-col rounded-md p-6 ${
        isFocus
          ? 'border border-solid border-focus'
          : 'border border-solid border-[#D1D6D7]'
      }`}
    >
      <h2 className='font-semibold text-xl'>{title}</h2>
      <div className='my-4'>
        <p>{text}</p>
      </div>
      <ul className='my-4'>
        {!_.isEmpty(hourText) && (
          <li className='flex text-lg'>
            <img src={CheckIcon} alt='' className='mr-1 text-green-900' />
            {hourText}
          </li>
        )}
      </ul>
      <div className='flex justify-between mt-auto items-center h-12'>
        {isFree && <h3 className='mt-4 mb-2 text-3xl font-semibold'>Free</h3>}
        {isRegister && (
          <Link href='/register' className='text-primary'>
            register
          </Link>
        )}
      </div>
    </div>
  )
}

export default PurchaseCard
