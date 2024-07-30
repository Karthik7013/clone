import { Box, Breadcrumbs, Card, CardMedia, Grid, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const BussinessAnalytics = () => {

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




      <Toolbar>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            MUI
          </Link>
          <Link
            color="inherit"
            to="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </Toolbar>



      <Grid container rowGap={1} columnSpacing={1} px={3}>
        {[1, 2, 3, 4].map((card) => <StatusCard />)}
      </Grid>


    </Box>
  )
}

export default BussinessAnalytics