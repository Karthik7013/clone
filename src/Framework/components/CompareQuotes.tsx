import { AppBar, Box, Button, Card, CardActionArea, CardMedia, Container, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, TextField, Toolbar, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { ExpandMore } from '@mui/icons-material';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
const CompareQuotes = () => {
  const navigate = useNavigate()
  const selectedQuotes = useParams();
  return (
    <>
      <Box >
        <Container>
          <Stack direction={'row'} columnGap={2} p={2}>
            <Stack spacing={2}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <IconButton onClick={() => navigate(-1)}><ArrowBackRoundedIcon /></IconButton></ListItemIcon>
                <ListItemText>Go Back</ListItemText>
              </ListItem>
              <ListItem sx={{ p: 0 }}>

                <Typography variant='h6'>Plan Comparison</Typography>
              </ListItem>
            </Stack>
            <Box gap={2} flex={1} component={Stack} direction={'row'}>
              {[1, 2, 3].map((e) => <Card elevation={2} sx={{ width: '100%', maxWidth: 300, p: 1, border: '1px solid #e5e5e5' }}>
                <Stack direction={'row'} gap={2}>
                  <CardMedia
                    component={'img'}
                    sx={{ width: '80px' }}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Care_health_insurance_logo.png/220px-Care_health_insurance_logo.png"
                    title="green iguana"
                  />
                  <Typography component='h1' variant='body1'>Health Care</Typography>

                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Box>
                    <Typography variant='body2'>Sum Insurance</Typography>
                    <Typography variant='caption' fontWeight={600}>$10,000</Typography>
                  </Box>
                  <Box>
                    <Typography variant='body2'>Premium</Typography>
                    <Typography variant='caption' fontWeight={600}>10,000</Typography>
                  </Box>
                </Stack>

                <CardActionArea>
                  <Button size='small' fullWidth variant='contained'>Buy Now</Button>
                </CardActionArea>

              </Card>)}

            </Box>
          </Stack>
        </Container>


      </Box>
      <Container sx={{ mt: 5 }}>
        {['Important Features', 'Benfits', 'Add Ons'].map((e: string) => <Accordion elevation={1}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-label="Expand"
            aria-controls="-content"
            id="-header"
          >
            <ListItem>
              <ListItemIcon sx={{ minWidth: '34px' }}><StarsRoundedIcon color='warning' /></ListItemIcon>
              <ListItemText><Typography variant='h6'>{e}</Typography></ListItemText>
            </ListItem>
          </AccordionSummary>
          <AccordionDetails>
            <Divider />
          </AccordionDetails>
        </Accordion>)}
      </Container>
    </>
  )
}

export default CompareQuotes;