import React from 'react'
import ProductSummary from "../../../Framework/components/ProductSummary";
import { Box, ListItem, ListItemText, Typography } from '@mui/material';
const AccessManagement = () => {
  return (<Box mt={3}>
    <ListItem disableGutters>
      <ListItemText
        primary={<Typography gutterBottom variant='h4'>Access Management</Typography>}
      />
    </ListItem>
    <Box>
      <ProductSummary />
    </Box>
  </Box>
  )
}

export default AccessManagement