import React from "react";
import { Avatar, Box, Button, Card, CardContent, CardMedia, Container, Grid, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
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

const Home = () => {
    type navProps = {
        imgUrl: string,
        name: string,
        path: string
    }

    const [vehicleType, setVehicleType] = useState<'car' | 'bike' | 'commercial'>('car');

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

    // get the background moving layer car bike commercial
    const Layer = () => {
        const getLayer = (img: string) => {
            return <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    right: 0,
                }}>
                <Box style={{ background: "linear-gradient(180deg, #fff, rgba(60, 177, 249, 0.55) 100%)", height: "100vh" }}>
                    <img alt="bg-layout"
                        src={img}
                        style={{
                            position: "absolute",
                            width: "100%",
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    />
                </Box>
            </Box>
        }
        switch (vehicleType) {
            case 'car':
                return getLayer(carMoving);
            case 'bike':
                return getLayer(bikeMoving)
            case 'commercial':
                return getLayer(truckMoving)
            default:
                return getLayer(carMoving)
        }
    }

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
                                <CardMedia height={200} component={'img'} image="https://static.pbcdn.in/cdn/images/home/health-web-desktop.png" alt='card1' />
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