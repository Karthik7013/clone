import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Grid, Icon, IconButton, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Menu, MenuItem, Paper, Stack, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemedProps, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { DeleteOutline, MoreHorizOutlined, Forward5 } from '@mui/icons-material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ApexCharts from 'react-apexcharts';
import { useTheme } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import ReactApexChart from 'react-apexcharts';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
const Home = () => {
  console.log("customer home renders")

  const profileStats = [
    {
      title: 'Active Policies',
      profit: 4,
      loss: 0
    },
    {
      title: 'Claims',
      profit: 2,
      loss: 0
    },
    {
      title: 'Renewal',
      profit: 40,
      loss: 0
    },
    {
      title: 'Register',
      profit: 0,
      loss: 0
    }
  ]


  const theme = useTheme()

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'inherit'
      }
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    },
    fill: {
      opacity: 1
    },
    colors: [theme.palette.primary.main], // Custom bar color
  };

  const series = [{
    name: 'Sales',
    data: [10, 40, 30, 70, 50, 60, 90]
  }];
  const chartOptions = {
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
  const seriesChat = [44, 55, 41, 17, 15]


  const StatusBarGraph = React.memo(() => {
    console.log('renderedchart');
    return (
      <Box>

        <div id="chart">
          <ApexCharts options={options} series={series} type="bar" height={350} />
        </div>
      </Box >
    );
  });

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
          primary={<Typography gutterBottom variant='h4'>Overview</Typography>}
        />
      </ListItem>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} >
          <Stack direction="row" flexWrap='wrap' gap={2}>
            {profileStats.map((data, _) => (<Card key={_} sx={{ flexGrow: 1 }}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <MoreHorizOutlined />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                    <Icon fontSize='small' color='inherit'>
                      flash_on
                    </Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={data.title}
                />
              </ListItem>
              <CardContent sx={{ pt: 0 }}>
                <Typography color="success.light" variant='h4'>{data.profit}</Typography>
                <Chip size='small' label={<Typography variant='overline' >365 days</Typography>} />
              </CardContent>
              <Divider />
              <CardActions>
                <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>View Report</Button>
              </CardActions>
            </Card>))
            }
          </Stack>
        </Grid>



        <Grid item xs={12} md={7}>
          <Card>
            <List
              subheader={
                <ListSubheader component="div">
                  Montly Renewals
                </ListSubheader>
              }
            >
              <Divider />
              <StatusBarGraph />
            </List>
          </Card>
        </Grid>


        <Grid item xs={12} md={7}>
          <Card>
            <List
              subheader={
                <ListSubheader component="div">
                  Policy Queue
                </ListSubheader>
              }
            >
              <Divider />


              <ListItem alignItems="flex-start" secondaryAction={
                <Button endIcon={<ArrowForwardIosRoundedIcon />}>Resume</Button>
              }>
                <ListItemAvatar>
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: '0.4em', mr: 2, width: { xs: 40, md: 60 } }}
                    image={'https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png'}
                  />
                </ListItemAvatar>
                <ListItemText primary={
                  <>
                    <Typography variant="body2" component='span' mr={2}>Gowri Shankar</Typography>
                    <Chip size="small" color="primary" variant="outlined" label="General Life Insurance"></Chip>

                  </>
                }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        Application ID:
                      </Typography>
                      {"AP012454GH4FJDJ04"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" secondaryAction={
                <Button endIcon={<ArrowForwardIosRoundedIcon />}>Resume</Button>
              }>
                <ListItemAvatar>
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: '0.4em', mr: 2, width: { xs: 40, md: 60 } }}
                    image={'https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png'}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="General Life Insurance"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        Application ID: {"AP012454GH4FJDJ04"}
                      </Typography>

                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" secondaryAction={
                <Button endIcon={<ArrowForwardIosRoundedIcon />}>Resume</Button>
              }>
                <ListItemAvatar>
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: '0.4em', mr: 2, width: { xs: 40, md: 60 } }}
                    image={'https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png'}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="General Life Insurance"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        Application ID:
                      </Typography>
                      {"AP012454GH4FJDJ04"}
                    </React.Fragment>
                  }
                />
              </ListItem>


            </List>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card>
            <List
              subheader={
                <ListSubheader component="div">
                  Product Claims
                </ListSubheader>
              }
            >
              <Divider />
              <Box component={CardContent} id="chart">
                <ReactApexChart options={chartOptions} series={seriesChat} type="donut" />
              </Box>
            </List>
          </Card>
        </Grid>

      </Grid>
    </Box>
  )
}

export default React.memo(Home)