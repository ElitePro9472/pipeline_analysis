const Salesforce = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold'>Salesforce</h1>
      <div className='mt-4'>
        <h2 className='text-2xl font-medium'>Pipeline File</h2>
        <ul className='mt-2 text-xl'>
          <li>1. Navigate to Reports in Salesforce</li>
          <li>
            2. Create a New Report and choose the Opportunities report type.
          </li>
          <li>
            3. Add Filters
            <ul className='pl-4'>
              <li>- Opportunity Status: Open and Closed</li>
              <li>- Opportunity Type: New Customer</li>
            </ul>
          </li>
          <li>
            4. Add the Following Fields
            <ul className='pl-4'>
              <li>- Opportunity Name </li>
              <li>- Account Name </li>
              <li>- Created Date </li>
              <li>- Close Date </li>
              <li>- Stage </li>
              <li>- Owner </li>
              <li>- Amount(or equivalent, like Net-New Dollars) </li>
              <li>- Type</li>
            </ul>
          </li>
          <li>
            5. Run the Report and then select Export as Excel (.xlsx) or CSV
            (.csv)
          </li>
        </ul>
      </div>
      <div className='mt-4'>
        <h2 className='text-2xl font-medium'>Pipeline History File</h2>
        <ul className='mt-2 text-xl'>
          <li>
            1. Create a New Report and choose Opportunity History as the report
            type.
          </li>
          <li>
            2. Add Filters
            <ul className='pl-4'>
              <li>- Opportunity Status: All</li>
              <li>- Opportunity Type: New Customer</li>
            </ul>
          </li>
          <li>
            3. Add the Following Fields
            <ul className='pl-4'>
              <li>- Opportunity Name</li>
              <li>- Stage</li>
              <li>- From Stage</li>
              <li>- To Stage</li>
              <li>- Close Date</li>
              <li>- Last Modified Date</li>
            </ul>
          </li>
          <li>4. Run and Export the report as Excel (.xlsx) or CSV (.csv).</li>
        </ul>
      </div>
    </div>
  )
}

export default Salesforce
