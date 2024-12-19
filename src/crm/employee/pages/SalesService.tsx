import { Box, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const SalesService = () => {
  return (
<Box mt={3}>
      <ListItem disableGutters>
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Sales</Typography>}
        />
      </ListItem>
      <Box>

      </Box >
    </Box>
  )
}

export default SalesService