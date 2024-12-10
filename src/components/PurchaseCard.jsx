import React from 'react'
import CheckIcon from '../assets/icons/check.svg'
import { Link } from 'react-router-dom'

const _ = require('lodash')

const PurchaseCard = ({
  title,
  text,
  hourText,
  isFree,
  isLogin,
  isFocus,
  isBuy,
  onClickBuyButton
}) => {
  return (
    <div class={`group flex flex-col bg-white`}>
      <div
        className={`group-hover:translate-y-[-3px] transition-transform flex flex-col h-full rounded-md p-6  ${
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
          {isLogin && (
            <Link to='/login' className='text-primary'>
              login
            </Link>
          )}
          {isBuy && (
            <button
              type='button'
              className='rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              onClick={onClickBuyButton}
            >
              Buy
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PurchaseCard
