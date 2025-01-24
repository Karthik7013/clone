import { Avatar, Box, Card, Chip, CircularProgress, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Skeleton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import { MessageBox } from '../../../Framework/components';
const EmployeeProfile = () => {
  const dummyState = {
    loading: true,
    data: {},
    error: {
      message: 'Failed to Get Profile !',
      state: false,
      type: 'error'
    }
  }

  const employeeId = useParams();
  return (
    <Box mt={3}>
      <ListItem disableGutters>
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Profile</Typography>}
        />
      </ListItem>
      {/* <Box>
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
                <ListItemIcon sx={{ minWidth: 34 }}><MailRoundedIcon fontSize='small' /></ListItemIcon>
                <ListItemText>karthiktumala143@gmail.com</ListItemText>
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 34 }}><PhoneAndroidRoundedIcon fontSize='small' /></ListItemIcon>
                <ListItemText>+91 7013140693</ListItemText>
              </ListItem>
            </List>
          </Stack>

        </Toolbar>
      </Box> */}
      <Box>
        <Toolbar>
          <Stack>
            <Stack direction={'row'} alignItems={'center'} gap={2} >
              <Skeleton variant='circular' width={46} height={46}></Skeleton>
              <Box component={Stack} rowGap={1}>
                <Skeleton variant='rectangular' width={200} height={10} />
                <Skeleton variant='rectangular' width={100} height={10} />
              </Box>
            </Stack>
            <List dense>
              <ListItem sx={{ px: 0 }}>

                <Skeleton sx={{mr:2}} variant='rectangular' width={18} height={18} />
                <Skeleton variant='rectangular' width={140} height={10} />
              </ListItem>
              <ListItem sx={{ px: 0 }}>

                <Skeleton sx={{mr:2}} variant='rectangular' width={18} height={18} />
                <Skeleton variant='rectangular' width={140} height={10} />
              </ListItem>
            </List>
          </Stack>

        </Toolbar>
      </Box>
    </Box>

  )
}

export default EmployeeProfile





// <ListItem disableGutters>
// <ListItemText
//   primary={<Typography gutterBottom variant='h4'>Profile</Typography>}
// />
// </ListItem>
// {dummyState.loading && <LinearProgress />}
// {!dummyState.loading &&<MessageBox type='error' message='Failed to Get Profile' />}