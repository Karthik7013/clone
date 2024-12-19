import { Box, CardMedia, Card, CardContent, Typography, Paper, Grid, Stack, TextField, Button, Divider, Toolbar, ListItem, List, ListItemText, alpha } from '@mui/material'
import React from 'react'
import MessageBox from '../../../Framework/components/MessageBox'

const Settings = () => {
  return (

    <Box mt={3}>
      <ListItem disableGutters>
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Account Settings</Typography>}
        />
      </ListItem>
      <Box>

        <Grid container columnGap={2}>
          <Grid item xs={12} md={8}>

            <CardContent>
              <Typography variant='h6'></Typography>
              <Stack rowGap={2} mt={4} maxWidth={400}>
                <TextField label="Mobile" />
                <TextField label="Password" type='password' />
                <Stack direction={'row'} gap={2}>
                  <Button variant='outlined'>cancel</Button>
                  <Button variant='contained'>Submit</Button>
                </Stack>
              </Stack>





            </CardContent>
          </Grid>
          <Grid item xs={12} md={3}>
            <MessageBox type='info'>
              <List dense subheader={<Typography variant='subtitle2'>Password Requirment</Typography>}>
                <ListItem>
                  At least 8 Characters
                </ListItem>
                <ListItem>At least one uppercase letter</ListItem>
                <ListItem>At least one number</ListItem>
              </List>
            </MessageBox>
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <Paper sx={{ bgcolor: (theme) => alpha(theme.palette.error.dark, 0.1), mt: 3 }}>
              <CardContent>
                <Typography variant='h6'>Delete Account </Typography>
                <Stack rowGap={2} mt={1} maxWidth={600}>
                  <Typography variant='body2' color='text.secondary'>
                    Deleting your account is premanent and cannot be reversed
                  </Typography>
                  <Stack direction={'row'}>
                    <Button variant='contained' color='error'>Delete Account</Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Paper>
          </Grid>
        </Grid>
      </Box >
    </Box>
  )
}

export default Settings