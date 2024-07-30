import { Avatar, Box, Button, Card, CardMedia, Container, Divider, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import { KeyboardArrowRight } from '@mui/icons-material';

const Footer = () => {
    const logoStyle = {
        width: '140px',
        height: 'auto',
    };

    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" mt={1}>
                {'Copyright © '}
                <Link to="#">NameLix 360° Insurance&nbsp;</Link>
                {new Date().getFullYear()}
            </Typography>
        );
    }

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Divider sx={{ width: '100%' }} />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                        <Box mb={1}>
                            <Card elevation={0}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"

                                    sx={{ maxWidth: '120px' }}

                                    image="/logo.jpg"
                                />
                            </Card>
                        </Box>
                        <Typography variant="body2" fontWeight={600} gutterBottom>
                            NameLix 360° Insurance pvt.lmtd
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                            Subscribe to our Website for Affordable Insurance and benfits.
                        </Typography>
                        <Stack direction="row" spacing={1} useFlexGap>
                            <TextField
                                id="outlined-basic"
                                hiddenLabel
                                size="small"
                                variant="outlined"
                                fullWidth
                                aria-label="Enter your email address"
                                placeholder="Your email address"
                                inputProps={{
                                    autoComplete: 'off',
                                    'aria-label': 'Enter your email address',
                                }}
                            />
                            <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                                Subscribe
                            </Button>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Motor Insurance
                    </Typography>
                    <Link color="text.secondary" to="#">
                        Health Insurance
                    </Link>
                    <Link color="text.secondary" to="#">
                        Travel Insurance
                    </Link>
                    <Link color="text.secondary" to="#">
                        Personal Loans
                    </Link>
                    <Link color="text.secondary" to="#">
                        Life Insurance
                    </Link>
                    <Link color="text.secondary" to="#">
                        FAQs
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Company
                    </Typography>
                    <Link color="text.secondary" to="#">
                        About us
                    </Link>
                    <Link color="text.secondary" to="#">
                        Careers
                    </Link>
                    <Link color="text.secondary" to="#">
                        Press
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Legal
                    </Typography>
                    <Link color="text.secondary" to="#">
                        Terms
                    </Link>
                    <Link color="text.secondary" to="#">
                        Privacy
                    </Link>
                    <Link color="text.secondary" to="#">
                        Contact
                    </Link>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Link color="text.secondary" to="#">
                        Privacy Policy
                    </Link>
                    <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                        &nbsp;•&nbsp;
                    </Typography>
                    <Link color="text.secondary" to="#">
                        Terms of Service
                    </Link>
                    <Copyright />
                </div>
                <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <IconButton
                        color="inherit"
                        href="#"
                        aria-label="GitHub"
                        sx={{ alignSelf: 'center' }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="#"
                        aria-label="X"
                        sx={{ alignSelf: 'center' }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="#"
                        aria-label="LinkedIn"
                        sx={{ alignSelf: 'center' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    )
}

export default Footer