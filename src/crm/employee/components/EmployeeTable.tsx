import { Avatar, Box, Button, Chip, Divider, Grid, IconButton, Stack, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MessageBox from '../../../Framework/components/MessageBox'
import { DataGrid, GridColDef, GridRowsProp, GridToolbarContainer } from '@mui/x-data-grid'
import { GroupAddRounded } from '@mui/icons-material';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesList } from '../../../redux/slice/dashboardSlice';
import { AppDispatch, RootState } from '../../../redux/store';

const EmployeeTable = () => {
    const dispatch: AppDispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.dashboard.employeesList.loading);
    const employeeList: GridRowsProp = useSelector((state: RootState) => state.dashboard.employeesList.data);

    useEffect(() => {
        if (employeeList.length === 0 && !loading)
            dispatch(getEmployeesList())
    }, [dispatch, loading, employeeList])




    const columns: GridColDef[] = [
        { field: 'employee_id', headerName: 'Employee ID', width: 150 },
        {
            field: 'firstname', headerName: 'Employee Name', width: 150,
            renderCell: (params) => (
                <Stack gap={2} alignItems={'center'} direction='row'>
                    <Avatar src={`https://avatar.iran.liara.run/username?username=${params.value[0]}`}>{params.value[0]}</Avatar>
                    <Link to={`profile/${params.row.employee_id}`}>{params.value}</Link>
                </Stack>
            )
        },
        { field: 'phone', headerName: 'Contact', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'gender', headerName: 'Gender', width: 150 },
        { field: 'dob', headerName: 'Date of Birth', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'state', headerName: 'State', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'pincode', headerName: 'Pincode', width: 150 },
        { field: 'country', headerName: 'Country', width: 150 },
        { field: 'department', headerName: 'Department', width: 150 },
        { field: 'designation', headerName: 'Designation', width: 150 },
        { field: 'salary', headerName: 'Salary', width: 150 },
        { field: 'status', headerName: 'Status', width: 150, renderCell: (params) => <Chip variant='filled' label={params.value} clickable /> },
        { field: 'joinedate', headerName: 'Join Date', width: 150 },
        {
            field: 'co10', headerName: 'Actions', width: 150, renderCell: (params) => {
                return <Stack direction={'row'}>
                    <IconButton><ModeEditRoundedIcon color='info' /></IconButton>
                    <IconButton><DeleteOutlineRoundedIcon color='error' /></IconButton>
                </Stack>
            }
        }
    ];


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
        },
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
                <GridToolbarContainer sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', p: 1 }}>
                    <Box>
                        <Typography variant="h6">
                            EmployeeManagement
                        </Typography>
                        <Typography variant='caption' color={'text.secondary'}>Manage All Employee Details and add new Employee</Typography>
                    </Box>
                    <Box>
                        <Button variant='contained' size='small' startIcon={<GroupAddRounded />}>New Employee</Button>
                    </Box>
                </GridToolbarContainer>
                <Divider />
            </>

        );
    }

    return (
        <Grid container>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                <MessageBox type='success'>
                    Records Updated
                </MessageBox>
                <Box sx={{ height: 640, mt: 1 }}>
                    <DataGrid
                        sx={{ '--DataGrid-overlayHeight': '300px' }}
                        slots={{
                            noRowsOverlay: CustomNoRowsOverlay,
                            toolbar: ToolbarHeader,
                        }}
                        loading={loading}
                        getRowId={(row) => row.employee_id}
                        rows={employeeList} columns={columns} checkboxSelection
                        disableRowSelectionOnClick />
                </Box>
            </Grid>
        </Grid>
    )
}

export default EmployeeTable