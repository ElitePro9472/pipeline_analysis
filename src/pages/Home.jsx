import React, { useState } from 'react'
import FileUploadInput from '../components/FileUploadinput'
import ServiceCard from '../components/ServiceCard'
import AccurateIcon from '../assets/icons/accurate.svg'
import InstitutionalIcon from '../assets/icons/institutional.svg'
import SecureIcon from '../assets/icons/secure.svg'
import PurchaseCard from '../components/PurchaseCard'
import NeedMorePanel from '../components/NeedMorePanel'
import { BACKEND_URL } from '../constant'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import PaymentModal from '../components/PaymentModal'
import { useSelector } from 'react-redux'
import { getBrowserFingerprint } from '../utlls/fingerprinter'

const serviceData = [
  {
    icon: SecureIcon,
    title: 'Easy',
    text: 'All it takes is upload two simple files downloaded from your CRM with data that is readily available'
  },
  {
    icon: InstitutionalIcon,
    title: 'Fast',
    text: 'It takes seconds to generate your pipeline history waterfall'
  },
  {
    icon: AccurateIcon,
    title: 'No-Nonsense',
    text: 'No fancy modules to buy or complicated CRM implementations'
  }
]

const purchaseData = [
  {
    title: 'Free',
    text: 'Free conversions with no need to sign up',
    hourText: 'Create 2 charts every 24 hours - ideal for testing',
    isFree: true,
    isLogin: false,
    isFocus: false,
    isBuy: false
  }
]

const freeRegisterData = {
  title: 'Free - registered:',
  text: 'Registration is free',
  hourText: 'Create 5 charts every 24 hours',
  isFree: true,
  isLogin: true,
  isFocus: false,
  isBuy: false
}

const subscribeData = {
  title: 'Subscribe',
  text: 'Subscribe to convert more documents',
  hourText: 'Unlimited chart creation and customer support',
  isFree: false,
  isLogin: true,
  isFocus: true,
  isBuy: true
}

const dataFileFormat = [
  'Account Name',
  'Created Date',
  'Opportunity Name',
  'Opportunity Owner',
  'Stage',
  // 'Lead Source',
  // 'Opportunity Source',
  'Type',
  // 'Primary ERP',
  'Net-New Dollars',
  'Close Date',
  'Age',
  'Discovery Date\r'
  // 'Lost Reason',
  // 'SQL Quarter',
  // 'Closed Quarter\r'
]
const historyFileFormat = [
  'Opportunity Name',
  'To Stage',
  'From Stage',
  'Amount',
  'Expected Revenue',
  'Probability (%)',
  'Close Date',
  'Last Modified',
  'Last Modified By',
  'Forecast Category',
  'Owner\r'
]
const Home = () => {
  const navigate = useNavigate()

  const [dataFile, setDataFile] = useState(null)
  const [historyFile, setHistoryFile] = useState(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [clientSecret, setClientSecret] = useState('')

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const userInfo = useSelector(state => state.auth.userInfo)

  const validateFormat = (sampleArray, testArray) => {
    return (
      sampleArray.length === testArray.length &&
      new Set(sampleArray).size === new Set([...sampleArray, ...testArray]).size
    )
  }

  const loadCSV = (e, type) => {
    const reader = new FileReader()
    const file = e.target.files[0]
    reader.onload = e => {
      const csvContent = e.target.result // CSV file content as string
      const rows = csvContent.split('\n') // Split into rows
      const firstRowData = rows[0].split(',') // Extract and split the first row

      if (
        !validateFormat(
          type === 'data' ? dataFileFormat : historyFileFormat,
          firstRowData
        )
      ) {
        toast.warn('Invalid Format')
        return
      }
      if (type === 'data') setDataFile(file)
      else setHistoryFile(file)
    }
    reader.readAsText(file)
  }

  const uploadCSVs = () => {
    if (!dataFile || !historyFile) {
      toast.warn('Please select xlsx or csv file')
      return
    }
    const formData = new FormData()

    formData.append('files', dataFile)
    formData.append('files', historyFile)

    getBrowserFingerprint().then(fingerprint => {
      formData.append('fingerprint', fingerprint)
      fetch(`${BACKEND_URL}upload_csv`, {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(res => {
          window.localStorage.setItem(
            'file_list',
            JSON.stringify({
              dataFile: res.list[0],
              historyFile: res.list[1]
            })
          )
          if (res.status === 'success') navigate('/chart')
        })
        .catch(err => {
          console.error(err)
        })
    })
  }

  const onClickBuyButton = () => {
    fetch(`${BACKEND_URL}createPaymentIntent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async response => {
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.detail)
        }
        return response.json()
      })
      .then(res => {
        setClientSecret(res.clientSecret)
        setShowPaymentModal(true)
      })
      .catch(err => {
        toast.error(err.toString().replace('Error:', ''))
      })
  }

  return (
    <div>
      <div className='flex items-center'>
        <h1 className='text-3xl font-semibold text-[#005fab]'>
          Effortlessly create a sales pipeline history waterfall chart
        </h1>
        <a
          href='/instruction.html'
          className='ml-4 text-blue-600 text-2xl underline'
          target='_blank'
        >
          Instructions here
        </a>
      </div>

      <div className='grid grid-cols-2 gap-8'>
        <FileUploadInput
          id='upload-data'
          name='file-upload-data'
          step='Step 1:'
          title='Upload your current state pipeline data'
          loadFile={e => loadCSV(e, 'data')}
        />
        <FileUploadInput
          id='upload-history'
          name='file-upload-history'
          step='Step 2:'
          title='Upload your pipeline history'
          loadFile={e => loadCSV(e, 'history')}
        />
      </div>
      <div className='w-full  mt-4'>
        <p className='w-fit mx-auto text-3xl font-semibold text-[#005fab]'>
          Step 3:
        </p>
      </div>
      <div className='w-full flex justify-center mt-2'>
        <button
          type='button'
          className='rounded bg-white hover:bg-[#eaf5fe] text-[#0176d3] px-8 py-4 text-2xl font-semibold border-[2px] b border-[#0176d3] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
          onClick={uploadCSVs}
        >
          View Pipeline Waterfall
        </button>
      </div>
      <div className='grid mt-10 grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-8'>
        {serviceData.map((item, index) => {
          const { icon, title, text } = item
          return (
            <ServiceCard icon={icon} title={title} text={text} key={index} />
          )
        })}
      </div>
      <div className='grid mt-10 grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-8'>
        {purchaseData.map((item, index) => {
          const { title, text, hourText, isFree, isLogin, isFocus, isBuy } =
            item
          return (
            <PurchaseCard
              title={title}
              text={text}
              hourText={hourText}
              isFree={isFree}
              isLogin={isLogin}
              isFocus={isFocus}
              isBuy={isBuy}
              key={index}
              onClickBuyButton={onClickBuyButton}
            />
          )
        })}
        <PurchaseCard
          title={freeRegisterData.title}
          text={freeRegisterData.text}
          hourText={freeRegisterData.hourText}
          isFree={freeRegisterData.isFree}
          isLogin={freeRegisterData.isLogin && !isAuthenticated}
          isFocus={freeRegisterData.isFocus}
          isBuy={freeRegisterData.isBuy && isAuthenticated}
          key={freeRegisterData.index}
          onClickBuyButton={onClickBuyButton}
        />

        <PurchaseCard
          title={subscribeData.title}
          text={subscribeData.text}
          hourText={subscribeData.hourText}
          isFree={subscribeData.isFree}
          isLogin={subscribeData.isLogin && !isAuthenticated}
          isFocus={subscribeData.isFocus}
          isBuy={
            subscribeData.isBuy && isAuthenticated && !userInfo.isSubscribe
          }
          key={subscribeData.index}
          onClickBuyButton={onClickBuyButton}
        />
      </div>
      <NeedMorePanel />
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        clientSecret={clientSecret}
      />
    </div>
  )
}

export default Home
