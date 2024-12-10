const MicrosoftDynamics365 = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold'> Microsoft Dynamics 365</h1>
      <div className='mt-4'>
        <h2 className='text-2xl font-medium'>Pipeline File</h2>
        <ul className='mt-2 text-xl'>
          <li>1. Go to Sales &gt; Opportunities</li>
          <li>
            2. Filter Criteria
            <ul className='pl-4'>
              <li>- Opportunity Status: All</li>
              <li>- Opportunity Type: New Customer</li>
            </ul>
          </li>
          <li>
            3. Select Columns
            <ul className='pl-4'>
              <li>- Opportunity Name </li>
              <li>- Account Name </li>
              <li>- Created On (use this for Created Date) </li>
              <li>- Estimated Close Date (use this for Close Date) </li>
              <li>- Sales Stage (use this for Stage) </li>
              <li>- Owner </li>
              <li>- Estimated Revenue (use this for Amount)</li>
              <li>- Opportunity Type</li>
            </ul>
          </li>
          <li>4. Export Data by selecting Export to Excel or Export to CSV.</li>
        </ul>
      </div>
      <div className='mt-4'>
        <h2 className='text-2xl font-medium'>Pipeline History File</h2>
        <ul className='mt-2 text-xl'>
          <li>1. Go to Reports &gt; Opportunities &gt; Opportunity History.</li>
          <li>
            2. Filter Criteria
            <ul className='pl-4'>
              <li>- Opportunity Status: All</li>
              <li>- Opportunity Type: New Customer</li>
            </ul>
          </li>
          <li>
            3. Select Columns
            <ul className='pl-4'>
              <li>- Opportunity Name</li>
              <li>- From Stage</li>
              <li>- To Stage</li>
              <li>- Estimated Close Date</li>
              <li>- Modified On (use this for Last Modified Date)</li>
            </ul>
          </li>
          <li>4. Export the data as Excel (.xlsx) or CSV (.csv)</li>
        </ul>
      </div>
    </div>
  )
}

export default MicrosoftDynamics365
