import { Box, ListItem, ListItemText, Typography } from "@mui/material"
import React from "react"



const Bookings = () => {
  return (
    <Box mt={3}>
      <ListItem disableGutters>
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Bookings</Typography>}
        />
      </ListItem>
      <Box>

      </Box >
    </Box>
  )
}

export default Bookings