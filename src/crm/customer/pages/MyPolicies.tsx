import React, { useEffect, useMemo } from 'react';
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
import { Box, Button, Checkbox, Chip, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ProtectedRoutes from '../../../ProtectedRoute';
import MessageBox from '../../../Framework/components/MessageBox';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import { useDispatch, useSelector } from 'react-redux';
import { RootProps } from '../../../types/RootProps';
import { AppDispatch, RootState } from '../../../redux/store';
import { getCustomerPolicies } from '../../../redux/slice/dashboardSlice';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';



const MyPolicies = () => {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.dashboard.loading)
  const policies = useSelector((state: RootState) => state.dashboard.data?.policies) || []
  useEffect(() => {
    dispatch(getCustomerPolicies())
  }, [dispatch])

  const columns = [
    { field: 'application_id', headerName: 'Application ID', width: 150 },
    { field: 'policy_number', headerName: 'Policy ID', width: 150 },
    { field: 'policy_type', headerName: 'Policy Type', width: 150 },
    {
      field: 'start_date', headerName: 'Start Date', width: 150,
      renderCell: (params) => {
        const st_dt = params.value.split('T')[0];
        return (
          st_dt
        );
      }
    },
    {
      field: 'end_date', headerName: 'End Date', width: 150,
      renderCell: (params) => {
        const ed_dt = params.value.split('T')[0];
        return (
          ed_dt
        );
      }
    },
    { field: 'premium_amount', headerName: 'Premium Amount', width: 150 },
    { field: 'coverage_amount', headerName: 'Coverage Amount', width: 180 },
    { field: 'insured_name', headerName: 'Insured Name', width: 200 },
    { field: 'insured_company', headerName: 'Insured Company', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => {
        const status = params.value;
        return (
          <Chip
            variant='outlined'
            label={status}
            color={status === 'active' ? 'success' : status === 'inactive' ? 'error' : 'default'}
            size="small"
          />
        );
      }
    },

    { field: 'mode', headerName: 'Mode', width: 120 }
  ];

  const CustomToolbar = () => {
    return <GridToolbarContainer>
      <Stack direction='row' sx={{ width: '100%' }} p={1}>
        <Box flexGrow={1} />
        <Button size='small' startIcon={<CachedRoundedIcon />} onClick={() => dispatch(getCustomerPolicies())}>
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
      >

        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Policies</Typography>}
        />
      </ListItem>


      <div style={{ height: 550, width: '100%' }}>
        <DataGrid
          slots={{
            toolbar: CustomToolbar
          }}
          loading={loading}
          rows={policies}
          columns={columns}
          checkboxSelection
          rowsPerPageOptions={[10, 20, 50]}
          getRowId={(row) => row.application_id}
        />
      </div>


    </Box>
  )
}

export default React.memo(MyPolicies)