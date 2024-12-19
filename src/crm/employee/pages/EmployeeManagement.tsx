import { Delete, Edit, GroupAddRounded } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, Chip, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { DataGrid, GridColDef, GridRowsProp, GridToolbarContainer } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import CustomButton from '../../../Framework/ui-components/CustomButton';
import MessageBox from '../../../Framework/components/MessageBox';
const EmployeeManagement = () => {
    const rows: GridRowsProp = [
        { id: 1, col1: '1234', col2: 'Mia', col3: 'Backend', col4: 'Admin', col5: 'Telecaller', col6: 'Active', col7: 'karthiktumala143@gmail.com', col8: '05-12-2020', col9: '+91 6048382743' },
        { id: 2, col1: '5678', col2: 'John', col3: 'Frontend', col4: 'User', col5: 'Developer', col6: 'Inactive', col7: 'john.doe@example.com', col8: '15-01-2021', col9: '+91 7894561230' },
        { id: 3, col1: '9101', col2: 'Sara', col3: 'Database', col4: 'Admin', col5: 'Analyst', col6: 'Active', col7: 'sara.connor@example.com', col8: '22-02-2022', col9: '+91 3456789012' },
        { id: 4, col1: '1122', col2: 'Emma', col3: 'Backend', col4: 'User', col5: 'Designer', col6: 'Pending', col7: 'emma.jones@example.com', col8: '30-03-2023', col9: '+91 6543210987' },
        { id: 5, col1: '3344', col2: 'Lucas', col3: 'Frontend', col4: 'Admin', col5: 'Manager', col6: 'Active', col7: 'lucas.lee@example.com', col8: '01-04-2024', col9: '+91 5678901234' },
        { id: 6, col1: '5566', col2: 'Sophia', col3: 'Frontend', col4: 'User', col5: 'Tester', col6: 'Inactive', col7: 'sophia.williams@example.com', col8: '10-05-2021', col9: '+91 6789012345' },
        { id: 7, col1: '7788', col2: 'Daniel', col3: 'Database', col4: 'Admin', col5: 'Support', col6: 'Active', col7: 'daniel.brown@example.com', col8: '20-06-2022', col9: '+91 7890123456' },
        { id: 8, col1: '9900', col2: 'Olivia', col3: 'Backend', col4: 'User', col5: 'Consultant', col6: 'Pending', col7: 'olivia.smith@example.com', col8: '15-07-2023', col9: '+91 8901234567' },
        { id: 9, col1: '2233', col2: 'James', col3: 'Frontend', col4: 'Admin', col5: 'Marketing', col6: 'Active', col7: 'james.taylor@example.com', col8: '25-08-2021', col9: '+91 9012345678' },
        { id: 10, col1: '4455', col2: 'Ava', col3: 'Backend', col4: 'User', col5: 'HR', col6: 'Inactive', col7: 'ava.johnson@example.com', col8: '05-09-2022', col9: '+91 0123456789' },
        { id: 11, col1: '6677', col2: 'Noah', col3: 'Database', col4: 'Admin', col5: 'Sales', col6: 'Active', col7: 'noah.davis@example.com', col8: '15-10-2023', col9: '+91 1234567890' },
        { id: 12, col1: '8899', col2: 'Mia', col3: 'Frontend', col4: 'User', col5: 'Executive', col6: 'Pending', col7: 'mia.clark@example.com', col8: '30-11-2021', col9: '+91 2345678901' },
        { id: 13, col1: '1010', col2: 'Ethan', col3: 'Backend', col4: 'Admin', col5: 'Designer', col6: 'Active', col7: 'ethan.martin@example.com', col8: '01-12-2022', col9: '+91 3456789012' },
        { id: 14, col1: '1212', col2: 'Isabella', col3: 'Database', col4: 'User', col5: 'Support', col6: 'Inactive', col7: 'isabella.lewis@example.com', col8: '15-01-2023', col9: '+91 4567890123' },
        { id: 15, col1: '3434', col2: 'Liam', col3: 'Frontend', col4: 'Admin', col5: 'Manager', col6: 'Active', col7: 'liam.walker@example.com', col8: '20-02-2024', col9: '+91 5678901234' },
        { id: 16, col1: '5656', col2: 'Charlotte', col3: 'Backend', col4: 'User', col5: 'Analyst', col6: 'Pending', col7: 'charlotte.morris@example.com', col8: '25-03-2021', col9: '+91 6789012345' },
        { id: 17, col1: '7878', col2: 'Mason', col3: 'Database', col4: 'Admin', col5: 'Consultant', col6: 'Active', col7: 'mason.taylor@example.com', col8: '30-04-2022', col9: '+91 7890123456' },
        { id: 18, col1: '9090', col2: 'Amelia', col3: 'Frontend', col4: 'User', col5: 'Marketing', col6: 'Inactive', col7: 'amelia.martin@example.com', col8: '15-05-2023', col9: '+91 8901234567' },
        { id: 19, col1: '2121', col2: 'Oliver', col3: 'Backend', col4: 'Admin', col5: 'Sales', col6: 'Active', col7: 'oliver.white@example.com', col8: '01-06-2022', col9: '+91 9012345678' },
        { id: 20, col1: '4343', col2: 'Avery', col3: 'Database', col4: 'User', col5: 'Executive', col6: 'Pending', col7: 'avery.carter@example.com', col8: '15-07-2021', col9: '+91 0123456789' }
    ];
    // https://avatar.iran.liara.run/username?username=K
    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Employee ID', width: 150 },
        {
            field: 'col2', headerName: 'Employee Name', width: 150,
            renderCell: (params) => <Stack gap={2} alignItems={'center'} direction='row'><Avatar src={`https://avatar.iran.liara.run/username?username=${params.value[0]}`}>{params.value[0]}</Avatar><Link to={`profile/${params.row.col1}`}>{params.value}</Link></Stack>
        },
        { field: 'col3', headerName: 'Department', width: 150 },
        { field: 'col4', headerName: 'Access', width: 150 },
        { field: 'col5', headerName: 'Role', width: 150 },
        { field: 'col6', headerName: 'Status', width: 150, renderCell: (params) => <Chip variant='filled' label={params.value} clickable /> },
        { field: 'col7', headerName: 'Email', width: 150 },
        { field: 'col8', headerName: 'Join Date', width: 150 },
        { field: 'col9', headerName: 'Contact', width: 150 },
        {
            field: 'co10', headerName: 'Actions', width: 150, renderCell: (params) => {
                return <Stack direction={'row'}>
                    <IconButton><ModeEditRoundedIcon color='info' /></IconButton>
                    <IconButton><DeleteOutlineRoundedIcon color='error' /></IconButton>
                </Stack>
            }
        }
    ];

    const [editMode, setEditMode] = useState(false);

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
        <Box>
            <Box mt={3}>
                <ListItem disableGutters>
                    <ListItemText
                        primary={<Typography gutterBottom variant='h4'>Employee Management</Typography>}
                    />
                </ListItem>
                <Box>



                    <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <MessageBox type='success'>
                                Records Updated
                            </MessageBox>
                            <Box sx={{ height: 580, mt: 1 }}>
                                <DataGrid
                                    sx={{ '--DataGrid-overlayHeight': '300px' }}
                                    slots={{
                                        noRowsOverlay: CustomNoRowsOverlay,
                                        toolbar: ToolbarHeader,
                                    }}
                                    getRowId={(rowId) => rowId.id}
                                    rows={rows} columns={columns} checkboxSelection
                                    disableRowSelectionOnClick />
                            </Box>
                        </Grid>
                    </Grid>
                </Box >
            </Box>
        </Box>
    )
}

export default EmployeeManagement