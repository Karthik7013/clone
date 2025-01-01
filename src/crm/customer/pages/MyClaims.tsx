import { Box, ListItem, ListItemText, Typography } from '@mui/material'
import CustomerClaims from '../components/CustomerClaims';

const MyClaims = () => {

  return (
    <Box mt={3}>
      <ListItem disableGutters>
        <ListItemText primary={<Typography gutterBottom variant='h4'>Claims</Typography>} />
      </ListItem>
      <CustomerClaims />
    </Box>
  )
}

export default MyClaims