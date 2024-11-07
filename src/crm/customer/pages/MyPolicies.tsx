import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Checkbox, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const MyPolicies = () => {
  const columns = [
    { field: 'PolicyID', headerName: 'Policy ID', width: 150 },
    { field: 'PolicyNumber', headerName: 'Policy Number', width: 180 },
    { field: 'PolicyType', headerName: 'Policy Type', width: 150 },
    { field: 'StartDate', headerName: 'Start Date', width: 150 },
    { field: 'EndDate', headerName: 'End Date', width: 150 },
    { field: 'PremiumAmount', headerName: 'Premium Amount', width: 150 },
    { field: 'CoverageAmount', headerName: 'Coverage Amount', width: 180 },
    { field: 'InsuredName', headerName: 'Insured Name', width: 200 },
    { field: 'BeneficiaryName', headerName: 'Beneficiary Name', width: 200 },
    { field: 'Deductible', headerName: 'Deductible', width: 150 },
    { field: 'CoverageDetails', headerName: 'Coverage Details', width: 250 },
    { field: 'Exclusions', headerName: 'Exclusions', width: 250 },
    { field: 'PremiumPaymentFrequency', headerName: 'Payment Frequency', width: 180 },
    { field: 'Status', headerName: 'Status', width: 120 },
    { field: 'AgentID', headerName: 'Agent ID', width: 120 },
    { field: 'UnderwriterID', headerName: 'Underwriter ID', width: 150 },
    { field: 'ClaimHistory', headerName: 'Claim History', width: 200 },
    { field: 'RenewalDate', headerName: 'Renewal Date', width: 150 },
    { field: 'LastModified', headerName: 'Last Modified', width: 180 }
  ];
  const rows = [
    {
      "PolicyID": "P000000001",
      "PolicyNumber": "POL-2024-001",
      "PolicyType": "Auto",
      "StartDate": "2024-01-01",
      "EndDate": "2025-01-01",
      "PremiumAmount": 500.00,
      "CoverageAmount": 25000.00,
      "InsuredName": "John Doe",
      "InsuredAddress": "123 Elm Street, Springfield, IL, 62701",
      "BeneficiaryName": "Jane Doe",
      "BeneficiaryAddress": "123 Elm Street, Springfield, IL, 62701",
      "Deductible": 1000.00,
      "CoverageDetails": "Coverage includes collision, theft, and third-party liability.",
      "Exclusions": "Excludes damages from natural disasters.",
      "PremiumPaymentFrequency": "Annual",
      "Status": "Active",
      "AgentID": "A00001",
      "UnderwriterID": "U00001",
      "ClaimHistory": [
        {
          "ClaimID": "C0001",
          "ClaimDate": "2024-03-15",
          "ClaimAmount": 1500.00,
          "ClaimStatus": "Settled"
        }
      ],
      "RenewalDate": "2024-12-15",
      "LastModified": "2024-08-25T15:30:00Z"
    },
    {
      "PolicyID": "P000000002",
      "PolicyNumber": "POL-2024-002",
      "PolicyType": "Home",
      "StartDate": "2024-06-01",
      "EndDate": "2025-06-01",
      "PremiumAmount": 750.00,
      "CoverageAmount": 500000.00,
      "InsuredName": "Alice Smith",
      "InsuredAddress": "456 Oak Avenue, Riverdale, IL, 60614",
      "BeneficiaryName": "Bob Smith",
      "BeneficiaryAddress": "456 Oak Avenue, Riverdale, IL, 60614",
      "Deductible": 2000.00,
      "CoverageDetails": "Covers fire, theft, and flood damage.",
      "Exclusions": "Excludes earthquake damage.",
      "PremiumPaymentFrequency": "Annual",
      "Status": "Active",
      "AgentID": "A00002",
      "UnderwriterID": "U00002",
      "ClaimHistory": [],
      "RenewalDate": "2024-05-15",
      "LastModified": "2024-07-30T10:00:00Z"
    },
    // Add 18 more records here with similar structure but different data
  ]

  return (
    <Box mt={3}>
      <Typography gutterBottom variant='h4'>My Policies</Typography>
      <Typography color='text.secondary' gutterBottom variant='subtitle1'>Quick answers to questions to you may have. Can't find what you're looking for? Check out our <Link to="#">full documentation</Link></Typography>

      <div style={{ height: 550, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          getRowId={(row) => row.PolicyID} // Use PolicyID as the unique identifier
        />
      </div>
    </Box>

  )
}

export default MyPolicies