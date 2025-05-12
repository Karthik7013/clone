import { Box, Container, Grid } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import CarouselItem from "../Carousel/CarouselItem";

const Partners = () => {
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
        { link: "#", src: "https://tekglide.com/wp-content/uploads/2024/03/Blog-01-02-scaled.webp" },
        { link: "#", src: "https://img.freepik.com/free-vector/support-call-centre-composition-with-doodle-images-people-with-gadgets_1284-29966.jpg" },
        { link: "#", src: "https://img.freepik.com/free-vector/people-walking-rain-street-colorful-flat-vector-illustration-mother-with-child-raincoat-walking-red-umbrella_74855-10701.jpg" },
        { link: "#", src: "https://img.freepik.com/free-vector/people-walking-rain-street-colorful-flat-vector-illustration-mother-with-child-raincoat-walking-red-umbrella_74855-10701.jpg" }
    ];
    return <Container>
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ width: '100%', mx: 'auto', mt: 4, maxHeight: 400 }}>
                    <Carousel {...settings}>
                        {
                            banners.map((item, i) => <CarouselItem key={i} src={item.src} link={item.link} />)
                        }
                    </Carousel>
                </Box>
            </Grid>
        </Grid>
    </Container>
}

export default Partners;