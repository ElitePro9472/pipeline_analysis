import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import Modal from './Modal'
import { BACKEND_URL, STRIPE_PUB_KEY } from '../constant'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../redux/authSlice'

const stripePromise = loadStripe(STRIPE_PUB_KEY)

const CheckoutForm = ({ clientSecret, onClose }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const userInfo = useSelector(state => state.auth.userInfo)
  const dispatch = useDispatch()

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    if (!stripe || !elements) {
      return
    }

    try {
      // Confirm the payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })

      if (result.error) {
        toast.error(result.error.message)
      } else {
        fetch(`${BACKEND_URL}purchaseSubscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: userInfo.id })
        })
          .then(async response => {
            if (!response.ok) {
              const errorData = await response.json()
              throw new Error(errorData.detail)
            }
            return response.json()
          })
          .then(res => {
            onClose()
            dispatch(setUserInfo({ userInfo: res.user }))
          })
          .catch(err => {
            toast.error(err.toString().replace('Error:', ''))
          })
        // You might want to update the UI or redirect to a success page
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#9e2146'
              }
            }
          }}
          className='p-3 border border-gray-300 rounded-lg'
        />
      </div>

      {error && <div className='text-red-500 mb-4 text-sm'>{error}</div>}

      <div className='space-y-4'>
        <button
          type='submit'
          disabled={!stripe || loading}
          className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400'
        >
          {loading ? 'Processing...' : `Pay $1`}
        </button>

        <button
          type='button'
          onClick={onClose}
          className='w-full bg-gray-100 text-gray-600 py-3 rounded-lg hover:bg-gray-200 transition-colors'
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

const PaymentModal = ({ isOpen, onClose, clientSecret }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Confirm Your Subscription'>
      <div className='space-y-6'>
        <div className='text-center'>
          <p className='text-gray-600'>Total: $1</p>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} onClose={onClose} />
        </Elements>
      </div>
    </Modal>
  )
}

export default PaymentModal
