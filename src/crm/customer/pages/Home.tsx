import { Box, Button, Card, CardContent, Divider, Grid, List, ListItem, ListItemText, ListSubheader, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';

import PoliciesQueue from '../components/PoliciesQueue';
import CustomerStats from '../components/CustomerStats';
import ReactApexChart from 'react-apexcharts';
import ProductClaims from '../components/ProductClaims';

const Home = () => {
  console.log('customer home renders');
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar', // No need for 'as const', ApexCharts already understands 'bar' as a valid type
      height: 350,
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',

      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: '',
      align: 'center', // Ensure it's 'center', 'left', or 'right'
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'inherit',
      },
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
    fill: {
      opacity: 1,
    },
    colors: [theme.palette.primary.main], // Custom bar color
  };

  const series = [
    {
      name: 'Sales',
      data: [30, 40, 45, 50, 49, 60, 70],
    },
  ];





  const StatusBarGraph = React.memo(() => {
    return (
      <Card>
        <List subheader={<ListSubheader component="div">Montly Renewals</ListSubheader>}>
          <Divider />
          <Box>
            <div id="chart">
              <ReactApexChart options={options} series={series} type="bar" height={350} />
            </div>
          </Box>
        </List>
      </Card>
    );
  });

  return (
    <Box mt={3}>
      <ListItem
        disableGutters
        secondaryAction={
          <Stack direction="row" gap={1}>
            <Button size="small" variant="outlined" startIcon={<FilterListRoundedIcon />}>
              Filter
            </Button>
            <Button size="small" variant="outlined" startIcon={<FileUploadRoundedIcon />}>
              Export
            </Button>
          </Stack>
        }
      >
        <ListItemText primary={<Typography gutterBottom variant="h4">Overview</Typography>} />
      </ListItem>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <CustomerStats />
        </Grid>

        <Grid item xs={12} md={7}>
          {/* <StatusBarGraph /> */}
        </Grid>

        <Grid item xs={12} md={7}>
          <PoliciesQueue />
        </Grid>
        {/* claims */}
        <Grid item xs={12} md={5}>
          {/* <ProductClaims /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(Home);
