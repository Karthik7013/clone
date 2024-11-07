import { Avatar, Box, Button, ButtonGroup, Card, CardActionArea, CardContent, CardMedia, Chip, Divider, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from "@mui/material"
import React from "react";
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import LocalPoliceRoundedIcon from '@mui/icons-material/LocalPoliceRounded';
import { Link } from "react-router-dom";

const Settings = () => {
  return (

    <Box mt={3}>
      <Typography gutterBottom variant='h4'>Settings</Typography>
      <Typography color='text.secondary' gutterBottom variant='subtitle1'>Quick answers to questions to you may have. Can't find what you're looking for? Check out our <Link to="#">full documentation</Link></Typography>

      <Box>
        <List>
          <ListItem disablePadding sx={{ gap: 2 }}>
            <ListItemIcon>
              <Avatar src="https://mui.com/static/images/avatar/2.jpg" sx={{ width: '2.75em', height: '2.75em' }}>

              </Avatar>
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h6">Karthik Tumala <Chip label="Premium" size="small" color="warning" variant="outlined" icon={<LocalPoliceRoundedIcon fontSize="small" />}></Chip></Typography>} secondary={
              " Jan 9, 2014"
            } />
          </ListItem>
        </List>

        <ButtonGroup fullWidth variant="text">
          <Button>Info</Button>
          <Button>Logs</Button>
          <Button>Referals</Button>
          <Button>Wallete</Button>
          <Button>Payments</Button>
        </ButtonGroup>
        <Divider />


        <Grid container columnSpacing={2} rowSpacing={2} mt={1}>
          <Grid item xs={12} md={8}>
            <Card>

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Personal Information
                </Typography>
                <Divider variant="fullWidth" />
                <Grid container rowSpacing={2} mt={1}>
                  <Grid item xs={12} md={4}>Age : 26 years</Grid>
                  <Grid item xs={12} md={4}>Gender: Male</Grid>
                  <Grid item xs={12} md={4}>Status: <Chip color="success" size="small" label="active"></Chip></Grid>
                  <Grid item xs={12} md={6}>Email : karthiktumala143@gmail.com</Grid>
                  <Grid item md={2} />
                  <Grid item xs={12} md={4}>Mobile Number : +91 7013140693</Grid>
                </Grid>
              </CardContent>

            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Address Details
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  <li>15-96 Simhagiri Colony Saligramapuram Visakhapatnam,Andhra Pradesh 530024</li>
                </Typography>
              </CardContent>

            </Card>
          </Grid>
        </Grid>






      </Box >
    </Box>
  )
}

export default Settings