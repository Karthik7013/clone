import { Box, Breadcrumbs, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Stack, TextField, Toolbar, Typography } from "@mui/material"
import React, { useState } from "react"
import ReactApexChart from 'react-apexcharts';

const BussinessAnalytics = () => {
  const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];
  const StatusCard = () => {
    return <Grid item xs={12} sm={6} md={6} lg={3}>
      <Card elevation={5} sx={{ display: 'flex', p: 2, gap: 2, justifyContent: 'space-between', overflow: 'initial', pb: 0, backgroundImage: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)' }}>


        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box>
            <Typography component="div" variant="h5" fontWeight={700}>
              $ 15,300
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              Sales
            </Typography>
          </Box>

          <Stack>
            <Typography variant="caption">Profits</Typography>
            <Typography variant="caption">Loss</Typography>
          </Stack>

        </Box>
        <Box>
          <ReactApexChart options={state.options} series={state.series} type="line" height={100} width={120} />
        </Box>
      </Card>
    </Grid>



  }
  const [state] = useState({
    series: [{
      name: "Desktops",
      data: [0, 41, 10, 51, 49, 6, 69, 50, 148]
    }],
    options: {
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false // Hide the toolbar
        }
      },
      dataLabels: {
        enabled: false
      },

      stroke: {
        curve: 'smooth',
        width: 3 // Set the stroke width here
      },
      grid: {
        borderColor: 'transparent', // Grid line color
        row: {
          colors: ['transparent', 'transparent']
        },
        yaxis: {
          lines: {
            show: false // Hide horizontal lines
          }
        }
      },

      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          show: false // Hide x-axis labels
        },
        axisBorder: {
          show: false // Hide x-axis line
        },
        axisTicks: {
          show: false // Hide x-axis ticks
        }
      },
      yaxis: {
        labels: {
          show: false // Hide y-axis labels
        },
        axisBorder: {
          show: false // Hide y-axis line
        },
        axisTicks: {
          show: false // Hide y-axis ticks
        }
      },
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topRight',
          offsetX: 0,
          offsetY: -60,
        }
      }
    }
  })

  return (
    <Box>
      <Grid container rowGap={1} columnSpacing={2}>
        {[1, 2, 3, 4].map((card) => <StatusCard />)}
      </Grid>
    </Box>
  )
}

export default BussinessAnalytics