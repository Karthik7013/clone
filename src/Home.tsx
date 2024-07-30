import React from "react";
import { Avatar, Box, Card, CardContent, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

// bg-layer
import carMoving from "./assets/car/carMoving.gif";
import truckMoving from './assets/commercial/truckwithbuilding.gif';
import bikeMoving from "./assets/bike/bikewithbuilding.gif"

// nav - img
// import bikeLogo from "./assets/navAssets/Bike.svg";
// import loanLogo from "./assets/navAssets/Loan.svg";
// import healthLogo from "./assets/navAssets/Health.svg";
// import carLogo from "./assets/navAssets/car.svg";
// import travelLogo from "./assets/navAssets/plane.svg";
// import commercialLogo from "./assets/navAssets/commercial.svg"
import bikeLogo from "./assets/navAssets/"
import { useState } from "react";

const Home = () => {
    type navProps = {
        imgUrl: string,
        name: string,
        path: string
    }

    const [vehicleType, setVehicleType] = useState<'car' | 'bike' | 'commercial'>('car');

    // products navigations images url
    const products: navProps[] = [{
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
        <Layer />
        <Container maxWidth='lg'>
            <Grid container spacing={2} mt={1} flexGrow={1}>
                <Grid item xs={4} sm={3} md={3} lg={2}>
                    <Card onClick={() => setVehicleType('car')}>
                        <CardContent>
                            <Avatar src={carLogo} sx={{ width: "60px", height: "60px" }} variant="square" />
                            <div className="addition-service-card-title">Car</div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={2}>
                    <Card onClick={() => setVehicleType('bike')}>
                        <CardContent>
                            <Avatar src={bikeLogo} sx={{ width: "60px", height: "60px" }} variant="square" />
                            <div className="addition-service-card-title">Bike</div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={2}>
                    <Card onClick={() => setVehicleType('commercial')}>
                        <CardContent>
                            <Avatar sx={{ width: "60px", height: "60px" }} variant="square" src={commercialLogo} />
                            <div className="addition-service-card-title">Commercial</div>
                        </CardContent>
                    </Card>
                </Grid>
                {
                    products.map((nav: navProps, _: number) => {
                        return <Grid key={_} item xs={4} sm={3} md={3} lg={2}>
                            <Link to={nav.path} >
                                <Card>
                                    <CardContent>
                                        <Avatar src={nav.imgUrl} sx={{ width: "60px", height: "60px", objectFit: 'cover' }} variant="square" />
                                        <div className="addition-service-card-title">{nav.name}</div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    })
                }
            </Grid>
        </Container>
    </Box>
}
export default Home;