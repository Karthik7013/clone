import { Delete, Edit, GroupAddRounded } from '@mui/icons-material';
import { Box, Button, Checkbox, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
const EmployeeManagement = () => {
    const rows: GridRowsProp = [
        { id: 1, col1: 'Mia', col2: 'employee' },
        { id: 2, col1: 'Xavier', col2: 'ceo' },
        { id: 3, col1: 'Katie', col2: 'employee' },
        { id: 4, col1: 'Sam', col2: 'employee' },
        { id: 5, col1: 'Wendy', col2: 'ceo' },
        { id: 6, col1: 'Liam', col2: 'employee' },
        { id: 7, col1: 'Emma', col2: 'admin' },
        { id: 8, col1: 'Ursula', col2: 'employee' },
        { id: 9, col1: 'Henry', col2: 'admin' },
        { id: 10, col1: 'Noah', col2: 'ceo' },
        { id: 11, col1: 'Jack', col2: 'admin' },
        { id: 12, col1: 'Charlie', col2: 'employee' },
        { id: 13, col1: 'Zane', col2: 'ceo' },
        { id: 14, col1: 'Grace', col2: 'employee' },
        { id: 15, col1: 'Rachel', col2: 'employee' },
        { id: 16, col1: 'Peter', col2: 'ceo' },
        { id: 17, col1: 'Frank', col2: 'employee' },
        { id: 18, col1: 'Alice', col2: 'ceo' },
        { id: 19, col1: 'Tina', col2: 'employee' },
        { id: 20, col1: 'V', col2: 'ceo' },
        { id: 21, col1: 'B', col2: 'employee' },
        { id: 22, col1: 'G', col2: 'employee' },
        { id: 23, col1: 'O', col2: 'ceo' },
        { id: 24, col1: 'Yvonne', col2: 'employee' },
        { id: 25, col1: 'Ivy', col2: 'ceo' },
        { id: 26, col1: 'D', col2: 'employee' },
        { id: 27, col1: 'N', col2: 'employee' },
        { id: 28, col1: 'Quinn', col2: 'ceo' },
        { id: 29, col1: 'R', col2: 'employee' },
        { id: 30, col1: 'J', col2: 'employee' },
        { id: 31, col1: 'H', col2: 'ceo' },
        { id: 32, col1: 'E', col2: 'admin' },
        { id: 33, col1: 'W', col2: 'employee' },
        { id: 34, col1: 'X', col2: 'employee' },
        { id: 35, col1: 'A', col2: 'ceo' },
        { id: 36, col1: 'Charlie', col2: 'admin' },
        { id: 37, col1: 'L', col2: 'employee' },
        { id: 38, col1: 'F', col2: 'employee' },
        { id: 39, col1: 'B', col2: 'ceo' },
        { id: 40, col1: 'Zane', col2: 'employee' },
        { id: 41, col1: 'D', col2: 'employee' },
        { id: 42, col1: 'Mia', col2: 'ceo' },
        { id: 43, col1: 'V', col2: 'employee' },
        { id: 44, col1: 'R', col2: 'ceo' },
        { id: 45, col1: 'Katie', col2: 'employee' },
        { id: 46, col1: 'N', col2: 'employee' },
        { id: 47, col1: 'Yvonne', col2: 'ceo' },
        { id: 48, col1: 'O', col2: 'employee' },
        { id: 49, col1: 'Jack', col2: 'employee' },
        { id: 50, col1: 'Emma', col2: 'ceo' },
        { id: 51, col1: 'Frank', col2: 'employee' },
        { id: 52, col1: 'Ursula', col2: 'employee' },
        { id: 53, col1: 'Ivy', col2: 'ceo' },
        { id: 54, col1: 'Peter', col2: 'employee' },
        { id: 55, col1: 'Tina', col2: 'ceo' },
        { id: 56, col1: 'Xavier', col2: 'employee' },
        { id: 57, col1: 'Liam', col2: 'employee' },
        { id: 58, col1: 'David', col2: 'ceo' },
        { id: 59, col1: 'Rachel', col2: 'employee' },
        { id: 60, col1: 'Sam', col2: 'employee' }
    ];

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ];
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: any) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


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
    return (
        <Box>

            <Grid container>
                <Grid item xs={5}>
                    <Typography variant="h6">
                        EmployeeManagement...
                    </Typography>
                </Grid>
                <Grid item xs={7} component={Stack} justifyContent={'flex-end'}>
                    <Button startIcon={<GroupAddRounded />} size='small' variant='contained'>Add Employee</Button>
                </Grid>
            </Grid>



            <Box sx={{ height: 350, width: '100%', mt: 5 }}>
                <DataGrid
                    sx={{ '--DataGrid-overlayHeight': '300px' }}
                    slots={{ noRowsOverlay: CustomNoRowsOverlay }}
                    rows={rows} columns={columns} />
            </Box>

        </Box>
    )
}

export default EmployeeManagement