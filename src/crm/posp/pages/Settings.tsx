
import { Box, ListItem, ListItemText, Typography } from "@mui/material"
import React from "react"
const Settings = () => {
  return (
    <Box mt={3}>
      <ListItem disableGutters>
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Settings</Typography>}
        />
      </ListItem>
      <Box>

      </Box >
    </Box>
  )
}

export default Settings