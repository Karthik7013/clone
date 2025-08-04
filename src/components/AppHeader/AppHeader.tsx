import { Box, CardMedia, Container, Stack, Toolbar, Typography } from "@mui/material";

import AppBar from "../ui/AppBar/AppBar";
import Title from "../Title/Title";
import Darkmode from "../Darkmode";
import LoginButton from "../GoogleButton";

const AppHeader = () => {
    return <AppBar>
        <Title title="NameLix 360° Insurance | Smart Insurance for a Secure Tomorrow" description="This is an awesome page using react-helmet!" />
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

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }} />
                <Box sx={{ flexGrow: { xs: 1, md: 0 }, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <LoginButton />
                </Box>
                <Darkmode />
            </Toolbar>
        </Container>
    </AppBar>
}
export default AppHeader;