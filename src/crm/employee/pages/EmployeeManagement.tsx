import { Delete, Edit, GroupAddRounded } from '@mui/icons-material';
import { Box, Button, Checkbox, Chip, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { DataGrid, GridColDef, GridRowsProp, GridToolbarContainer } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
const EmployeeManagement = () => {
    const rows: GridRowsProp = [
        { id: 1, col1: '123456789', col2: 'Mia Khalifa', col3: 'Admin', col4: 'CEO', col5: 'Active', col6: 'karthiktumala143@gmail.com', col7: '26-11-1999', col8: '+91 7013140693', col9: 'Super' },
        { id: 2, col1: '987654321', col2: 'John Doe', col3: 'User', col4: 'Manager', col5: 'Inactive', col6: 'johndoe@example.com', col7: '15-05-1985', col8: '+91 9999999999', col9: 'Admin' },
        { id: 3, col1: '192837465', col2: 'Jane Smith', col3: 'Admin', col4: 'Lead', col5: 'Active', col6: 'janesmith@example.com', col7: '02-03-1990', col8: '+91 8888888888', col9: 'Editor' },
        { id: 4, col1: '564738291', col2: 'Robert Brown', col3: 'User', col4: 'Developer', col5: 'Pending', col6: 'robertbrown@example.com', col7: '20-11-1988', col8: '+91 7777777777', col9: 'User' },
        { id: 5, col1: '102938475', col2: 'Emily Davis', col3: 'Admin', col4: 'Designer', col5: 'Active', col6: 'emilydavis@example.com', col7: '14-07-1983', col8: '+91 6666666666', col9: 'Admin' },
        { id: 6, col1: '564829374', col2: 'Michael Wilson', col3: 'User', col4: 'Analyst', col5: 'Inactive', col6: 'michaelwilson@example.com', col7: '30-12-1992', col8: '+91 5555555555', col9: 'Editor' },
        { id: 7, col1: '473829102', col2: 'Sophia Martinez', col3: 'Admin', col4: 'Coordinator', col5: 'Active', col6: 'sophiamartinez@example.com', col7: '25-09-1986', col8: '+91 4444444444', col9: 'Super' },
        { id: 8, col1: '983746251', col2: 'James Taylor', col3: 'User', col4: 'Tester', col5: 'Pending', col6: 'jamestaylor@example.com', col7: '11-01-1989', col8: '+91 3333333333', col9: 'User' },
        { id: 9, col1: '284736591', col2: 'Olivia Anderson', col3: 'Admin', col4: 'Marketing', col5: 'Active', col6: 'oliviaanderson@example.com', col7: '19-08-1991', col8: '+91 2222222222', col9: 'Admin' },
        { id: 10, col1: '736492817', col2: 'William Thomas', col3: 'User', col4: 'Support', col5: 'Inactive', col6: 'williamthomas@example.com', col7: '12-04-1987', col8: '+91 1111111111', col9: 'Editor' },
        { id: 11, col1: '102938475', col2: 'Ava Wilson', col3: 'Admin', col4: 'Sales', col5: 'Active', col6: 'avawilson@example.com', col7: '22-05-1993', col8: '+91 9999999990', col9: 'Super' },
        { id: 12, col1: '564738291', col2: 'Liam Lee', col3: 'User', col4: 'Product Manager', col5: 'Pending', col6: 'liamlee@example.com', col7: '07-06-1984', col8: '+91 8888888889', col9: 'User' },
        { id: 13, col1: '384756291', col2: 'Isabella Harris', col3: 'Admin', col4: 'HR', col5: 'Active', col6: 'isabellaharris@example.com', col7: '17-12-1990', col8: '+91 7777777778', col9: 'Admin' },
        { id: 14, col1: '284736910', col2: 'Mason Clark', col3: 'User', col4: 'Intern', col5: 'Inactive', col6: 'masonclark@example.com', col7: '29-01-1995', col8: '+91 6666666665', col9: 'Editor' },
        { id: 15, col1: '736492018', col2: 'Mia Lewis', col3: 'Admin', col4: 'Executive', col5: 'Active', col6: 'mialewis@example.com', col7: '05-10-1988', col8: '+91 5555555554', col9: 'Super' },
        { id: 16, col1: '493827465', col2: 'Noah Walker', col3: 'User', col4: 'Consultant', col5: 'Pending', col6: 'noahwalker@example.com', col7: '23-11-1992', col8: '+91 4444444443', col9: 'User' },
        { id: 17, col1: '102938576', col2: 'Emma Robinson', col3: 'Admin', col4: 'Strategist', col5: 'Active', col6: 'emmarobinson@example.com', col7: '14-09-1987', col8: '+91 3333333332', col9: 'Admin' },
        { id: 18, col1: '564738392', col2: 'Oliver King', col3: 'User', col4: 'Data Scientist', col5: 'Inactive', col6: 'oliverking@example.com', col7: '31-05-1986', col8: '+91 2222222221', col9: 'Editor' },
        { id: 19, col1: '284736020', col2: 'Charlotte Wright', col3: 'Admin', col4: 'Operations', col5: 'Active', col6: 'charlottewright@example.com', col7: '09-03-1994', col8: '+91 1111111110', col9: 'Super' },
        { id: 20, col1: '736492347', col2: 'Ethan Scott', col3: 'User', col4: 'Business Analyst', col5: 'Pending', col6: 'ethanscott@example.com', col7: '18-02-1989', col8: '+91 9999999989', col9: 'User' },
    ];

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Employee ID', width: 150 },
        {
            field: 'col2', headerName: 'Employee Name', width: 150,
            renderCell: (params) => <Link to={`/employee/dashboard/profile/${params.row.col1}`}>{params.value}</Link>
        },
        { field: 'col3', headerName: 'Access', width: 150 },
        { field: 'col4', headerName: 'Role', width: 150 },
        { field: 'col5', headerName: 'Status', width: 150, renderCell: (params) => <Chip variant='filled' label={params.value} clickable /> },
        { field: 'col6', headerName: 'Email', width: 150 },
        { field: 'col7', headerName: 'Join Date', width: 150 },
        { field: 'col8', headerName: 'Contact', width: 150 },
        {
            field: 'col9', headerName: 'Actions', width: 150, renderCell: (params) => {
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
        <Box>

            <Grid container>


                <Grid item xs={12}>
                    <Box sx={{ height: 460, width: '100%' }}>
                        <DataGrid
                            sx={{ '--DataGrid-overlayHeight': '300px' }}
                            slots={{
                                noRowsOverlay: CustomNoRowsOverlay,
                                toolbar: ToolbarHeader,
                            }}
                            rows={rows} columns={columns} checkboxSelection
                            disableRowSelectionOnClick />
                    </Box>
                </Grid>
            </Grid>








        </Box>
    )
}

export default EmployeeManagement