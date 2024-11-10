import React from 'react'
import ChartPanel from '../components/ChartPanel'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const Chart = () => {
  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        label: 'Monthly Sales ($)',
        data: [300, 200, 400, 500, 600, 700, 800, 300, 400, 600, 200, 700],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Monthly profit ($)',
        data: [100, 300, 500, 351, 538, 272, 748, 345, 835, 354, 385, 435],
        backgroundColor: '#465345',
        borderColor: '#465345',
        borderWidth: 1
      }
    ]
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true
      },
      x: {
        type: 'category'
      }
    },
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        enabled: true
      }
    }
  }

  return (
    <div>
      <div className='mx-8'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <div className='flex justify-between w-full'>
              <DatePicker label='Start Date' />
              <DatePicker label='Close Date' />
            </div>
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className='mt-8'>
        <ChartPanel data={data} options={options} />
      </div>
    </div>
  )
}

export default Chart
