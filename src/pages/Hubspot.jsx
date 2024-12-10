const HubSpot = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold'>HubSpot</h1>
      <div className='mt-4'>
        <h2 className='text-2xl font-medium'>Pipeline File</h2>
        <ul className='mt-2 text-xl'>
          <li>1. Go to Reports &gt; Dashboards &gt; Create Custom Report.</li>
          <li>2. Select the Deals report type.</li>
          <li>
            3. Filter Criteria
            <ul className='pl-4'>
              <li>- Deal Status: Open and Closed</li>
              <li>
                - Deal Type: New Business or New Customer (based on your naming
                conventions)
              </li>
            </ul>
          </li>
          <li>
            4. Add the Following Fields
            <ul className='pl-4'>
              <li>- Deal Name (use this for Opportunity Name) </li>
              <li>- Company Name (use this for Account Name) </li>
              <li>- Create Date (use this for Created Date)</li>
              <li>- Close Date</li>
              <li>- Deal Stage (use this for Stage)</li>
              <li>- Deal Owner </li>
              <li>- Amount </li>
            </ul>
          </li>
          <li>5. Run and Export the report as Excel (.xlsx) or CSV (.csv).</li>
        </ul>
      </div>
      <div className='mt-4'>
        <h2 className='text-2xl font-medium'>Pipeline History File</h2>
        <ul className='mt-2 text-xl'>
          <li>
            1. From Reports, create a new custom report with the Deal Change
            History report type.
          </li>
          <li>
            Filter Criteria
            <ul className='pl-4'>
              <li>- Deal Status: All</li>
              <li>- Deal Type: New Business</li>
            </ul>
          </li>
          <li>
            3. Add the Following Fields
            <ul className='pl-4'>
              <li>- Deal Name</li>
              <li>- Stage (current)</li>
              <li>- Previous Stage</li>
              <li>- Stage Change Date</li>
              <li>- Close Date</li>
            </ul>
          </li>
          <li>4. Run and Export the report as Excel (.xlsx) or CSV (.csv)</li>
        </ul>
      </div>
    </div>
  )
}

export default HubSpot
