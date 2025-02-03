import { Alert, alpha, Avatar, Box, Button, Card, CardContent, Chip, CircularProgress, Divider, Grid, IconButton, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Skeleton, Stack, Tab, Tabs, TextField, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import { MessageBox } from '../../../Framework/components';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import PersonPinCircleRoundedIcon from '@mui/icons-material/PersonPinCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ProtectedRoutes from '../../../ProtectedRoute';
const EmployeeProfile = () => {
  const theme = useTheme();
  const navigate = useNavigate()
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
  console.log(employeeId, 'empId')
  const navigateBack = () => {
    navigate(-1)
  }



  return (
    <Box mt={3}>
      <MessageBox action={() => { alert('close') }} type='success' message='Details Updated Successfully' />
      <ListItem disablePadding disableGutters sx={{ mt: 2 }}>
        <Box mr={2} component={IconButton} onClick={navigateBack}>
          <ArrowBackRoundedIcon />
        </Box>
        <ListItemText
          primary={<Typography variant='h5'>Profile</Typography>}
        />
      </ListItem>
      <Box mt={2}>
        <Toolbar>
          <Stack minWidth={'100%'}>
            <Stack direction={'row'} alignItems={'center'} gap={2} >
              <Avatar src='https://avatar.iran.liara.run/public' sx={{ width: 46, height: 46 }} />
              <Box>
                <Typography variant='body1'>Karthik Tumala</Typography>
                <Chip size='small' label='ceo' />
              </Box>
            </Stack>
            <List dense>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 34 }}><BadgeRoundedIcon fontSize='small' /></ListItemIcon>
                    <ListItemText>xxxxx</ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 34 }}><PersonPinCircleRoundedIcon fontSize='small' /></ListItemIcon>
                    <ListItemText>ACTIVE</ListItemText>
                  </ListItem>
                </Grid>
                <Grid item xs={12} md={4}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 34 }}><MailRoundedIcon fontSize='small' /></ListItemIcon>
                    <ListItemText>karthiktumala143@gmail.com</ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 34 }}><PhoneAndroidRoundedIcon fontSize='small' /></ListItemIcon>
                    <ListItemText>+91 7013140693</ListItemText>
                  </ListItem>
                </Grid>
                <Grid item xs={12} md={4}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 34 }}><CalendarMonthRoundedIcon fontSize='small' /></ListItemIcon>
                    <ListItemText>Joining Date</ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 34 }}><HomeWorkRoundedIcon fontSize='small' /></ListItemIcon>
                    <ListItemText>CLAIMS DEPARTMENT</ListItemText>
                  </ListItem>
                </Grid>
              </Grid>
            </List>
          </Stack>

        </Toolbar>
      </Box>
      <Box mt={2} />
      <Divider />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={0} aria-label="basic tabs example">
            <Tab label="Employee Details" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <Box mt={2} />
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}><TextField fullWidth /></Grid>
              <Grid item xs={12} md={3}><TextField fullWidth /></Grid>
              <Grid item xs={12} ><Button fullWidth variant='contained'>Save</Button></Grid>

            </Grid>
          </CardContent>
        </Card>
        <Box mt={2} />

        <ProtectedRoutes requiredPermission={'8be46c4f'} role='employee'>
          <Card>
            <CardContent>
              <Typography gutterBottom color='error' variant='h6' fontWeight={600}>Delete Account</Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography sx={{ mb: 2 }} gutterBottom color='text.secondary' variant='body2'>
                By clicking the "Confirm Delete" button, the selected employee's details will be permanently removed from the system. This action is irreversible, and all personal information, records, and data associated with the employee will be lost. Please ensure that you no longer need the employee’s details before confirming this deletion.
              </Typography>
              <Button startIcon={<DeleteRoundedIcon />} variant='contained' fullWidth color='error'>Remove Account</Button>

            </CardContent>

          </Card>
        </ProtectedRoutes>
        {/* <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel> */}
      </Box>
      {/* <Box mt={2}>
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

                <Skeleton sx={{ mr: 2 }} variant='rectangular' width={18} height={18} />
                <Skeleton variant='rectangular' width={140} height={10} />
              </ListItem>
              <ListItem sx={{ px: 0 }}>

                <Skeleton sx={{ mr: 2 }} variant='rectangular' width={18} height={18} />
                <Skeleton variant='rectangular' width={140} height={10} />
              </ListItem>
            </List>
          </Stack>
        </Toolbar>
      </Box> */}
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