import { Avatar, Box, Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListSubheader, MenuItem, Switch, TextareaAutosize, TextField, Typography, useTheme } from "@mui/material"
import React from "react";
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import LocalPoliceRoundedIcon from '@mui/icons-material/LocalPoliceRounded';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EditProfile from "../components/EditProfile";
import { handleEditProfile } from "../../../redux/slice/uiSlice";
import DangerousRoundedIcon from '@mui/icons-material/DangerousRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { Controller, useForm } from "react-hook-form";
import { updateCustomerProfile } from "../../../redux/slice/dashboardSlice";
const Settings = () => {
  const theme = useTheme();
  const isMobile = useSelector((state: RootState) => state.ui.isMobile)
  const authData = useSelector((state: RootState) => state.auth.authData);
  const dispatch: AppDispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: authData.email,
      dob: authData.dob.split('T')[0], // format to 'YYYY-MM-DD'
      gender: authData.gender,
      address: authData.address,
      city: authData.city,
      state: authData.state,
      pincode: authData.pincode,
      country: authData.country,
      bio: authData.bio,
      marital_status:'Single'
    }
  });
  // Handle the form submission
  const onSubmitHandler = (data:any) => {
    dispatch(updateCustomerProfile(data))
  };

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
          <ListItem disablePadding sx={{ gap: 2 }}>
            <ListItemIcon>
              <Avatar src="https://avatar.iran.liara.run/public" sx={{ width: '3.75em', height: '3.75em' }}>
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

        <ButtonGroup fullWidth variant="text" sx={{ mt: 3 }}>
          <Button variant="contained">Info</Button>
          <Button>Payments</Button>
          {/* <Button>Logs</Button>
          <Button>Referals</Button>
          <Button>Wallete</Button> */}

        </ButtonGroup>
        <Divider />


        <Grid container columnSpacing={2} rowSpacing={2} mt={1}>
          <Grid item xs={12} lg={8}>
            <Card>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <List
                  subheader={
                    <ListSubheader component="div">
                      Personal Details
                    </ListSubheader>
                  }
                >
                  <Divider />
                  <Grid container spacing={2} padding={2}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="caption" ml={1} mb={1}>Name</Typography>
                      <TextField
                        size="small"
                        fullWidth
                        disabled
                        InputProps={{ readOnly: true }}
                        value={`${authData.firstname} ${authData.lastname}`} // Concatenate first and last names
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="caption" ml={1} mb={1}>Phone</Typography>
                      <TextField
                        size="small"
                        fullWidth
                        disabled
                        InputProps={{ readOnly: true }}
                        value={`${authData.phone}`}
                      />

                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="caption" ml={1} mb={1}>Email</Typography>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            fullWidth
                            placeholder="Email"
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="caption" ml={1} mb={1}>Date of Birth</Typography>
                      <Controller
                        name="dob"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            type="date"
                            fullWidth
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="caption" ml={1} mb={1}>Gender</Typography>
                      <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            select
                            fullWidth
                          >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                          </TextField>
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="caption" ml={1} mb={1}>Address</Typography>
                      <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            fullWidth
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="caption" ml={1} mb={1}>City</Typography>
                      <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            fullWidth
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="caption" ml={1} mb={1}>State</Typography>
                      <Controller
                        name="state"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            fullWidth
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="caption" ml={1} mb={1}>Pincode</Typography>
                      <Controller
                        name="pincode"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            fullWidth
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="caption" ml={1} mb={1}>Country</Typography>
                      <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            fullWidth
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="caption" ml={1} mb={1}>Bio</Typography>
                      <Controller
                        name="bio"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            multiline
                            rows={5}
                            size="small"
                            fullWidth
                            placeholder="Write something fun about yourself"
                            sx={{
                              '& ::placeholder': {
                                fontStyle: 'italic',
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </List>
                <Divider />
                <CardActions>
                  <Button variant="contained" size="small" type="submit">Save</Button>
                </CardActions>
              </form>

            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* <Card>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Address Details
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  <li>15-96 Simhagiri Colony Saligramapuram Visakhapatnam,Andhra Pradesh 530024</li>
                </Typography>
              </CardContent>
            </Card> */}
            <Card>

              <List
                subheader={
                  <ListSubheader component="div">
                    Invoices
                  </ListSubheader>
                }
              >
                <Divider />
                <List>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(() => <ListItem divider
                    secondaryAction={<Chip size="small" icon={<QueryBuilderIcon fontSize="inherit" />} variant="outlined" color="warning" label="Pending" />}
                    alignItems="flex-start">
                    <ListItemAvatar>
                      <DescriptionIcon />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Invoice #323"
                      secondary={
                        <React.Fragment>

                          {"26 May 2023"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>)}
                </List>


              </List>
              <Divider />




              <CardActions>
                <Button variant="contained" size="small">more</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12}>

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
          <Grid item xs={12}>
            <Card>
              <List
                subheader={
                  <ListSubheader sx={{ bgcolor: theme.palette.error.main, color: theme.palette.error.contrastText }} component="div" id="nested-list-subheader">
                    Danger Zone
                  </ListSubheader>
                }
              >
                <Divider />
                <List>

                  <ListItem secondaryAction={(!isMobile) && <Button startIcon={<DeleteIcon />} variant="outlined" color="error">Delete Account</Button>}
                  >
                    <ListItemText
                      primary={<Typography maxWidth={'600px'} variant="subtitle2">By deleting your account you will lose all your data and access to any workspace that you associated with</Typography>}
                    />
                  </ListItem>
                </List>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Box >
    </Box >
  )
}

export default Settings