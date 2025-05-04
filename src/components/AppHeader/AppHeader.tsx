import { AppBar, Box, CardMedia, Container, IconButton, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import Button from "../ui/Button/Button";
import Helmet from "react-helmet";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
const AppHeader = () => {
    return <AppBar>
        <Helmet>
            <title>NameLix 360° Insurance | Smart Insurance for a Secure Tomorrow </title>
            <meta name="description" content="This is an awesome page using react-helmet!" />
        </Helmet>
        <Container maxWidth="lg">
            <Toolbar disableGutters>
                <Box component={'a'} href='/' sx={{ background: 'white', borderRadius: '0.45rem', padding: 0.5, display: { xs: 'none', md: 'block' } }}>
                    <CardMedia
                        component="img"
                        height="40"
                        image="/logo.jpg"
                        alt="logo"
                        loading="lazy"
                    />
                </Box>

                <Typography variant="h5" noWrap component="a" href="/"
                    sx={{
                        ml: 1,
                        display: { xs: 'flex', md: 'none' },
                    }}
                >
                    <Stack sx={{ background: '#fff', borderRadius: "5px", padding: '5px', width: '70px' }}>
                        <img src="/logo.jpg" alt="logo" />
                    </Stack>
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>

                    <Button sx={{ color: 'white', display: 'block' }}>
                        Claims
                    </Button>
                    <Button startIcon={<CallRoundedIcon />} sx={{ color: 'white' }}>
                        Talk to Expert
                    </Button>
                </Box>

                <Box sx={{ flexGrow: { xs: 1, md: 0 }, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <IconButton sx={{ mr: 2 }}
                        // onClick={toggleMode}
                        color='inherit'>{<LightModeIcon />}</IconButton>
                    <Tooltip title="Signin">
                        <Button startIcon={<LoginRoundedIcon />}
                            // onClick={handleOpenSignInMenu}
                            sx={{ color: 'white' }}>
                            Signin
                        </Button>
                    </Tooltip>


                </Box>
            </Toolbar>
        </Container>
    </AppBar>
}
export default AppHeader;