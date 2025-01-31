import { alpha, Avatar, Box, Breadcrumbs, Button, ButtonGroup, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, IconButton, ListItem, ListItemAvatar, ListItemText, MenuItem, MenuList, Select, Stack, TextField, Toolbar, Typography } from "@mui/material"
import React, { useState } from "react"
import ReactApexChart from 'react-apexcharts';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { useTheme } from "@mui/material";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
const BussinessAnalytics = () => {
  const theme = useTheme();
  const [pieState] = useState({

    series: [44, 55, 41, 17, 15],
    options: {
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
    },
  });

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
      colors: ['#fff'], // Custom colors for each series
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
        },

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
  const [barState] = useState({

    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
          borderRadiusApplication: 'end'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$ " + val + " thousands"
          }
        }
      }
    },
  });
  const StatusCard = () => {
    const theme = useTheme();
    return <Card elevation={5} sx={{ display: 'flex', flexGrow: 1, p: 2, gap: 2, justifyContent: 'space-between', overflow: 'initial', pb: 0, backgroundImage: `linear-gradient(160deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)` }}>


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
  }

  return (<Box mt={3}>
    <ListItem disableGutters>
      <ListItemText
        primary={<Typography gutterBottom variant='h4'>Overview</Typography>}
      />
    </ListItem>
    <Box>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {/* <Grid item lg={8} xs={12}>
          <Box>
            <Stack direction='row' alignItems='center' mb={2}>
              <Typography gutterBottom variant="h6">Total Sales</Typography>
              <Box flexGrow={1} />
              <Select defaultValue={'weekly'} startAdornment={<CalendarMonthRoundedIcon sx={{ mr: 1 }} fontSize="small" />} size="small" sx={{ maxWidth: 150 }} fullWidth>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="yearly">Yearly</MenuItem>
              </Select>
            </Stack>
            <Stack direction='row' sx={{ gap: 2, flexWrap: 'wrap' }}>
              {[1, 2, 3, 4].map((i) => {
                return <Card component={Stack} key={i} sx={{ flexGrow: 1, p: 2, minWidth: 60, rowGap: 2 }}>
                  <Box component={Stack} direction={'row'} alignItems='center'>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.background.default, mr: 1 }}>
                      <GroupsRoundedIcon />
                    </Avatar>
                    <Typography variant="subtitle2">Total Orders</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={600}>
                      123,670
                    </Typography>
                    <ListItem
                      disableGutters
                      secondaryAction={
                        <IconButton color="warning" edge="end" aria-label="delete">
                          <TrendingUpRoundedIcon color="inherit" />
                        </IconButton>
                      }
                    >
                      <ListItemText disableTypography primary={<Typography variant="caption">Sales this Month</Typography>} />
                    </ListItem>
                  </Box>
                </Card>
              })}
            </Stack>
          </Box>
        </Grid> */}
        <Grid item xs={12} flexWrap={'wrap'} component={Stack} direction={'row'} rowGap={2} columnGap={2}>
          <StatusCard />
          <StatusCard />
          <StatusCard />
          <StatusCard />
        </Grid>
        <Grid xs={12} component={CardContent}>
          <Box component={Card} id="chart">
            <CardContent>
              <ReactApexChart options={barState.options} series={state.series} type="bar" height={350} />
            </CardContent>
          </Box>
        </Grid>

      </Grid>

    </Box>
  </Box >
  )
}

export default BussinessAnalytics