import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Checkbox, Chip, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ProtectedRoutes from '../../../ProtectedRoute';
import MessageBox from '../../../Framework/components/MessageBox';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';

const MyPolicies = () => {
  const columns = [
    { field: 'application_id', headerName: 'Application ID', width: 150 },
    { field: 'policy_id', headerName: 'Policy ID', width: 150 },
    { field: 'policy_type', headerName: 'Policy Type', width: 150 },
    { field: 'start_date', headerName: 'Start Date', width: 150 },
    { field: 'end_date', headerName: 'End Date', width: 150 },
    { field: 'premium_amount', headerName: 'Premium Amount', width: 150 },
    { field: 'coverage_amount', headerName: 'Coverage Amount', width: 180 },
    { field: 'insured_name', headerName: 'Insured Name', width: 200 },
    { field: 'insured_company', headerName: 'Insured Company', width: 200 },
    { field: 'beneficiary_name', headerName: 'Beneficiary Name', width: 200 },
    { field: 'coverage_details', headerName: 'Coverage Details', width: 250 },

    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => {
        // Get the status value from the cell
        const status = params.value;
        return (
          <Chip
            label={status}
            color={status === 'Active' ? 'success' : status === 'Inactive' ? 'error' : 'default'}
            size="small"
          />
        );
      }
    },

    { field: 'mode', headerName: 'Mode', width: 120 },
    { field: 'agent_id', headerName: 'Agent ID', width: 120 },
    { field: 'customer_id', headerName: 'Customer ID', width: 120 },
    { field: 'employee_id', headerName: 'Employee ID', width: 120 },
    { field: 'updated_at', headerName: 'Last Modified', width: 180 },
  ];
  const rows = [
    {
      application_id: "P000000001",
      policy_id: "POL-2024-001",
      policy_type: "Auto",
      start_date: "2024-01-01",
      end_date: "2025-01-01",
      premium_amount: 500.00,
      coverage_amount: 25000.00,
      insured_name: "John Doe",
      insured_company: "ABC Insurance Co.",
      beneficiary_name: "Jane Doe",
      coverage_details: "Coverage includes collision, theft, and third-party liability.",
      status: "Active",
      mode: "Annual",
      agent_id: "A00001",
      customer_id: "C00001",
      employee_id: "E00001",
      updated_at: "2024-08-25T15:30:00Z"
    },
    {
      application_id: "P000000002",
      policy_id: "POL-2024-002",
      policy_type: "Home",
      start_date: "2024-06-01",
      end_date: "2025-06-01",
      premium_amount: 750.00,
      coverage_amount: 500000.00,
      insured_name: "Alice Smith",
      insured_company: "XYZ Insurance Ltd.",
      beneficiary_name: "Bob Smith",
      coverage_details: "Covers fire, theft, and flood damage.",
      status: "Active",
      mode: "Annual",
      agent_id: "A00002",
      customer_id: "C00002",
      employee_id: "E00002",
      updated_at: "2024-07-30T10:00:00Z"
    },
    // New records (20 more) with similar structure:
    {
      application_id: "P000000003",
      policy_id: "POL-2024-003",
      policy_type: "Health",
      start_date: "2024-03-01",
      end_date: "2025-03-01",
      premium_amount: 600.00,
      coverage_amount: 100000.00,
      insured_name: "George Johnson",
      insured_company: "Healthy Life Insurers",
      beneficiary_name: "Sarah Johnson",
      coverage_details: "Covers medical expenses including surgery and hospitalization.",
      status: "Active",
      mode: "Monthly",
      agent_id: "A00003",
      customer_id: "C00003",
      employee_id: "E00003",
      updated_at: "2024-08-01T14:00:00Z"
    },
    {
      application_id: "P000000004",
      policy_id: "POL-2024-004",
      policy_type: "Auto",
      start_date: "2024-05-01",
      end_date: "2025-05-01",
      premium_amount: 450.00,
      coverage_amount: 20000.00,
      insured_name: "James Brown",
      insured_company: "Speedy Auto Insure",
      beneficiary_name: "Emily Brown",
      coverage_details: "Coverage includes accident damage and theft.",
      status: "Active",
      mode: "Annual",
      agent_id: "A00004",
      customer_id: "C00004",
      employee_id: "E00004",
      updated_at: "2024-06-20T12:00:00Z"
    },
    {
      application_id: "P000000005",
      policy_id: "POL-2024-005",
      policy_type: "Home",
      start_date: "2024-02-01",
      end_date: "2025-02-01",
      premium_amount: 800.00,
      coverage_amount: 700000.00,
      insured_name: "Lily Green",
      insured_company: "Safe Home Insurance",
      beneficiary_name: "Tom Green",
      coverage_details: "Covers home fire and theft incidents.",
      status: "Inactive",
      mode: "Annual",
      agent_id: "A00005",
      customer_id: "C00005",
      employee_id: "E00005",
      updated_at: "2024-05-10T16:30:00Z"
    },
    {
      application_id: "P000000006",
      policy_id: "POL-2024-006",
      policy_type: "Health",
      start_date: "2024-07-01",
      end_date: "2025-07-01",
      premium_amount: 900.00,
      coverage_amount: 150000.00,
      insured_name: "David White",
      insured_company: "MedCare Insurance",
      beneficiary_name: "Linda White",
      coverage_details: "Covers hospital stays and major surgeries.",
      status: "Active",
      mode: "Monthly",
      agent_id: "A00006",
      customer_id: "C00006",
      employee_id: "E00006",
      updated_at: "2024-09-12T13:20:00Z"
    },
    {
      application_id: "P000000007",
      policy_id: "POL-2024-007",
      policy_type: "Life",
      start_date: "2024-08-01",
      end_date: "2025-08-01",
      premium_amount: 1200.00,
      coverage_amount: 500000.00,
      insured_name: "Margaret Black",
      insured_company: "LifeSecure Insurance",
      beneficiary_name: "William Black",
      coverage_details: "Life coverage for unexpected events.",
      status: "Active",
      mode: "Annual",
      agent_id: "A00007",
      customer_id: "C00007",
      employee_id: "E00007",
      updated_at: "2024-09-20T17:45:00Z"
    },
    {
      application_id: "P000000008",
      policy_id: "POL-2024-008",
      policy_type: "Auto",
      start_date: "2024-09-01",
      end_date: "2025-09-01",
      premium_amount: 550.00,
      coverage_amount: 30000.00,
      insured_name: "Paul Davis",
      insured_company: "Auto Protect Ltd.",
      beneficiary_name: "Helen Davis",
      coverage_details: "Coverage for accident and vandalism damages.",
      status: "Active",
      mode: "Annual",
      agent_id: "A00008",
      customer_id: "C00008",
      employee_id: "E00008",
      updated_at: "2024-10-05T10:00:00Z"
    },
    {
      application_id: "P000000009",
      policy_id: "POL-2024-009",
      policy_type: "Home",
      start_date: "2024-10-01",
      end_date: "2025-10-01",
      premium_amount: 950.00,
      coverage_amount: 1000000.00,
      insured_name: "Sophia Lee",
      insured_company: "HomeSecure Insurance",
      beneficiary_name: "John Lee",
      coverage_details: "Covers damage from fire, theft, and vandalism.",
      status: "Active",
      mode: "Annual",
      agent_id: "A00009",
      customer_id: "C00009",
      employee_id: "E00009",
      updated_at: "2024-10-12T11:15:00Z"
    },
    {
      application_id: "P000000010",
      policy_id: "POL-2024-010",
      policy_type: "Health",
      start_date: "2024-11-01",
      end_date: "2025-11-01",
      premium_amount: 700.00,
      coverage_amount: 120000.00,
      insured_name: "Olivia Harris",
      insured_company: "WellCare Insurers",
      beneficiary_name: "Lucas Harris",
      coverage_details: "Comprehensive medical coverage for hospitalization.",
      status: "Active",
      mode: "Annual",
      agent_id: "A00010",
      customer_id: "C00010",
      employee_id: "E00010",
      updated_at: "2024-11-01T09:00:00Z"
    },
    // You can continue this pattern for the remaining 10 records.
  ];

  return (
    <Box mt={3}>
      <ListItem
        disableGutters
        secondaryAction={
          <Stack direction='row' gap={1}>
            <Button size='small' variant='outlined' startIcon={<FilterListRoundedIcon />}>Filter</Button>
            <Button size='small' variant='outlined' startIcon={<FileUploadRoundedIcon />}>Export</Button>
          </Stack>

        }
      >
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Policies</Typography>}
        />
      </ListItem>


      <div style={{ height: 550, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          // pageSize={10}
          // rowsPerPageOptions={[10, 20, 50]}
          getRowId={(row) => row.application_id} // Use PolicyID as the unique identifier
        />
      </div>


    </Box>

  )
}

export default MyPolicies