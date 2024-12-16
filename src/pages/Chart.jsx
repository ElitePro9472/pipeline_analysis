import React, { useEffect, useState } from 'react'
import ChartPanel from '../components/ChartPanel'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import PipeLineTable from '../components/PipeLineTable'
import { BACKEND_URL } from '../constant'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getBrowserFingerprint } from '../utlls/fingerprinter'
const moment = require('moment')

const Chart = () => {
  const start = dayjs('2024-07-01').format('YYYY-MM-DD')
  const end = dayjs('2024-12-31').format('YYYY-MM-DD')
  const [startDate, setStartDate] = useState(start)
  const [endDate, setEndDate] = useState(end)
  const [amount, setAmount] = useState([])
  const [values, setValues] = useState([])
  const [tableData, setTableData] = useState([])
  const userInfo = useSelector(state => state.auth.userInfo)

  const chartData = {
    labels: [
      'Beginning Pipeline',
      'Adjusted New Pipeline',
      'Won',
      'Lost',
      'Pulled to 2024',
      'Pushed to 2025',
      'Ending Pipeline'
    ],
    datasets: [
      {
        label: 'Pipeline Stages',
        data: values,
        backgroundColor: [
          '#7fc9ed', // Beginning Pipeline
          '#7fc9ed', // Adjusted New Pipeline
          '#e68b8b', // Won (indicating positive change)
          '#e68b8b', // Lost (indicating negative change)
          '#e68b8b', // Pulled to 2024
          '#001a66', // Pushed to 2025
          '#001a66' // Ending Pipeline
        ],
        borderColor: [
          '#7fc9ed',
          '#7fc9ed',
          '#e68b8b',
          '#e68b8b',
          '#e68b8b',
          '#001a66'
        ],
        borderWidth: 1
      }
    ]
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value (Millions)'
        }
      },
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Pipeline Stages'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: context => {
            return `${context.raw[1]} \n $${parseFloat(
              context.raw[1] - context.raw[0]
            ).toFixed(2)}M`
          }
        }
      },
      title: {
        display: true,
        text: `Pipeline Bridge Chart (${startDate} to ${endDate}) (Millions)`,
        font: {
          size: 16
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#000',
        formatter: value => `$${(value[1] - value[0]).toFixed(2)}M`,
        font: {
          weight: 'bold'
        }
      }
    }
  }

  const [curCategoryIndex, setCurCategoryIndex] = useState(0)

  const processValues = values => {
    setAmount(values)
    let tempValues = [...values].reduce((acc, value) => {
      // Get the last end value from the previous pair or start at 0
      const lastEnd = acc.length > 0 ? acc[acc.length - 1][1] : 0
      let sum = (lastEnd + value).toFixed(2)
      acc.push([lastEnd, parseFloat(sum)])
      return acc
    }, [])
    tempValues[tempValues.length - 1] = [0, [...values].pop()]
    setValues(tempValues)
  }

  const processTableData = table_data => {
    let tempTableData = []
    for (const [, value] of Object.entries(table_data)) {
      let temp = []
      for (const [key, item] of Object.entries(value)) {
        temp.push({
          no: parseInt(key),
          opportunity_name: item['Opportunity Name'],
          stage: item['Stage'],
          net_new_dollars: item['Amount-Dollars'],
          created_date: moment(item['Created Date']).format('YYYY-MM-DD'),
          close_date: moment(item['Close Date']).format('YYYY-MM-DD')
        })
      }
      tempTableData.push(temp)
    }
    setTableData(tempTableData)
  }

  useEffect(() => {
    const { dataFile, historyFile } = JSON.parse(
      window.localStorage.getItem('file_list')
    )

    getBrowserFingerprint().then(fingerprint => {
      fetch(
        `${BACKEND_URL}getPipline?startDate=${startDate}&endDate=${endDate}&dataFile=${dataFile}&historyFile=${historyFile}&id=${
          userInfo.id ?? 0
        }&fingerprint=${fingerprint}`,
        {
          method: 'GET'
        }
      )
        .then(async response => {
          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.detail)
          }
          return response.json()
        })
        .then(res => {
          let { table_data, values } = res
          processValues(values)
          processTableData(table_data)
        })
        .catch(err => {
          toast.error(err.toString().replace('Error:', ''))
        })
    })
  }, [startDate, endDate, userInfo.id])

  return (
    <div>
      <div className='mx-8'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <div className='flex justify-between w-full'>
              <DatePicker
                label='Start Date'
                format='YYYY-MM-DD'
                defaultValue={dayjs(start)}
                onChange={date => setStartDate(date.format('YYYY-MM-DD'))}
              />
              <DatePicker
                format='YYYY-MM-DD'
                label='Close Date'
                defaultValue={dayjs(end)}
                onChange={date => setEndDate(date.format('YYYY-MM-DD'))}
              />
            </div>
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className='mt-8'>
        <ChartPanel
          data={chartData}
          options={options}
          clickChart={index => setCurCategoryIndex(index)}
        />
      </div>
      <div className='w-full mx-auto mt-4'>
        <label
          htmlFor='pipeline_type'
          className='block text-sm/6 font-medium text-gray-900'
        >
          Select Pipeline Stage to View Details:
        </label>
        <select
          id='pipeline_type'
          name='location'
          className='w-full mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm/6'
          onChange={e => setCurCategoryIndex(e.target.value)}
          value={curCategoryIndex}
        >
          {chartData.labels.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className='mt-4'>
        <p>Total {chartData.labels[curCategoryIndex]} Value (Millions)</p>
        <h1 className='text-3xl mt-4'>${amount[curCategoryIndex]}M</h1>
        <p className='mt-2'>
          Details for: {chartData.labels[curCategoryIndex]}
        </p>
      </div>
      <div className='mb-20 mt-2'>
        <PipeLineTable data={tableData[curCategoryIndex]} />
      </div>
    </div>
  )
}

export default Chart
