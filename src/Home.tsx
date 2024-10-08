import React, { useState } from "react";

//============ MUI IMPORTS ==============>
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Container, Fab, Grid, keyframes, ListItem, ListItemIcon, ListItemText, Stack, styled, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//============ SVG IMPORTS ==============>
import loanLogo from "./assets/navAssets/Loan.svg";
import healthLogo from "./assets/navAssets/Health.svg";
import carLogo from "./assets/navAssets/car.svg";
import travelLogo from "./assets/navAssets/plane.svg";
import commercialLogo from "./assets/navAssets/commercial.svg"
import bikeLogo from "./assets/navAssets/Bike.svg";
import giftBox from './assets/spark.svg';


import CookieCard from "./Framework/components/CookieCard"
import { RootProps } from "./types/RootProps";

import { RootState } from "./redux/store";

const Home = () => {
    console.log('home renders')
    type navProps = {
        imgUrl: string,
        name: string,
        path: string
    }
    const cookiePrompt = useSelector((state: RootState) => state.ui.cookieConsent)


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




    const rotate = keyframes`
        0% {
          transform: rotate(0deg);
          scale:0.9
        }
        50% {
          transform: rotate(20deg);
          scale:1.05
        }
        100%{
        transform:rotate(0deg);
              scale:0.9
        }
      `;

    const ShakeIcon = styled(CallRoundedIcon)(({ theme }) => ({
        animation: `${rotate} 1s linear infinite`,
    }));



    return <Box>
        <Container maxWidth='lg'>
            <Grid container spacing={2} mt={1} flexGrow={1}>
                <Grid item xs={12} mb={5}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Typography variant="h4">Lets Find Your</Typography>
                            <Typography variant="h4" fontWeight={600}>Best Insurance Plan</Typography>
                            <Stack direction={'row'} gap={1} mt={2}>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <CardMedia sx={{ width: 16, height: 16 }} component={'img'} image={giftBox} alt="" /></ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body2">
                                            Quick, easy &
                                            hassle free</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <CardMedia sx={{ width: 16, height: 16 }} component={'img'} image={giftBox} alt="" />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body2">
                                            80+ Insurer Partners</Typography>
                                    </ListItemText>
                                </ListItem>
                            </Stack>
                            <ListItem disablePadding sx={{ mt: 2 }}>
                                <ListItemIcon sx={{ minWidth: 24 }}>
                                    <CardMedia sx={{ width: 16, height: 16 }} component={'img'} image={giftBox} alt="" /></ListItemIcon>
                                <ListItemText>
                                    <Typography variant="body2">
                                        3X Faster quotes</Typography>
                                </ListItemText>
                            </ListItem>
                            <Stack direction='row' gap={2} mt={2}>
                                <Button variant="contained" endIcon={<ShakeIcon>
                                    <CallRoundedIcon />
                                </ShakeIcon>}>Get Started</Button>
                                <Button variant="outlined">Free Quotes</Button>
                            </Stack>
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
                            <MuiLink component={Link} to={nav.path}>
                                <CardActionArea>
                                    <CardContent component={Card}>

                                        <Stack alignItems={'center'}>
                                            <Avatar src={nav.imgUrl} sx={{ width: "28px", height: "28px", objectFit: 'cover' }} variant="square" />
                                            <Typography className="addition-service-card-title">{nav.name}</Typography>
                                        </Stack>

                                    </CardContent>
                                </CardActionArea>
                            </MuiLink>
                        </Grid>
                    })
                }
                <Grid item xs={12}>
                    <Box minWidth={'100%'} display={'flex'} justifyContent={'center'}>
                        <Chip variant="outlined" label="Explore more" size="small" />
                    </Box>
                </Grid>
            </Grid>
        </Container>

        {cookiePrompt && <CookieCard />}
    </Box>
}
export default Home;