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
    return <Grid item xs={12} sm={6} md={6} lg={3}>
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





    </Box>
  )
}

export default BussinessAnalytics