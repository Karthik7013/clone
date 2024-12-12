import { Box, Button, Chip, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import { DataGrid, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
import LoadingModal from '../../../Framework/components/LoadingModal';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import { getCustomerClaims } from '../../../redux/slice/dashboardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';

const MyClaims = () => {
  const dispatch: AppDispatch = useDispatch();
  const claims = useSelector((state: RootState) => state.dashboard.myclaims.data) || [];
  const loading = useSelector((state: RootState) => state.dashboard.myclaims.loading)


  useEffect(() => {
  }, [dispatch])
  // policy number,
  // policy type
  const columns = [
    { field: 'claim_id', headerName: 'Claim ID', width: 150 },
    { field: 'policy_number', headerName: 'Policy Number', width: 150 },
    { field: 'policy_type', headerName: 'Policy Type', width: 150 },
    { field: 'insured_company', headerName: 'Insured Company', width: 150 },

    {
      field: 'claim_date', headerName: 'Claim Date', width: 150,
      renderCell: (params) => {
        return params.value.split('T')[0] // Format the date to MM/DD/YYYY
      }
    },
    { field: 'coverage_amount', headerName: 'Claim Amount', width: 150 },
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
        return <Chip variant='outlined' label={status} color={defaultColor} size="small" />;
      }
    },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'remarks', headerName: 'Remarks', width: 150 },
    {
      field: 'updated_at', headerName: 'Last Modify', width: 150,
      renderCell: (params) => {
        return params.value.split('T')[0]  // Format the update_at date with time
      }
    },
  ];

  const CustomToolbar = () => {
    return <GridToolbarContainer>
      <Stack direction='row' sx={{ width: '100%' }} p={1}>
        <Box flexGrow={1} />
        <Button size='small' startIcon={<CachedRoundedIcon />} onClick={() => dispatch(getCustomerClaims())}>
          Refresh
        </Button>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </Stack>

    </GridToolbarContainer>
  }
  useEffect(() => {
    dispatch(getCustomerClaims())
  }, [dispatch])

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




      <div style={{ height: 550, width: '100%' }}>
        <DataGrid
          loading={loading}
          slots={{
            toolbar: CustomToolbar
          }}
          rowsPerPageOptions={[10, 20, 50]}
          rows={claims}
          columns={columns}
          checkboxSelection
          getRowId={(row) => row.claim_id} // Use PolicyID as the unique identifier
        />
      </div>
    </Box>
  )
}

export default MyClaims