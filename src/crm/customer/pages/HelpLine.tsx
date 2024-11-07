import { Avatar, Badge, Box, Chip, Divider, Grid, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HelpLine = () => {
  return (
    <Box mt={3}>
      <Typography gutterBottom variant='h4'>Frequently Asked Questions</Typography>
      <Typography gutterBottom variant='subtitle1'>Quick answers to questions to you may have. Can't find what you're looking for? Check out our <Link to="#">full documentation</Link></Typography>
      <Grid container my={3} component={Paper}>
        <Grid item xs={12} md={6}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar variant='rounded' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant='h6'>Is there any free trail available?</Typography>}
              secondary={
                <React.Fragment>
                  {"Yes, You can try us for free for 30 days. if you want we'll provide you with a free 30 minutes onboarding call to get you up and running."}
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
        <Grid item xs={12} md={6}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar variant='rounded' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant='h6'>Can I change my plan later?</Typography>}
              secondary={
                <React.Fragment>
                  {"Of course yes! Our pricing scale with your company. Chat to our friendly team to find solution that works for you as you grow"}
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
        <Grid item xs={12} md={6}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar variant='rounded' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant='h6'>How does billing work?</Typography>}
              secondary={
                <React.Fragment>
                  {"Plans are per workspace,not per account, you can upgrade one workspace and still have any number of free workspaces."}
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
        <Grid item xs={12} md={6}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar variant='rounded' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant='h6'>What is your cancellation policy?</Typography>}
              secondary={
                <React.Fragment>
                  {"We understood that things change. You can cancel your plan at any time and we'll refund you the difference already paid."}
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
      </Grid>
      <Stack alignItems="center" mt={4}>
        <Badge badgeContent={<Chip size="small" color="primary" label="?" />}>
          <Avatar sx={{ mb: 2 }} />
        </Badge>
        <Typography gutterBottom variant='h6' align='center'>Still have Questions?</Typography>
        <Typography color='text.secondary' variant='body2' align='center'>Can't find the answer your looking for? Please chat to our friendly team</Typography>
      </Stack>

    </Box>
  )
}

export default HelpLine