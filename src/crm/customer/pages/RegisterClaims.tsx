import { alpha, Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader, MenuItem, Stack, TextField, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import { useTheme } from "@mui/material";

const RegisterClaims = () => {
  const theme = useTheme();
  return (
    <Box mt={3}>
      <ListItem
        disableGutters
        secondaryAction={
          <Stack direction='row' gap={1}>
            <Button size='small' variant='outlined' startIcon={<FilterListRoundedIcon />}>Filter</Button>
            <Button size='small' variant='outlined' startIcon={<FileUploadRoundedIcon />}>Export</Button>
          </Stack>
        }
      >
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Register</Typography>}
        />
      </ListItem>
      <List
        sx={{ width: '100%' }}
        subheader={<ListSubheader>Personal Details</ListSubheader>}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} mt={2}>
            <TextField fullWidth label="First Name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Last Name" />
          </Grid>
          <Grid item xs={6}>
            <TextField InputLabelProps={{ shrink: true }} type="date" fullWidth label="Date of Birth" />
          </Grid>
          <Grid item xs={6}>
            <TextField select fullWidth label="Gender" >
              <MenuItem>Male</MenuItem>
              <MenuItem>Female</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField inputMode="numeric" fullWidth label="Phone" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Street Address" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="City" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="State" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Pincode" />
          </Grid>
        </Grid>
      </List>


      <List
        sx={{ width: '100%' }}
        subheader={<ListSubheader>Poliy Details</ListSubheader>}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} mt={2} >
            <TextField fullWidth label="Policy Number" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField select fullWidth label="Polciy Type" >
              <MenuItem >
                Life Insurance
              </MenuItem>
              <MenuItem >
                Health Insurance
              </MenuItem>
              <MenuItem>
                Property Insurance
              </MenuItem>
              <MenuItem>
                Other
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField InputLabelProps={{ shrink: true }} type="date" fullWidth label="Date of Polciy Issurance" />
          </Grid>
        </Grid>
      </List>
      <List
        sx={{ width: '100%' }}
        subheader={<ListSubheader>Claim Details</ListSubheader>}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} mt={2} >
            <TextField select fullWidth label="Nature of Claim" >
              <MenuItem >
                Accident
              </MenuItem>
              <MenuItem >
                Illness
              </MenuItem>
              <MenuItem>
                Property Damage
              </MenuItem>
              <MenuItem>
                Other
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField InputLabelProps={{ shrink: true }} type="date" fullWidth label="Date of Incident" />
          </Grid>
          <Grid item xs={6}>
            <TextField InputLabelProps={{ shrink: true }} type="file" fullWidth label="Support Documents" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Brief Description of the Incident" />
          </Grid>
        </Grid>
      </List>


      <List
        sx={{ width: '100%' }}
        subheader={<ListSubheader>Additional Information</ListSubheader>}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField rows={4} fullWidth multiline label="Additional Information" >

            </TextField>
          </Grid>
        </Grid>
      </List>
      <Button fullWidth variant="contained">Register</Button>

    </Box>
  )
}

export default RegisterClaims