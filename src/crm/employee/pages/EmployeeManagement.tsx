import { Delete, Edit, GroupAddRounded } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, Chip, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { DataGrid, GridColDef, GridRowsProp, GridToolbarContainer } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import CustomButton from '../../../Framework/ui-components/CustomButton';
import MessageBox from '../../../Framework/components/MessageBox';
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
                </Box >
            </Box>
        </Box>
    )
}

export default EmployeeManagement