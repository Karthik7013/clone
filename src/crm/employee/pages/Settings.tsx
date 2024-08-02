import { Box, CardMedia, Card, CardContent, Typography, Paper, Grid, Stack, TextField, Button, Divider, Toolbar, ListItem, List, ListItemText, alpha } from '@mui/material'
import React from 'react'

const Settings = () => {
  return (
    <Grid container columnGap={2}>
      <Grid item xs={12} md={8}>

        <CardContent>
          <Typography variant='h6'>Account Settings</Typography>
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
        <Card sx={{ bgcolor: (theme) => alpha(theme.palette.error.dark, 0.1), mt: 3, borderLeft: "4px solid", borderColor: (theme) => theme.palette.error.dark }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant='subtitle2'>Password Requirment</Typography>
          </CardContent>
          <Divider />
          <CardContent sx={{ padding: 0, color: 'text.secondary', fontSize: '0.8em' }}>
            <List dense>
              <ListItem>
                At least 8 Characters
              </ListItem>
              <ListItem>At least one uppercase letter</ListItem>
              <ListItem>At least one number</ListItem>
            </List>
          </CardContent>
        </Card>
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
  )
}

export default Settings