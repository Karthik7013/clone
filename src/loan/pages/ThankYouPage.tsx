import { Box, Button, CircularProgress, Container, Grid, Paper, Typography } from "@mui/material"
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTheme } from "@mui/material";
const ThankYouPage = () => {
  const theme = useTheme();
  return (
    <Container>
      {/* Paper Container for the Payment Success Card */}
      <Paper
        sx={{
          width: '100%',
          maxWidth: 600,
          padding: 4,
          textAlign: 'center',
          boxShadow: 3,
          margin:'auto',
          mt:10
        }}
      >
        {/* Success Icon */}
        <Box width='200px' height='200px' margin='auto'>
        <DotLottieReact
      src="https://lottie.host/2893b4a9-d9d9-43ac-a033-826ab7b928da/JAGTiKDVAh.lottie"
      loop
      autoplay
    />
        {/* <DotLottieReact
      src="https://lottie.host/f4dfd2d7-9633-4547-9c5d-4c2a77f7489f/l4RlT8NMXE.lottie"
      loop
      autoplay
    /> */}
        </Box>
        {/* Payment Success Text */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', color:theme.palette.success.main }}>
          Payment Successful!
        </Typography>

        <Typography variant="subtitle1" >
          Your payment has been processed successfully.
        </Typography>

        {/* Payment Summary */}
        <Box sx={{ marginTop: 3, marginBottom: 3 }}>
          <Typography variant="body1" >
            Amount: $299.99
          </Typography>
          <Typography variant="body1">
            Payment Method: Credit Card
          </Typography>
        </Box>

        {/* Buttons for Further Actions */}
        <Grid container spacing={2} justifyContent="center">

          <Grid item>
            <Button
              variant="outlined"
              color="success"
              onClick={() => console.log('View Receipt clicked')}
            >
              Download Receipt
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default ThankYouPage





