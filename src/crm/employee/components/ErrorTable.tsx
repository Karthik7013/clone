import { Avatar, Box, ButtonGroup, Card, Chip, Divider, Grid, IconButton, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { getErrorLogs } from '../../../redux/slice/dashboardSlice';


const ErrorTable = () => {
    const dispatch: AppDispatch = useDispatch()

    const columns: GridColDef[] = [
        { field: 'ErrorID', headerName: 'Error ID', flex: 1 },
        {
            field: 'ErrorMessage', headerName: 'Error Name',
            type: "string",
            renderCell: (params) => <Typography gutterBottom={false} component='div' variant='subtitle2' color='error'>{params.value}</Typography>
            , flex: 1
        },
        { field: 'ErrorType', headerName: 'Error Type', flex: 1 },
        { field: 'Serverity', headerName: 'Serverity', flex: 1 },
        { field: 'ErrorSource', headerName: 'Error Source', flex: 1 },
        {
            field: 'StackTrace', headerName: 'Stack Trace', flex: 1,
            renderCell: (params) => {
                return <Tooltip title={<Typography dangerouslySetInnerHTML={{
                    __html: params.value
                }} />}>
                    <Typography color='error' component='div' dangerouslySetInnerHTML={{
                        __html: params.value
                    }} />
                </Tooltip>
            }
        },
        { field: 'ErrorCode', headerName: 'Error Code', flex: 1 },
        { field: 'UserID', headerName: 'User ID', flex: 1 },
        { field: 'IPAddress', headerName: 'IP Address', flex: 1 },
        { field: 'Timestamp', headerName: 'Timestamp', flex: 1 }
    ];
    const rows = [
        {
            id: 1,
            ErrorID: 'E123',
            ErrorMessage: 'Null Pointer Exception',
            ErrorType: 'Runtime Error',
            Serverity: 'High',
            ErrorSource: 'API',
            StackTrace: 'Stack trace details here...',
            ErrorCode: '500',
            UserID: 'User001',
            IPAddress: '192.168.0.1',
            Timestamp: '2025-03-19T12:34:56Z',
        },
        {
            id: 2,
            ErrorID: 'E124',
            ErrorMessage: 'SQL Syntax Error',
            ErrorType: 'Database Error',
            Serverity: 'Medium',
            ErrorSource: 'Backend',
            StackTrace: 'Stack trace details here...',
            ErrorCode: '400',
            UserID: 'User002',
            IPAddress: '192.168.0.2',
            Timestamp: '2025-03-19T12:35:12Z',

        },
        {
            id: 3,
            ErrorID: 'E125',
            ErrorMessage: 'Timeout Exception',
            ErrorType: 'Network Error',
            Serverity: 'Low',
            ErrorSource: 'Frontend',
            StackTrace: 'Stack trace details here...',
            ErrorCode: '408',
            UserID: 'User003',
            IPAddress: '192.168.0.3',
            Timestamp: '2025-03-19T12:36:01Z',
        },
        // Add more rows as needed
    ];
    const loading = useSelector((state: RootState) => state.dashboard.error_logs.loading);
    const errors = useSelector((state: RootState) => state.dashboard.error_logs.data);
    const alert = useSelector((state: RootState) => state.dashboard.error_logs.alert);



    useEffect(() => {
        if (!errors?.length) dispatch(getErrorLogs({
            limit: 10,
            page: 1,
            fromDate: "2023-01-01",
            toDate: "2024-09-01"
        }))
    }, [])


    const StyledGridOverlay = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        '& .no-rows-primary': {
            fill: theme.palette.mode === 'light' ? '#AEB8C2' : '#3D4751',
        },
        '& .no-rows-secondary': {
            fill: theme.palette.mode === 'light' ? '#E8EAED' : '#1D2126',
        }
    }));

    function CustomNoRowsOverlay() {
        return (
            <StyledGridOverlay>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width={96}
                    viewBox="0 0 452 257"
                    aria-hidden
                    focusable="false"
                >
                    <path
                        className="no-rows-primary"
                        d="M348 69c-46.392 0-84 37.608-84 84s37.608 84 84 84 84-37.608 84-84-37.608-84-84-84Zm-104 84c0-57.438 46.562-104 104-104s104 46.562 104 104-46.562 104-104 104-104-46.562-104-104Z"
                    />
                    <path
                        className="no-rows-primary"
                        d="M308.929 113.929c3.905-3.905 10.237-3.905 14.142 0l63.64 63.64c3.905 3.905 3.905 10.236 0 14.142-3.906 3.905-10.237 3.905-14.142 0l-63.64-63.64c-3.905-3.905-3.905-10.237 0-14.142Z"
                    />
                    <path
                        className="no-rows-primary"
                        d="M308.929 191.711c-3.905-3.906-3.905-10.237 0-14.142l63.64-63.64c3.905-3.905 10.236-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142l-63.64 63.64c-3.905 3.905-10.237 3.905-14.142 0Z"
                    />
                    <path
                        className="no-rows-secondary"
                        d="M0 10C0 4.477 4.477 0 10 0h380c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 20 0 15.523 0 10ZM0 59c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 69 0 64.523 0 59ZM0 106c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 153c0-5.523 4.477-10 10-10h195.5c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 200c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 247c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10Z"
                    />
                </svg>
                <Box sx={{ mt: 2 }}>No rows</Box>
            </StyledGridOverlay>
        );
    }

    function ToolbarHeader(props: unknown) {
        return (
            <>
                <GridToolbarContainer sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', p: 2 }}>
                    <Box ml={1}>
                        <GridToolbarQuickFilter />
                    </Box>
                    <Box>
                        <Card>
                            <ButtonGroup disableElevation variant='outlined' color='error' sx={{ mr: 1 }}>
                                <TextField

                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            border: 'none', // Remove the border
                                            '& fieldset': {
                                                border: 'none', // Remove the border around the input
                                            },
                                        },
                                    }}
                                    size="small"
                                    type="date"
                                />

                                <TextField
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            border: 'none', // Remove the border
                                            '& fieldset': {
                                                border: 'none', // Remove the border around the input
                                            },
                                        },
                                    }}
                                    size="small"
                                    type="date"
                                />

                            </ButtonGroup>
                        </Card>
                        <GridToolbarFilterButton />
                        <GridToolbarExport />
                    </Box>
                </GridToolbarContainer>
                <Divider />
            </>

        );
    }

    return (
        <Grid container>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>

                <Box sx={{ height: 640, mt: 1 }}>
                    <DataGrid
                        sx={{ '--DataGrid-overlayHeight': '300px' }}
                        slots={{
                            noRowsOverlay: CustomNoRowsOverlay,
                            toolbar: ToolbarHeader,
                        }}
                        paginationMode='server'
                        loading={loading}
                        density='standard'
                        checkboxSelection={false}
                        rows={errors} columns={columns}
                        getRowId={(row) => row.ErrorID}
                        disableRowSelectionOnClick
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default ErrorTable