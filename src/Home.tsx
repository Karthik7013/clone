import React, { useEffect } from "react";

//============ MUI IMPORTS ==============>
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Container, Divider, Fab, Grid, Grow, IconButton, InputAdornment, keyframes, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Paper, Slide, Stack, styled, TextField, Typography, useTheme } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
//============ SVG IMPORTS ==============>
import loanLogo from "./assets/navAssets/Loan.svg";
import healthLogo from "./assets/navAssets/Health.svg";
import carLogo from "./assets/navAssets/car.svg";
import travelLogo from "./assets/navAssets/plane.svg";
import commercialLogo from "./assets/navAssets/commercial.svg"
import bikeLogo from "./assets/navAssets/Bike.svg";
import giftBox from './assets/spark.svg';

import CookieCard from "./Framework/components/CookieCard"
import { RootState } from "./redux/store";
import ProviderLogo from "./Framework/components/ProviderLogo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';
const Home = () => {
    const theme = useTheme();
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
        },
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
        },
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
        }
    ]

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

    const settings = {
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Auto play
        autoplaySpeed: 2500, // Time before the next slide
        arrows: false, // Disable next and previous arrows
        dots: true
    };
    const bannerSettings = {
        infinite: true, // Infinite scrolling
        speed: 800, // Transition speed
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Auto play
        autoplaySpeed: 2000, // Time before the next slide
        arrows: true, // Disable next and previous arrows
        dots: false
    };



    return <Box>

        <Container maxWidth='lg'>
            <Grid container spacing={2} mt={1} flexGrow={1}>

                <Grid item xs={12} my={2}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Box sx={{ display: { xs: 'none', md: 'block', width: '100%' } }}>
                           
                            <Typography variant="h1">Lets Find Your</Typography>
                            <Typography variant="h1" fontWeight={600}>Best Insurance Plan</Typography>
                            <Stack direction={'row'} mt={2} maxWidth={500}>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <CardMedia sx={{ width: 16, height: 16 }} component={'img'} image={giftBox} alt="" /></ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="caption">
                                            Quick, easy &
                                            hassle free</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <CardMedia sx={{ width: 16, height: 16 }} component={'img'} image={giftBox} alt="" />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="caption">
                                            80+ Insurer Partners</Typography>
                                    </ListItemText>
                                </ListItem>
                            </Stack>
                            <ListItem disablePadding>
                                <ListItemIcon sx={{ minWidth: 24 }}>
                                    <CardMedia sx={{ width: 16, height: 16 }} component={'img'} image={giftBox} alt="" /></ListItemIcon>
                                <ListItemText>
                                    <Typography variant="caption">
                                        3X Faster quotes</Typography>
                                </ListItemText>
                            </ListItem>
                            <Stack direction='row' gap={2} my={2}>
                                <Button variant="contained" endIcon={<ShakeIcon>
                                    <CallRoundedIcon />
                                </ShakeIcon>}>Get Started</Button>
                                <Button variant="outlined">Free Quotes</Button>
                                {/* <TextField placeholder="Vehicle Number" InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <Button variant="contained">Click Here</Button>
                                    </InputAdornment>
                                ),
                            }} /> */}
                            </Stack>
   
                        </Box>
                        <Box>

                            <Box sx={{ width: '100%', maxWidth: 360, mx: 'auto', mt: 4 }}>
                                <Slider {...settings}>
                                    <Box sx={{ position: 'relative' }}>
                                        <Card elevation={0} sx={{ maxWidth: 380 }}>
                                            <CardMedia component={'img'} image="https://img.freepik.com/free-vector/business-insurance-template-blog-banner_53876-117981.jpg" />
                                        </Card>

                                    </Box>
                                    <Box sx={{ position: 'relative' }}>
                                        <Card elevation={0} sx={{ maxWidth: 400 }}>
                                            <CardMedia component={'img'} image="https://img.freepik.com/free-vector/blog-banner-template-vector-life-insurance_53876-126524.jpg" />
                                        </Card>
                                    </Box>
                                    <Box sx={{ position: 'relative' }}>
                                        <Card elevation={0} sx={{ maxWidth: 400 }}>
                                            <CardMedia component={'img'} image="https://img.freepik.com/free-vector/editable-template-vector-covid-19-travel-medical-insurance-presentation_53876-140961.jpg" />
                                        </Card>
                                    </Box>
                                    <Box sx={{ position: 'relative' }}>
                                        <Card elevation={0} sx={{ maxWidth: 400 }}>
                                            <CardMedia component={'img'} image="https://img.freepik.com/free-vector/health-insurance-template-vector-blog-banner_53876-111243.jpg" />
                                        </Card>
                                    </Box>
                                </Slider>
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
                {
                    products.map((nav: navProps, _: number) => {
                        return <Grid key={_} item xs={4} sm={3} md={3} lg={2}>
                            <MuiLink component={Link} to={nav.path}>
                                <CardActionArea sx={{ overflow: 'hidden' }}>
                                    <CardContent component={Card}>
                                        <Stack alignItems={'center'}>
                                            <Avatar src={nav.imgUrl} sx={{ width: "28px", height: "28px", objectFit: 'cover' }} variant="square" />
                                            <Box mb={2} />
                                            <Box justifyContent={'center'} width={'100%'} bottom={0} bgcolor={theme.palette.primary.light} component={Stack} direction={'row'} position='absolute'>
                                                <Typography variant="caption">{nav.name}</Typography>

                                            </Box>
                                            <Box top={5} right={5} component={Stack} direction={'row'} position='absolute'>
                                                <FiberNewRoundedIcon color="warning" />
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </CardActionArea>
                            </MuiLink>
                        </Grid>
                    })
                }
                <Grid item xs={12}>
                    <Box minWidth={'100%'} display={'flex'} justifyContent={'center'}>
                        <Chip clickable onDelete={() => { }} deleteIcon={<ArrowDropDownRoundedIcon />} variant="outlined" label="Explore more" size="small" />
                    </Box>
                </Grid>

                <Grid item xs={12} my={5}>
                    <Box>
                        <Typography gutterBottom variant="h2" textAlign='center' fontWeight={600}>Our Products</Typography></Box>
                    <Stack sx={{ flexDirection: { md: 'row' }, width: '100%', gap: 5 }}>
                        <Box flexGrow={1} display={'flex'} flexDirection={'column'} justifyContent={'center'} maxWidth={600}>
                            <Typography variant="h3" gutterBottom>
                                Protect Your Loan with Insurance
                            </Typography>
                            <Typography component='abbr' variant="h6">When life is unpredictable, Loan Insurance can provide the peace of mind you need. Whether you’re taking out a personal loan, mortgage, or car loan, loan insurance ensures that your payments are covered in the event of an unexpected situation, like illness, injury, or job loss.</Typography>
                        </Box>
                        <Box flexGrow={1}>
                            <CardMedia
                                component="img"
                                height='450'
                                width='450'
                                image="https://img.freepik.com/free-vector/family-benefit-abstract-concept-vector-illustration-family-tax-benefit-payment-per-child-help-with-raising-children-economic-support-insurance-agent-piggy-bank-money-abstract-metaphor_335657-3984.jpg"
                                alt="green iguana"
                            />
                        </Box>

                    </Stack>
                    <Stack sx={{ flexDirection: { md: 'row' }, width: '100%', gap: 5 }}>

                        <Box order={1}>
                            <CardMedia
                                component="img"
                                height='450'
                                width='450'
                                image="https://img.freepik.com/premium-vector/car-insurance-vector-concept-with-umbrella-protection_108061-1612.jpg"
                                alt="green iguana"
                            />
                        </Box>
                        <Box order={2} flexGrow={1} display={'flex'} flexDirection={'column'} justifyContent={'center'} maxWidth={600}>
                            <Typography variant="h4" gutterBottom>
                                Protect Your Vehicle with Comprehensive Insurance
                            </Typography>
                            <Typography component='abbr'>Your vehicle is more than just a mode of transportation—it's an important asset. Vehicle Insurance ensures that you’re financially covered in case of accidents, theft, or damage. Whether you have a car, motorcycle, or truck, comprehensive vehicle insurance gives you the peace of mind to drive without worry.</Typography>
                        </Box>

                    </Stack>
                    <Stack sx={{ flexDirection: { md: 'row' }, width: '100%', gap: 5 }}>
                        <Box flexGrow={1} display={'flex'} flexDirection={'column'} justifyContent={'center'} maxWidth={600}>
                            <Typography variant="h4" gutterBottom>
                                Secure Your Family's Future with Life Insurance
                            </Typography>
                            <Typography component='abbr'>Life is full of uncertainties, but Life Insurance offers a way to ensure that your loved ones are protected financially, no matter what happens. Whether you're looking to safeguard your family’s financial security or plan for the future, life insurance provides peace of mind that your obligations and family’s needs are taken care of.</Typography>
                        </Box>
                        <Box flexGrow={1}>
                            <CardMedia
                                component="img"
                                height='450'
                                width='450'
                                image="https://img.freepik.com/free-vector/character-family-holding-insurance-illustration_53876-40419.jpg"
                                alt="green iguana"
                            />
                        </Box>

                    </Stack>
                    <Stack sx={{ flexDirection: { md: 'row' }, width: '100%', gap: 5 }}>

                        <Box order={1}>
                            <CardMedia
                                component="img"
                                height='450'
                                width='450'
                                image="https://img.freepik.com/premium-vector/health-life-insurance-concept-doctor-patients-hospital-filling-health-life-insurance-policy-contract-flat-vector-modern-illustration_566886-10356.jpg"
                                alt="green iguana"
                            />

                        </Box>
                        <Slide direction="left" in={true} timeout={500}>
                            <Box order={2} flexGrow={1} display={'flex'} flexDirection={'column'} justifyContent={'center'} maxWidth={600}>

                                <Typography variant="h4" gutterBottom>
                                    Protect Your Health with Comprehensive Health Insurance
                                </Typography>

                                <Typography component='abbr'>Your health is your most valuable asset, and Health Insurance ensures you’re covered when you need it the most. From routine check-ups to emergency treatments, health insurance provides the financial support you need for medical expenses, giving you access to quality care without the worry of high costs.</Typography>

                            </Box>
                        </Slide>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%', mx: 'auto', mt: 4, maxHeight: 400 }}>
                        <Slider {...bannerSettings}>
                            <Box sx={{ position: 'relative' }}>
                                <Card elevation={0}>
                                    <CardMedia height={260} component={'img'} image="https://tekglide.com/wp-content/uploads/2024/03/Blog-01-02-scaled.webp" />
                                </Card>

                            </Box>
                            <Box sx={{ position: 'relative' }}>
                                <Card elevation={0}>
                                    <CardMedia height={260} component={'img'} image="https://img.freepik.com/free-vector/support-call-centre-composition-with-doodle-images-people-with-gadgets_1284-29966.jpg" />
                                </Card>
                            </Box>
                            <Box sx={{ position: 'relative' }}>
                                <Card elevation={0} >
                                    <CardMedia height={260} component={'img'} image="https://img.freepik.com/free-vector/people-walking-rain-street-colorful-flat-vector-illustration-mother-with-child-raincoat-walking-red-umbrella_74855-10701.jpg" />
                                </Card>
                            </Box>
                            <Box sx={{ position: 'relative' }}>
                                <Card elevation={0}>
                                    <CardMedia height={260} component={'img'} image="https://img.freepik.com/free-vector/people-walking-rain-street-colorful-flat-vector-illustration-mother-with-child-raincoat-walking-red-umbrella_74855-10701.jpg" />
                                </Card>
                            </Box>
                        </Slider>
                    </Box>
                </Grid>
                <Grid item xs={12}>

                    <Typography component='h1' textAlign='center' variant="h4">More than 25+ Insurance Providers</Typography>
                    <Typography textAlign='center' gutterBottom variant="subtitle1" color='text.secondary'>Providing You with the Best Insurance Solutions from a Diverse Network of Trusted Providers.</Typography>
                    <Stack flexWrap='wrap' direction='row' gap={4} justifyContent='space-evenly' mt={4}>
                        <ProviderLogo name="Reliance" grayScale={true} />
                    </Stack>
                </Grid>
            </Grid>
        </Container>
        {cookiePrompt && <CookieCard />}
    </Box >
}
export default Home;
