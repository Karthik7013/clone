import React from "react";
import { Avatar, Box, Button, Card, CardContent, CardMedia, Container, Grid, ListItem, ListItemIcon, ListItemText, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


// bg-layer
import carMoving from "./assets/car/carMoving.gif";
import truckMoving from './assets/commercial/truckwithbuilding.gif';
import bikeMoving from "./assets/bike/bikewithbuilding.gif"

// nav - img
import loanLogo from "./assets/navAssets/Loan.svg";
import healthLogo from "./assets/navAssets/Health.svg";
import carLogo from "./assets/navAssets/car.svg";
import travelLogo from "./assets/navAssets/plane.svg";
import commercialLogo from "./assets/navAssets/commercial.svg"
import bikeLogo from "./assets/navAssets/Bike.svg";
import { useState } from "react";
import giftBox from './assets/spark.svg';
import Slider from "react-slick";
const Home = () => {
    type navProps = {
        imgUrl: string,
        name: string,
        path: string
    }


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




    const images = [
        {
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath:
                'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Bird',
            imgPath:
                'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Bali, Indonesia',
            imgPath:
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
        },
        {
            label: 'Goč, Serbia',
            imgPath:
                'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return <Box sx={{ height: "100vh" }}>
        {/* <Layer /> */}
        <Container maxWidth='lg'>
            <Grid container rowGap={2} spacing={2} mt={1} flexGrow={1}>
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
                                {/* <CardMedia height={200} component={'img'} image="https://static.pbcdn.in/cdn/images/home/health-web-desktop.png" alt='card1' /> */}
                                <CardMedia height={200} component={'img'} image="https://static.pbcdn.in/cdn/images/home/term_crore_desktop.png?v=10" />
                            </Card>

                        </Box>
                    </Stack>

                </Grid>

                {
                    products.map((nav: navProps, _: number) => {
                        return <Grid key={_} item xs={4} sm={3} md={3} lg={2}>
                            <Link to={nav.path} >
                                <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                    <Avatar src={nav.imgUrl} sx={{ width: "24px", height: "24px", objectFit: 'cover' }} variant="square" />
                                    <Typography className="addition-service-card-title">{nav.name}</Typography>
                                </CardContent>
                            </Link>
                        </Grid>
                    })
                }
                <Grid item xs={12}>
                    <Button sx={{ margin: 'auto' }} size="small" variant="outlined">View all products</Button>
                </Grid>
            </Grid>
        </Container>
    </Box>
}
export default Home;