import { Box, Breadcrumbs, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Stack, TextField, Toolbar, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom";
import { BarChart } from '@mui/x-charts/BarChart';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from '@mui/x-charts/LineChart';
const BussinessAnalytics = () => {

  const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];
  const StatusCard = () => {
    return <Grid item xs={12} md={6} lg={3}>
      <Card elevation={4} sx={{ display: 'flex', p: 2, gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography component="div" variant="h5" fontWeight={700}>
            $ 15,300
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            Sales
          </Typography>

        </Box>
        <CardMedia
          component="img"
          sx={{ width: 60, height: 60 }}
          image="https://mui.com/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
        />
      </Card>
    </Grid>



  }
  return (
    <Box>








      <Grid container rowGap={1} columnSpacing={1}>
        {[1, 2, 3, 4].map((card) => <StatusCard />)}
      </Grid>
      <Box mt={2}>
        <Card elevation={6}>
          <CardContent>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Box>
                <Typography variant="h5" component={'h1'}>Weekly Sales</Typography>
              </Box>
              <Box flexDirection={'row'} component={Stack} gap={2}>
                <Button startIcon={<DownloadRoundedIcon />} variant="contained">Download</Button>
                <TextField sx={{ width: 200 }} size="small" label="Filter" select />
              </Box>
            </Stack>

            <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={300}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
            />
          </CardContent>

        </Card>
      </Box>
      <Grid container height={500} mt={2}>
        <Grid item xs={12} md={6}>
          <Card elevation={6}>
            <CardContent>
              <LineChart
                sx={{ width: '100%' }}
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                  },
                ]}
                width={500}
                height={300}
              />
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} md={6}>
          <PieChart
            series={[
              {
                data: [...data],
                innerRadius: 60,
                outerRadius: 99,
                paddingAngle: 2,
                cornerRadius: 6,
                startAngle: 0,
                endAngle: 360,
              }
            ]}
          />



        </Grid>
      </Grid>





    </Box>
  )
}

export default BussinessAnalytics