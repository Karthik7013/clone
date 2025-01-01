import React from 'react';
import { Box, ListItem, ListItemText, Typography } from '@mui/material';
import CustomerPolicies from '../components/CustomerPolicies';

const MyPolicies = () => {
  return (
    <Box mt={3}>
      <ListItem disableGutters>
        <ListItemText primary={<Typography gutterBottom variant='h4'>Policies</Typography>} />
      </ListItem>
      <CustomerPolicies />
    </Box>
  )
}

export default React.memo(MyPolicies)