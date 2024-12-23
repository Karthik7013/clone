import { Box, Button, Card, CardContent, Divider, Grid, List, ListItem, ListItemText, ListSubheader, Stack, Typography } from '@mui/material'
import React from 'react'
import ApexCharts from 'react-apexcharts';
import { useTheme } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import ReactApexChart from 'react-apexcharts';
import PoliciesQueue from '../components/PoliciesQueue';
import CustomerStats from '../components/CustomerStats';

const Home = () => {
  console.log("customer home renders");
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

  const dataProducts = {
    data: {
      labels: ["Motor Insurance", "Pet Insurance", "Travel Insurance", "Life Insurance", "Health Insurance"],
      series: [44, 55, 41, 17, 15]
    }
  }

  const chartOptions = {
    chart: {
      type: 'donut',
    },
    labels: dataProducts.data.labels, // Custom labels
  }


  const StatusBarGraph = React.memo(() => {
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
          <CustomerStats />
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
              <Box component={CardContent} id="chart" style={{ width: '400px', margin: 'auto' }}>
                <ReactApexChart options={chartOptions} series={dataProducts.data.series} type="donut" />
              </Box>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default React.memo(Home)