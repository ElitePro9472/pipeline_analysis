import React from 'react'
import DataTable from 'react-data-table-component'

const sortNumber = (rowA, rowB, field) => {
  const a = rowA[field]
  const b = rowB[field]

  if (a > b) {
    return 1
  }

  if (b > a) {
    return -1
  }

  return 0
}

const sortString = (rowA, rowB, field) => {
  const a = rowA[field]
  const b = rowB[field]
  if (a > b) {
    return 1
  }

  if (b > a) {
    return -1
  }

  return 0
}

const columns = [
  {
    name: 'No',
    selector: row => row.no,
    sortable: true,
    sortField: 'no',
    sortFunction: (a, b) => sortNumber(a, b, 'no')
  },
  {
    name: 'Opportunity Name',
    selector: row => row.opportunity_name,
    sortable: true,
    sortField: 'opportunity_name',
    sortFunction: (a, b) => sortString(a, b, 'opportunity_name')
  },
  {
    name: 'Stage',
    selector: row => row.stage,
    sortable: true,
    sortField: 'stage',
    sortFunction: (a, b) => sortString(a, b, 'stage')
  },
  {
    name: 'Amount-Dollars',
    selector: row => row.net_new_dollars,
    sortable: true,
    format: row => row.net_new_dollars.toLocaleString(),
    sortField: 'net_new_dollars',
    sortFunction: (a, b) => sortNumber(a, b, 'net_new_dollars')
  },
  {
    name: 'Created Date',
    selector: row => row.created_date,
    sortable: true,
    sortField: 'created_date',
    sortFunction: (a, b) => sortString(a, b, 'created_date')
  },
  {
    name: 'Close Date',
    selector: row => row.close_date,
    sortable: true,
    sortField: 'close_date',
    sortFunction: (a, b) => sortString(a, b, 'close_date')
  }
]

const PipeLineTable = ({ data }) => {
  return <DataTable columns={columns} data={data} />
}

export default PipeLineTable
