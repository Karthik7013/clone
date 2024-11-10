import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, Chip, Divider, Grid, Icon, IconButton, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemedProps, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { DeleteOutline, MoreHorizOutlined, Forward5 } from '@mui/icons-material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ApexCharts from 'react-apexcharts';
import { useTheme } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import ReactApexChart from 'react-apexcharts';
const Home = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const profileStats = [
    {
      title: 'Active Policies',
      profit: 4,
      loss: 0
    },
    {
      title: 'Claims',
      profit: 40000,
      loss: 0
    },
    {
      title: 'Renewal',
      profit: 4000,
      loss: 0
    },
    {
      title: 'Register',
      profit: 4000,
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


  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


  const StatusBarGraph = React.memo(() => {
    console.log('renderedchart');
    return (
      <Box>
        <Card>
          <CardContent>
            <div id="chart">
              <ApexCharts options={options} series={series} type="bar" height={350} />
            </div>
          </CardContent>
        </Card>
      </Box>
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
                  <Avatar sx={{ bgcolor: theme.palette.primary.light }}>
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
          <StatusBarGraph />
        </Grid>
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <ListItem
                disableGutters
                disablePadding
                secondaryAction={
                  <IconButton><FileUploadRoundedIcon /></IconButton>
                }
              >

                <ListItemText
                  primary="Recent Activity"

                />
              </ListItem>

              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>


            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <ListItem
                disableGutters
                disablePadding
                secondaryAction={
                  <IconButton><FileUploadRoundedIcon /></IconButton>
                }
              >

                <ListItemText
                  primary="Recent Activity"

                />
              </ListItem>


              <div id="chart">
                <ReactApexChart options={chartOptions} series={seriesChat} type="donut" />
              </div>

            </CardContent></Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home