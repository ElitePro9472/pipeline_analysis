import React from 'react'
import FileUploadInput from '../components/FileUploadinput'
import ServiceCard from '../components/ServiceCard'
import AccurateIcon from '../assets/icons/accurate.svg'
import InstitutionalIcon from '../assets/icons/institutional.svg'
import SecureIcon from '../assets/icons/secure.svg'
import PurchaseCard from '../components/PurchaseCard'
import NeedMorePanel from '../components/NeedMorePanel'

const serviceData = [
  {
    icon: SecureIcon,
    title: 'Secure',
    text: 'With years of experience in banking we comply with strict standards when handling your files.'
  },
  {
    icon: InstitutionalIcon,
    title: 'Institutional',
    text: "We've provided our services to thousands of reputable financial, accounting and legal firms."
  },
  {
    icon: AccurateIcon,
    title: 'Accurate',
    text: "We're continually improving our algorithms. If a file doesn't convert to your expectations, email us and we'll fix it."
  }
]

const purchaseData = [
  {
    title: 'Anonymous',
    text: 'Anonymous conversions with no need to sign up',
    hourText: '1 page every 24 hours',
    isFree: true,
    isRegister: false,
    isFocus: false
  },
  {
    title: 'Registered',
    text: 'Registration is free',
    hourText: '5 pages every 24 hours',
    isFree: true,
    isRegister: true,
    isFocus: false
  },
  {
    title: 'Subscribe',
    text: 'Subscribe to convert more documents',
    hourText: '',
    isFree: false,
    isRegister: true,
    isFocus: true
  }
]

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold'>
        The world's most trusted pipeline for analysis
      </h1>
      <p className='text-lg mt-2'>
        Easily build chart statements from clean Excel (XLS, CSV) format.
      </p>
      <FileUploadInput />
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
          const { title, text, hourText, isFree, isRegister, isFocus } = item
          return (
            <PurchaseCard
              title={title}
              text={text}
              hourText={hourText}
              isFree={isFree}
              isRegister={isRegister}
              isFocus={isFocus}
              key={index}
            />
          )
        })}
      </div>
      <NeedMorePanel />
    </div>
  )
}

export default Home
