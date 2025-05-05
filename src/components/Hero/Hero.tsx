import { Box, CardMedia, Container, Grid, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Button from "../ui/Button/Button";
import giftBox from '../../assets/icons/spark.svg'
import Carousel from "../Carousel/Carousel";
import CarouselItem from "../Carousel/CarouselItem";


const Hero = () => {
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
    const banners: { link: string, src: string }[] = [
        { link: "#", src: "https://img.freepik.com/free-vector/business-insurance-template-blog-banner_53876-117981.jpg" },
        { link: "#", src: "https://img.freepik.com/free-vector/blog-banner-template-vector-life-insurance_53876-126524.jpg" },
        { link: "#", src: "https://img.freepik.com/free-vector/editable-template-vector-covid-19-travel-medical-insurance-presentation_53876-140961.jpg" },
        { link: "#", src: "https://img.freepik.com/free-vector/health-insurance-template-vector-blog-banner_53876-111243.jpg" }
    ];


    return <Container maxWidth='lg'>
        <Grid container spacing={2} mt={1} flexGrow={1}>
            <Grid item xs={12}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Box sx={{ display: { xs: 'none', md: 'block', width: '100%' } }}>
                        <Typography variant="h4">Lets Find Your</Typography>
                        <Typography variant="h4" fontWeight={600}>Best Insurance Plan</Typography>
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
                            <Button variant="contained">Get Started</Button>
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

                    <Box sx={{ flexGrow: 1, width: '100%', maxWidth: { md: 300 }, mt: { md: 4 }, mx: 'auto' }}>
                        <Carousel {...settings}>
                            {
                                banners.map((item, i) => <CarouselItem key={i} src={item.src} link={item.link} />)
                            }
                        </Carousel>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    </Container>
}
export default Hero;