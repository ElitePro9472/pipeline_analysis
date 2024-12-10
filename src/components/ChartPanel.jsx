import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

// Register all necessary components, including the datalabels plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
)

const ChartPanel = ({ data, options, clickChart }) => {
  // Handler function for click events
  const handleClick = (event, chart) => {
    if (chart) clickChart(chart.index)
  }

  return (
    <Bar
      data={data}
      options={{
        ...options,
        onClick: (event, elements) => handleClick(event, elements[0])
      }}
    />
  )
}

export default ChartPanel
