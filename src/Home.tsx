import React from "react";
import { Avatar, Badge, Box, Button, Card, CardContent, CardMedia, Chip, Container, Fab, Grid, ListItem, ListItemIcon, ListItemText, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// nav - img
import loanLogo from "./assets/navAssets/Loan.svg";
import healthLogo from "./assets/navAssets/Health.svg";
import carLogo from "./assets/navAssets/car.svg";
import travelLogo from "./assets/navAssets/plane.svg";
import commercialLogo from "./assets/navAssets/commercial.svg"
import bikeLogo from "./assets/navAssets/Bike.svg";
import giftBox from './assets/spark.svg';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import CookieCard from "./Framework/components/CookieCard"
import { RootProps } from "./types/RootProps";
const Home = () => {
    console.log('home renders')
    type navProps = {
        imgUrl: string,
        name: string,
        path: string
    }
    const cookiePrompt = useSelector((state: RootProps) => state.ui.enableCookie)


    // products navigations images url
    const products: navProps[] = [
        {
            imgUrl: carLogo,
            name: "Car",
            path: '/motor/car'
        },
        {
            imgUrl: bikeLogo,
            name: "Bike",
            path: '/motor/bike'
        },
        {
            imgUrl: commercialLogo,
            name: "Commercial",
            path: '/motor/commercial'
        },
        {
            imgUrl: healthLogo,
            name: "Health",
            path: 'health'
        },
        {
            imgUrl: travelLogo,
            name: "Travel",
            path: 'travel'
        },
        {
            imgUrl: loanLogo,
            name: "Loan",
            path: 'loan'
        }]



    return <Box sx={{ height: "100vh" }}>
        <Container maxWidth='lg'>
            <Grid container spacing={2} mt={1} flexGrow={1}>
                <Grid item xs={12}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Typography variant="h4">Lets Find Your</Typography>
                            <Typography variant="h4" fontWeight={600}>Best Insurance Plan</Typography>
                            <Stack direction={'row'} gap={2} >
                                <ListItem>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <CardMedia sx={{ width: 16, height: 16 }} component={'img'} image={giftBox} alt="" /></ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1">

                                            Quick, easy &
                                            hassle free</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <CardMedia sx={{ width: 16, height: 16 }} component={'img'} image={giftBox} alt="" />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1">
                                            80+ Insurer Partners Support</Typography>
                                    </ListItemText>
                                </ListItem>
                            </Stack>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 24 }}>
                                    <CardMedia sx={{ width: 16, height: 16 }} component={'img'} image={giftBox} alt="" /></ListItemIcon>
                                <ListItemText>
                                    <Typography variant="body1">
                                        Quick, easy &
                                        hassle free</Typography>
                                </ListItemText>
                            </ListItem>
                        </Box>
                        <Box>
                            <Card elevation={0}>
                                <CardMedia height={200} component={'img'} image="https://static.pbcdn.in/cdn/images/home/term_crore_desktop.png?v=10" />
                            </Card>
                        </Box>
                    </Stack>
                </Grid>

                {
                    products.map((nav: navProps, _: number) => {
                        return <Grid key={_} item xs={4} sm={3} md={3} lg={2}>
                            <Link to={nav.path}>
                                <CardContent component={Card}>
                                    <Stack alignItems={'center'}>
                                        <Avatar src={nav.imgUrl} sx={{ width: "28px", height: "28px", objectFit: 'cover' }} variant="square" />
                                        <Typography className="addition-service-card-title">{nav.name}</Typography>
                                    </Stack>
                                </CardContent>
                            </Link>
                        </Grid>
                    })
                }
                <Grid item xs={12}>
                    <Box minWidth={'100%'} display={'flex'} justifyContent={'center'}>
                        <Chip clickable variant="outlined" icon={<GridViewRoundedIcon sx={{ mr: 1 }} />} label="View More..." size="small" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
        {cookiePrompt && <CookieCard />}
    </Box>
}
export default Home;