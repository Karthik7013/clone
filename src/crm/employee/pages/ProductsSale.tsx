import { Box, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const ProductsSale = () => {
  return (
<Box mt={3}>
      <ListItem disableGutters>
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Product Service</Typography>}
        />
      </ListItem>
      <Box>

      </Box >
    </Box>
  )
}

export default ProductsSale