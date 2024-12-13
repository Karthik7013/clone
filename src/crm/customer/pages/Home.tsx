import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Grid, Icon, IconButton, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Menu, MenuItem, Paper, Skeleton, Stack, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemedProps, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DeleteOutline, MoreHorizOutlined, Forward5 } from '@mui/icons-material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ApexCharts from 'react-apexcharts';
import { useTheme } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import ReactApexChart from 'react-apexcharts';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { getCustomerStats } from '../../../redux/slice/dashboardSlice';
import PoliciesQueue from '../components/PoliciesQueue';
const Home = () => {
  console.log("customer home renders");
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.dashboard.stats.loading);
  const customerStats = useSelector((state: RootState) => state.dashboard.stats.data);

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

  useEffect(() => {
    dispatch(getCustomerStats())
  }, [dispatch])
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
        {loading ? <Skeleton animation='wave' variant='rectangular' height="200px"></Skeleton> : <div id="chart">
          <ApexCharts options={options} series={series} type="bar" height={350} />
        </div>}
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
          {loading ?
            <Stack direction="row" flexWrap='wrap' gap={2}>
              {profileStats.map((data, _) => (<Card key={_} sx={{ flexGrow: 1 }}>
                <ListItem
                  secondaryAction={
                    <Skeleton variant='circular' width='30px' height='30px' />
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
                  <Skeleton variant='rectangular' width='50px' />
                </CardContent>
                <Divider />
                <CardActions>
                  {loading ? <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>View Report</Button> : <Skeleton variant='rectangular' width="100px"></Skeleton>}
                </CardActions>
              </Card>))
              }
            </Stack>
            : <Stack direction="row" flexWrap='wrap' gap={2}>
              <Card sx={{ flexGrow: 1 }}>
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
                    primary={'Active Policies'}
                  />
                </ListItem>
                <CardContent sx={{ pt: 0 }}>
                  <Typography color="success.light" variant='h4'>{customerStats?.activePolicies.count}</Typography>
                  <Chip size='small' label={<Typography variant='overline' >{customerStats?.activePolicies.percentage}%</Typography>} />
                </CardContent>
                <Divider />
                <CardActions>
                  <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>View Report</Button>
                </CardActions>
              </Card>
              <Card sx={{ flexGrow: 1 }}>
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
                    primary={'Claims'}
                  />
                </ListItem>
                <CardContent sx={{ pt: 0 }}>
                  <Typography color="success.light" variant='h4'>{customerStats?.claimPolicies.count}</Typography>
                  <Chip size='small' label={<Typography variant='overline' >{customerStats?.claimPolicies.percentage}%</Typography>} />
                </CardContent>
                <Divider />
                <CardActions>
                  <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>View Report</Button>
                </CardActions>
              </Card>
              <Card sx={{ flexGrow: 1 }}>
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
                    primary={'Renewal'}
                  />
                </ListItem>
                <CardContent sx={{ pt: 0 }}>
                  <Typography color="success.light" variant='h4'>{customerStats?.renewalPolicies.count}</Typography>
                  <Chip size='small' label={<Typography variant='overline' >{customerStats?.renewalPolicies.percentage}%</Typography>} />
                </CardContent>
                <Divider />
                <CardActions>
                  <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>View Report</Button>
                </CardActions>
              </Card>
              <Card sx={{ flexGrow: 1 }}>
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
                    primary={'Register'}
                  />
                </ListItem>
                <CardContent sx={{ pt: 0 }}>
                  <Typography color="success.light" variant='h4'>{customerStats?.registeredClaimPolicies.count}</Typography>
                  <Chip size='small' label={<Typography variant='overline' >{customerStats?.registeredClaimPolicies.percentage}%</Typography>} />
                </CardContent>
                <Divider />
                <CardActions>
                  <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>View Report</Button>
                </CardActions>
              </Card>
            </Stack>}
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
          <PoliciesQueue />
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