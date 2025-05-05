import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type sliderProps = {
    infinite: boolean, // Infinite scrolling
    speed: number, // Transition speed
    slidesToShow: number, // Number of slides to show at a time
    slidesToScroll: number, // Number of slides to scroll at a time
    autoplay: boolean, // Auto play
    autoplaySpeed: number, // Time before the next slide
    arrows: boolean, // Disable next and previous arrows
    dots: boolean,
    children: React.ReactNode
}
const Carousel: React.FC<sliderProps> = (props: sliderProps): React.JSX.Element => {
    // const settings = {
    //     infinite: true, // Infinite scrolling
    //     speed: 500, // Transition speed
    //     slidesToShow: 1, // Number of slides to show at a time
    //     slidesToScroll: 1, // Number of slides to scroll at a time
    //     autoplay: true, // Auto play
    //     autoplaySpeed: 2500, // Time before the next slide
    //     arrows: false, // Disable next and previous arrows
    //     dots: true
    // };

    return <Slider {...props}>
        {props.children}
    </Slider>
}

export default Carousel;