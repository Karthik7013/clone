import { Delete, Edit, GroupAddRounded } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, Chip, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled, Toolbar, Typography } from '@mui/material'

import EmployeeTable from '../components/EmployeeTable';
import ProtectedRoutes from '../../../ProtectedRoute';
import { MessageBox } from '../../../Framework/components';
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
                    <ProtectedRoutes fallback={<MessageBox type='warning' message='Require Permission to view Employee Details' />} role='employee' requiredPermission='751c28f6'>
                        <EmployeeTable />
                    </ProtectedRoutes>
                </Box>
            </Box>
        </Box>
    )
}

export default EmployeeManagement