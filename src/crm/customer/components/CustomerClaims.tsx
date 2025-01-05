import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Box, Button, Chip, Stack } from '@mui/material';
import { getCustomerClaims } from '../../../redux/slice/dashboardSlice';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';

const CustomerClaims = () => {
    const claims = useSelector((state: RootState) => state.dashboard.myclaims.data) || [];
    const loading = useSelector((state: RootState) => state.dashboard.myclaims.loading);
    const dispatch: AppDispatch = useDispatch();
    const columns: GridColDef<any>[] = [
        { field: 'claim_id', headerName: 'Claim ID', width: 150 },
        { field: 'policy_number', headerName: 'Policy Number', width: 150 },
        { field: 'policy_type', headerName: 'Policy Type', width: 150 },
        { field: 'insured_company', headerName: 'Insured Company', width: 150 },

        {
            field: 'claim_date', headerName: 'Claim Date', width: 150,
            renderCell: (params): string => {
                return params.value.split('T')[0] // Format the date to MM/DD/YYYY
            }
        },
        { field: 'coverage_amount', headerName: 'Claim Amount', width: 150 },
        {
            field: 'claim_status', headerName: 'Claim Status', width: 150,
            renderCell: (params) => {
                const status = params.value;
                let defaultColor: 'default' | 'success' | 'error' | 'warning' = 'default';
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
    const refreshCustomerClaims = () => dispatch(getCustomerClaims())
    const CustomToolbar = () => {
        return <GridToolbarContainer>
            <Stack direction='row' sx={{ width: '100%' }} p={2}>
                <GridToolbarQuickFilter />
                <Box flexGrow={1} />
                <Button size='small' startIcon={<CachedRoundedIcon />} onClick={refreshCustomerClaims}>
                    Refresh
                </Button>
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
            </Stack>
        </GridToolbarContainer>
    }
    useEffect(() => {
        if (claims.length === 0 && !loading) dispatch(getCustomerClaims())
    }, [claims, loading, dispatch])
    return (
        <div style={{ height: 550, width: '100%' }}>
            <DataGrid
                loading={loading}
                slots={{
                    toolbar: CustomToolbar
                }}
                pageSizeOptions={[10, 20, 50]} // Options for selecting page size
                rows={claims}
                columns={columns}
                checkboxSelection
                getRowId={(row) => row.claim_id} // Use PolicyID as the unique identifier
            />
        </div>
    )
}

export default CustomerClaims