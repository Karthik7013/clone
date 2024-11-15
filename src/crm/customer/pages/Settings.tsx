import { Avatar, Box, Button, ButtonGroup, Card, CardActionArea, CardContent, CardMedia, Chip, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListSubheader, Switch, Typography } from "@mui/material"
import React from "react";
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import LocalPoliceRoundedIcon from '@mui/icons-material/LocalPoliceRounded';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EditProfile from "../components/EditProfile";
import { handleEditProfile } from "../../../redux/slice/uiSlice";
const Settings = () => {
  const authData = useSelector((state: RootState) => state.auth.authData);
  const dispatch: AppDispatch = useDispatch();
  const handleClose = () => dispatch(handleEditProfile());
  return (

    <Box mt={3}>

      <ListItem
        disableGutters
      >
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Settings</Typography>}
        />
      </ListItem>
      <Box>
        <List>
          <ListItem disablePadding sx={{ gap: 2 }} secondaryAction={<IconButton onClick={handleClose} ><EditRoundedIcon /></IconButton>}>
            <ListItemIcon>
              <Avatar src="https://avatar.iran.liara.run/public" sx={{ width: '2.75em', height: '2.75em' }}>
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6">{authData.firstname} {authData.lastname} ({authData.customer_id}) <Chip clickable size="small" label="Premium" color="warning" variant="outlined" icon={<LocalPoliceRoundedIcon fontSize="small" />}></Chip></Typography>}
              secondary={
                <>
                  {(authData.created_at).split('T')[0]}
                </>
              } />
          </ListItem>
        </List>
        <EditProfile />

        <ButtonGroup fullWidth variant="text">
          <Button variant="contained">Info</Button>
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
                  <Grid item xs={12} md={4}>Gender: {authData.gender}</Grid>
                  <Grid item xs={12} md={4}>Status: <Chip color="success" size="small" label="active"></Chip></Grid>
                  <Grid item xs={12} md={6}>Email : {authData.email}</Grid>
                  <Grid item md={2} />
                  <Grid item xs={12} md={4}>Mobile Number : +91 {authData.phone}</Grid>
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

          <Grid item xs={12}>
            <Card>
              <List
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Notifications
                  </ListSubheader>
                }
              >
                <Divider />
                <ListItem
                  secondaryAction={
                    <Switch size="small" />
                  }
                >
                  <ListItemText
                    primary={<Typography variant="subtitle2">Whatsapp Notifications</Typography>}
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Switch size="small" />
                  }
                >
                  <ListItemText
                    primary={<Typography variant="subtitle2">Email Notifications</Typography>}
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Switch size="small" />
                  }
                >
                  <ListItemText
                    primary={<Typography variant="subtitle2">Message Notifications</Typography>}
                  />
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>






      </Box >
    </Box>
  )
}

export default Settings