import { Link, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../constant'

const FileInstruction = () => {
  const navigate = useNavigate()

  const downloadTemplate = async () => {
    var filename = ''
    fetch(`${BACKEND_URL}downloadPipeline`, {
      method: 'GET'
    })
      .then(res => {
        const disposition = res.headers.get('Content-Disposition')
        filename = disposition.split(/;(.+)/)[1].split(/=(.+)/)[1]
        if (filename.toLowerCase().startsWith("utf-8''"))
          filename = decodeURIComponent(filename.replace("utf-8''", ''))
        else filename = filename.replace(/['"]/g, '')
        return res.blob()
      })
      .then(blob => {
        var url = window.URL.createObjectURL(blob)
        var a = document.createElement('a')
        a.href = url
        a.download = filename
        document.body.appendChild(a) // append the element to the dom
        a.click()
        a.remove() // afterwards, remove the element

        fetch(`${BACKEND_URL}downloadHistory`, {
          method: 'GET'
        })
          .then(res => {
            const disposition = res.headers.get('Content-Disposition')
            filename = disposition.split(/;(.+)/)[1].split(/=(.+)/)[1]
            if (filename.toLowerCase().startsWith("utf-8''"))
              filename = decodeURIComponent(filename.replace("utf-8''", ''))
            else filename = filename.replace(/['"]/g, '')
            return res.blob()
          })
          .then(blob => {
            var url = window.URL.createObjectURL(blob)
            var a = document.createElement('a')
            a.href = url
            a.download = filename
            document.body.appendChild(a) // append the element to the dom
            a.click()
            a.remove() // afterwards, remove the element
          })
      })
  }

  return (
    <div>
      <div>
        <h1 className='text-3xl font-semibold'>
          How to Prepare Your Files for Analysis
        </h1>
        <h2 className='text-xl mt-3'>
          Upload these files to gain actionable insights into your pipeline.
        </h2>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl'>Pipeline File Instructions</h2>
        <h3 className='mt-2'>This is description and purpose section</h3>
        <table className='w-full'>
          <thead>
            <tr>
              <th>Table:</th>
              <th>Required fields</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='font-semibold'>Opportunity Name:</td>
              <td>Unique identifier for each deal/opportunity.</td>
            </tr>
            <tr>
              <td className='font-semibold'>Account Name:</td>
              <td>Name of the associated account or company.</td>
            </tr>
            <tr>
              <td className='font-semibold'>Created Date:</td>
              <td>Date the opportunity was created.</td>
            </tr>
            <tr>
              <td className='font-semibold'>Stage:</td>
              <td>Current stage of the opportunity.</td>
            </tr>
            <tr>
              <td className='font-semibold'>Owner:</td>
              <td>Person responsible for the opportunity.</td>
            </tr>
            <tr>
              <td className='font-semibold'>Amount:</td>
              <td>Total revenue amount for the opportunity.</td>
            </tr>
            <tr>
              <td className='font-semibold'>Type:</td>
              <td>Opportunity type (e.g., New Customer).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='mt-12'>
        <h2 className='text-2xl'>Pipeline History File Instructions</h2>
        <h3 className='mt-2'>This is description and purpose section</h3>
        <table className='w-full'>
          <thead>
            <tr>
              <th>Table:</th>
              <th>Required fields</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='font-semibold'>Opportunity Name:</td>
              <td>Unique identifier for each deal/opportunity.</td>
            </tr>
            <tr>
              <td className='font-semibold'>From Stage:</td>
              <td>Previous stage of the opportunity.</td>
            </tr>
            <tr>
              <td className='font-semibold'>To Stage:</td>
              <td>Current stage of the opportunity.</td>
            </tr>
            <tr>
              <td className='font-semibold'>Close Date:</td>
              <td>Date the opportunity is expected to close.</td>
            </tr>
            <tr>
              <td className='font-semibold'>Last Modified Date:</td>
              <td>Date the stage was last modified.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='grid mt-12'>
        <h2 className='text-lg'>Detailed instructions for different CRMs</h2>
        <Link to='/salesforce' className='text-blue-600 text-lg'>
          -Salesforce
        </Link>
        <Link to='/hubspot' className='text-blue-600 text-lg'>
          -Hubspot
        </Link>
        <Link to='/microsoftdynamics365' className='text-blue-600 text-lg'>
          -MicrosoftDynamics365
        </Link>
      </div>
      <div className='mt-4 flex'>
        <button
          className='p-4 bg-primary text-center hover:bg-hover-button text-white py-3 rounded-md'
          onClick={() => {
            navigate('/')
          }}
        >
          I’m Ready to Upload My Files
        </button>
        <p
          href='/downloadTemplate'
          className='ml-8 text-lg text-blue-600 underline cursor-pointer'
          onClick={downloadTemplate}
        >
          Download Template
        </p>
      </div>
    </div>
  )
}

export default FileInstruction
