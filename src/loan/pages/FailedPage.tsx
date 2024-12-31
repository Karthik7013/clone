import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { alpha, Box, Button, Container, Grid, Paper, Typography, useTheme } from "@mui/material";

const Failedpage = () => {
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
                    margin: 'auto',
                    mt: 10
                }}
            >
                {/* Failed Icon */}
                <Box width='200px' height='200px' margin='auto'>

                    <DotLottieReact
                        src="https://lottie.host/f4dfd2d7-9633-4547-9c5d-4c2a77f7489f/l4RlT8NMXE.lottie"
                        loop
                        autoplay
                    />
                </Box>
                {/* Payment Success Text */}
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.error.main }}>
                    Payment Failed !
                </Typography>
                <Box mb={3}>
                    <Typography variant="caption">
                        If any amount has been deducted, it will be refunded within 7 working days.
                    </Typography>
                </Box>
                {/* Payment Summary */}

                <Button fullWidth color="error">Go Back</Button>

            </Paper>
        </Container>
    )
}

export default Failedpage;