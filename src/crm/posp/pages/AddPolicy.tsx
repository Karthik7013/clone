import { Box, Button, Card, CardActionArea, CardActions, CardContent, Chip, Divider, Grid, ListItem, ListItemText, Stack, TextField, Typography, useTheme } from "@mui/material"
import React, { useState } from "react"
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import TimeToLeaveRoundedIcon from '@mui/icons-material/TimeToLeaveRounded';
import TwoWheelerRoundedIcon from '@mui/icons-material/TwoWheelerRounded';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
type activeFormProps = 'car' | 'bike' | 'commercial' | 'health' | 'travel' | 'loan';
const AddPolicy = () => {
  const theme = useTheme()
  const [activeForm, setActiveForm] = useState<activeFormProps>('car')
  const handleChangeTab = (activeForm: activeFormProps) => setActiveForm(activeForm)
  return (
    <Box mt={3}>
      <ListItem disableGutters>
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Add Policy</Typography>}
        />
      </ListItem>
      <Box>
        <Stack direction='row' columnGap={2}>
          <Chip onClick={() => handleChangeTab('car')} color={activeForm === 'car' ? "primary" : 'default'} icon={<TimeToLeaveRoundedIcon />} variant="outlined" clickable label="Private Car" />
          <Chip onClick={() => handleChangeTab('bike')} color={activeForm === 'bike' ? "primary" : 'default'} icon={<TwoWheelerRoundedIcon />} variant="outlined" clickable label="Two Wheeler" />
          <Chip onClick={() => handleChangeTab('commercial')} color={activeForm === 'commercial' ? "primary" : 'default'} icon={<LocalShippingRoundedIcon />} variant="outlined" clickable label="Commercial" />
          <Chip onClick={() => handleChangeTab('health')} color={activeForm === 'health' ? "primary" : 'default'} icon={<FavoriteRoundedIcon />} variant="outlined" clickable label="Health Insurance" />
          <Chip onClick={() => handleChangeTab('travel')} color={activeForm === 'travel' ? "primary" : 'default'} icon={<AirplanemodeActiveRoundedIcon />} variant="outlined" clickable label="Travel Insurance" />
          <Chip onClick={() => handleChangeTab('loan')} color={activeForm === 'loan' ? "primary" : 'default'} icon={<MonetizationOnRoundedIcon />} variant="outlined" clickable label="Loan Insurance" />
        </Stack>
        <Box component='form' mt={2} >
          <Card>
            <CardContent>
              <Grid container rowSpacing={3} columnSpacing={2}>
                <Grid item xs={12}>
                  <Typography>Customer Details</Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField fullWidth label='Name' />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField fullWidth label='Name' />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Policy Details</Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField fullWidth label='Policy Name' />
                </Grid>

                <Grid item xs={12}>
                  <Button variant="contained" type="submit" fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

      </Box>
    </Box>
  )
}

export default AddPolicy