import { Delete, Edit, GroupAddRounded } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, Chip, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled, Toolbar, Typography } from '@mui/material'

import EmployeeTable from '../components/EmployeeTable';
const EmployeeManagement = () => {
    return (
        <Box>
            <Box mt={3}>
                <ListItem disableGutters>
                    <ListItemText
                        primary={<Typography gutterBottom variant='h4'>Employee Management</Typography>}
                    />
                </ListItem>
                <Box>
                    <EmployeeTable />
                </Box>
            </Box>
        </Box>
    )
}

export default EmployeeManagement