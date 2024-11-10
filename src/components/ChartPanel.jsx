// src/ChartComponent.js
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement, // Import PointElement for points on the chart
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register all necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)
const ChartPanel = ({ data, options }) => {
  return <Line data={data} options={options} />
}

export default ChartPanel
