import { Box, Button, Chip, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import { DataGrid, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
import LoadingModal from '../../../Framework/components/LoadingModal';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';

const MyClaims = () => {
  const columns = [
    { field: 'claim_id', headerName: 'Claim ID', width: 150 },
    { field: 'registered_claim_id', headerName: 'Registered ID', width: 150 },
    {
      field: 'claim_date', headerName: 'Claim Date', width: 150,
      // renderCell: (params) => {
      //   return format(new Date(params.value), 'MM/dd/yyyy'); // Format the date to MM/DD/YYYY
      // }
    },
    { field: 'claim_amount', headerName: 'Claim Amount', width: 150 },
    {
      field: 'claim_status', headerName: 'Claim Status', width: 150,
      renderCell: (params) => {
        const status = params.value;
        let defaultColor = 'default';
        if (status === 'Approved') {
          defaultColor = 'success'; // Green
        } else if (status === 'Rejected') {
          defaultColor = 'error'; // Red
        } else if (status === 'Pending') {
          defaultColor = 'warning'; // Yellow
        }
        return <Chip label={status} color={defaultColor} size="small" />;
      }
    },
    { field: 'description', headerName: 'Description', width: 150 },
    {
      field: 'update_at', headerName: 'Last Modify', width: 150,
      // renderCell: (params) => {
      //   return format(new Date(params.value), 'MM/dd/yyyy HH:mm'); // Format the update_at date with time
      // }
    },
  ];

  const rows = [
    {
      claim_id: 'C001',
      registered_claim_id: 'RC001',
      claim_date: '2024-03-01T14:00:00Z',
      claim_amount: 1500.00,
      claim_status: 'Approved',
      description: 'Car accident in Springfield',
      update_at: '2024-03-02T09:30:00Z',
    },
    {
      claim_id: 'C002',
      registered_claim_id: 'RC002',
      claim_date: '2024-05-10T10:30:00Z',
      claim_amount: 500.00,
      claim_status: 'Pending',
      description: 'Theft claim for stolen phone',
      update_at: '2024-05-11T11:45:00Z',
    },
    {
      claim_id: 'C003',
      registered_claim_id: 'RC003',
      claim_date: '2024-07-20T13:15:00Z',
      claim_amount: 2000.00,
      claim_status: 'Rejected',
      description: 'Fire damage in office',
      update_at: '2024-07-22T10:00:00Z',
    },
    {
      claim_id: 'C004',
      registered_claim_id: 'RC004',
      claim_date: '2024-06-18T16:45:00Z',
      claim_amount: 1200.00,
      claim_status: 'Approved',
      description: 'Medical claim for surgery',
      update_at: '2024-06-20T12:00:00Z',
    },
    {
      claim_id: 'C005',
      registered_claim_id: 'RC005',
      claim_date: '2024-04-10T09:00:00Z',
      claim_amount: 700.00,
      claim_status: 'Pending',
      description: 'Water leakage in the apartment',
      update_at: '2024-04-12T14:30:00Z',
    },
    // Add more rows as necessary
  ];

  const CustomToolbar = () => {
    return <GridToolbarContainer>
      <Stack direction='row' sx={{ width: '100%' }} p={1}>
        <Box flexGrow={1} />
        <Button size='small' startIcon={<CachedRoundedIcon />}>
          Refresh
        </Button>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </Stack>

    </GridToolbarContainer>
  }

  return (
    <Box mt={3}>
      <ListItem
        disableGutters
        // secondaryAction={
        //   <Stack direction='row' gap={1}>
        //     <Button size='small' variant='outlined' startIcon={<FilterListRoundedIcon />}>Filter</Button>
        //     <Button size='small' variant='outlined' startIcon={<FileUploadRoundedIcon />}>Export</Button>
        //   </Stack>

        // }
      >
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Claims</Typography>}
        />
      </ListItem>




      <div style={{ height: 450, width: '100%' }}>
        <DataGrid
          slots={{
            toolbar: CustomToolbar
          }}
          rows={rows}
          columns={columns}
          checkboxSelection
          // pageSize={10}
          // rowsPerPageOptions={[10, 20, 50]}
          getRowId={(row) => row.claim_id} // Use PolicyID as the unique identifier
        />
      </div>
      {/* <LoadingModal></LoadingModal> */}
    </Box>
  )
}

export default MyClaims