import React, { useEffect } from 'react'
import { AppDispatch, RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerPolicies } from '../../../redux/slice/dashboardSlice';
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
import { Box, Button, Chip, Stack } from '@mui/material';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';

const CustomerPolicies = () => {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.dashboard.policies.loading)
  const policies = useSelector((state: RootState) => state.dashboard.policies.data) || [];
  const columns: GridColDef<any>[] = [
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

  const refreshCustomerPolicies = () => dispatch(getCustomerPolicies())

  const CustomToolbar = () => {
    return <GridToolbarContainer>
      <Stack direction='row' sx={{ width: '100%' }} p={1}>
        <Box flexGrow={1} />
        <Button size='small' startIcon={<CachedRoundedIcon />} onClick={refreshCustomerPolicies}>
          Refresh
        </Button>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </Stack>

    </GridToolbarContainer>
  }

  useEffect(() => {
    if (policies.length === 0 && !loading) dispatch(getCustomerPolicies())
  }, [policies, loading, dispatch])

  return (
    <div style={{ height: 550, width: '100%' }}>
      <DataGrid
        slots={{
          toolbar: CustomToolbar
        }}
        loading={loading}
        rows={policies}
        columns={columns}
        checkboxSelection
        pageSizeOptions={[10, 20, 50]} // Options for selecting page size
        getRowId={(row) => row.application_id}
      />
    </div>
  )
}

export default CustomerPolicies