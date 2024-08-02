import { Avatar, Box, Card, Chip, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
const EmployeeProfile = () => {
  const employeeId = useParams();
  return (
    <Box>
      <Toolbar>
        <Stack>
          <Stack direction={'row'} alignItems={'center'} gap={2} >
            <Avatar src='https://img.freepik.com/free-photo/3d-illustration-young-business-man-with-funny-expression-his-face_1142-55156.jpg' sx={{ width: 46, height: 46 }} />
            <Box>
              <Typography variant='body1'>Karthik Tumala</Typography>
              <Chip size='small' color='warning' label='ceo' />
            </Box>
          </Stack>
          <List dense>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 34 }}><MailRoundedIcon /></ListItemIcon>
              <ListItemText>karthiktumala143@gmail.com</ListItemText>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 34 }}><PhoneAndroidRoundedIcon /></ListItemIcon>
              <ListItemText>+91 7013140693</ListItemText>
            </ListItem>
          </List>
        </Stack>

      </Toolbar>
    </Box>
  )
}

export default EmployeeProfile