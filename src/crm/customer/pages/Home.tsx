import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, Divider, Grid, IconButton, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Stack, ThemedProps, Typography } from '@mui/material'
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
        <Grid item xs={5}>
          <Stack direction="row" flexWrap='wrap' gap={2}>
            {[1, 2, 3, 4].map(() => (<Card sx={{ flexGrow: 1 }}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <MoreHorizOutlined />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <DeleteOutline />
                </ListItemAvatar>
                <ListItemText
                  primary="Total Sales"
                />
              </ListItem>
              <Divider />
              <CardActions>
                <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>View Report</Button>
              </CardActions>
            </Card>))
            }
          </Stack>
        </Grid>
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <div id="chart">
                <ApexCharts options={options} series={series} type="bar" height={350} />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card><CardContent>
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


          </CardContent></Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card><CardContent>



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