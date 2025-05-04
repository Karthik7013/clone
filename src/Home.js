import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//============ MUI IMPORTS ==============>
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Container, Grid, keyframes, ListItem, ListItemIcon, ListItemText, Slide, Stack, styled, Typography, useTheme } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//============ SVG IMPORTS ==============>
import loanLogo from "./assets/navAssets/Loan.svg";
import healthLogo from "./assets/navAssets/Health.svg";
import carLogo from "./assets/navAssets/car.svg";
import travelLogo from "./assets/navAssets/plane.svg";
import commercialLogo from "./assets/navAssets/commercial.svg";
import bikeLogo from "./assets/navAssets/Bike.svg";
import giftBox from './assets/spark.svg';
import CookieCard from "./Framework/components/CookieCard";
import ProviderLogo from "./Framework/components/ProviderLogo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';
const Home = () => {
    const theme = useTheme();
    console.log('home renders');
    const cookiePrompt = useSelector((state) => state.ui.cookieConsent);
    // products navigations images url
    const products = [
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
    ];
    const rotate = keyframes `
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
    return _jsxs(Box, { children: [_jsx(Container, { maxWidth: 'lg', children: _jsxs(Grid, { container: true, spacing: 2, mt: 1, flexGrow: 1, children: [_jsx(Grid, { item: true, xs: 12, my: 2, children: _jsxs(Stack, { direction: 'row', justifyContent: 'space-between', children: [_jsxs(Box, { sx: { display: { xs: 'none', md: 'block', width: '100%' } }, children: [_jsx(Typography, { variant: "h1", children: "Lets Find Your" }), _jsx(Typography, { variant: "h1", fontWeight: 600, children: "Best Insurance Plan" }), _jsxs(Stack, { direction: 'row', mt: 2, maxWidth: 500, children: [_jsxs(ListItem, { disablePadding: true, children: [_jsx(ListItemIcon, { sx: { minWidth: 24 }, children: _jsx(CardMedia, { sx: { width: 16, height: 16 }, component: 'img', image: giftBox, alt: "" }) }), _jsx(ListItemText, { children: _jsx(Typography, { variant: "caption", children: "Quick, easy & hassle free" }) })] }), _jsxs(ListItem, { disablePadding: true, children: [_jsx(ListItemIcon, { sx: { minWidth: 24 }, children: _jsx(CardMedia, { sx: { width: 16, height: 16 }, component: 'img', image: giftBox, alt: "" }) }), _jsx(ListItemText, { children: _jsx(Typography, { variant: "caption", children: "80+ Insurer Partners" }) })] })] }), _jsxs(ListItem, { disablePadding: true, children: [_jsx(ListItemIcon, { sx: { minWidth: 24 }, children: _jsx(CardMedia, { sx: { width: 16, height: 16 }, component: 'img', image: giftBox, alt: "" }) }), _jsx(ListItemText, { children: _jsx(Typography, { variant: "caption", children: "3X Faster quotes" }) })] }), _jsxs(Stack, { direction: 'row', gap: 2, my: 2, children: [_jsx(Button, { variant: "contained", endIcon: _jsx(ShakeIcon, { children: _jsx(CallRoundedIcon, {}) }), children: "Get Started" }), _jsx(Button, { variant: "outlined", children: "Free Quotes" })] })] }), _jsx(Box, { children: _jsx(Box, { sx: { width: '100%', maxWidth: 300, mt: 4 }, children: _jsxs(Slider, { ...settings, children: [_jsx(Box, { sx: { position: 'relative' }, children: _jsx(Card, { elevation: 0, sx: { maxWidth: 300 }, children: _jsx(CardMedia, { component: 'img', image: "https://img.freepik.com/free-vector/business-insurance-template-blog-banner_53876-117981.jpg" }) }) }), _jsx(Box, { sx: { position: 'relative' }, children: _jsx(Card, { elevation: 0, sx: { maxWidth: 300 }, children: _jsx(CardMedia, { component: 'img', image: "https://img.freepik.com/free-vector/blog-banner-template-vector-life-insurance_53876-126524.jpg" }) }) }), _jsx(Box, { sx: { position: 'relative' }, children: _jsx(Card, { elevation: 0, sx: { maxWidth: 300 }, children: _jsx(CardMedia, { component: 'img', image: "https://img.freepik.com/free-vector/editable-template-vector-covid-19-travel-medical-insurance-presentation_53876-140961.jpg" }) }) }), _jsx(Box, { sx: { position: 'relative' }, children: _jsx(Card, { elevation: 0, sx: { maxWidth: 300 }, children: _jsx(CardMedia, { component: 'img', image: "https://img.freepik.com/free-vector/health-insurance-template-vector-blog-banner_53876-111243.jpg" }) }) })] }) }) })] }) }), products.map((nav, _) => {
                            return _jsx(Grid, { item: true, xs: 4, sm: 3, md: 3, lg: 2, children: _jsx(MuiLink, { component: Link, to: nav.path, children: _jsx(CardActionArea, { sx: { overflow: 'hidden' }, children: _jsx(CardContent, { component: Card, children: _jsxs(Stack, { alignItems: 'center', children: [_jsx(Avatar, { src: nav.imgUrl, sx: { width: "28px", height: "28px", objectFit: 'cover' }, variant: "square" }), _jsx(Box, { mb: 2 }), _jsx(Box, { justifyContent: 'center', width: '100%', bottom: 0, bgcolor: theme.palette.primary.light, component: Stack, direction: 'row', position: 'absolute', children: _jsx(Typography, { variant: "caption", children: nav.name }) }), _jsx(Box, { top: 5, right: 5, component: Stack, direction: 'row', position: 'absolute', children: _jsx(FiberNewRoundedIcon, { color: "warning" }) })] }) }) }) }) }, _);
                        }), _jsx(Grid, { item: true, xs: 12, children: _jsx(Box, { mt: 3, minWidth: '100%', display: 'flex', justifyContent: 'center', children: _jsx(Chip, { clickable: true, onDelete: () => { }, deleteIcon: _jsx(ArrowDropDownRoundedIcon, {}), variant: "outlined", label: "Explore more", size: "small" }) }) }), _jsxs(Grid, { item: true, xs: 12, my: 5, children: [_jsx(Box, { children: _jsx(Typography, { gutterBottom: true, variant: "h2", textAlign: 'center', fontWeight: 600, children: "Our Products" }) }), _jsxs(Stack, { sx: { flexDirection: { md: 'row' }, width: '100%', gap: 5 }, children: [_jsxs(Box, { flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 600, children: [_jsx(Typography, { variant: "h3", gutterBottom: true, children: "Protect Your Loan with Insurance" }), _jsx(Typography, { component: 'abbr', variant: "h6", children: "When life is unpredictable, Loan Insurance can provide the peace of mind you need. Whether you\u2019re taking out a personal loan, mortgage, or car loan, loan insurance ensures that your payments are covered in the event of an unexpected situation, like illness, injury, or job loss." })] }), _jsx(Box, { flexGrow: 1, children: _jsx(CardMedia, { component: "img", height: '450', width: '450', image: "https://img.freepik.com/free-vector/family-benefit-abstract-concept-vector-illustration-family-tax-benefit-payment-per-child-help-with-raising-children-economic-support-insurance-agent-piggy-bank-money-abstract-metaphor_335657-3984.jpg", alt: "green iguana" }) })] }), _jsxs(Stack, { sx: { flexDirection: { md: 'row' }, width: '100%', gap: 5 }, children: [_jsx(Box, { order: 1, children: _jsx(CardMedia, { component: "img", height: '450', width: '450', image: "https://img.freepik.com/premium-vector/car-insurance-vector-concept-with-umbrella-protection_108061-1612.jpg", alt: "green iguana" }) }), _jsxs(Box, { order: 2, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 600, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Protect Your Vehicle with Comprehensive Insurance" }), _jsx(Typography, { component: 'abbr', children: "Your vehicle is more than just a mode of transportation\u2014it's an important asset. Vehicle Insurance ensures that you\u2019re financially covered in case of accidents, theft, or damage. Whether you have a car, motorcycle, or truck, comprehensive vehicle insurance gives you the peace of mind to drive without worry." })] })] }), _jsxs(Stack, { sx: { flexDirection: { md: 'row' }, width: '100%', gap: 5 }, children: [_jsxs(Box, { flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 600, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Secure Your Family's Future with Life Insurance" }), _jsx(Typography, { component: 'abbr', children: "Life is full of uncertainties, but Life Insurance offers a way to ensure that your loved ones are protected financially, no matter what happens. Whether you're looking to safeguard your family\u2019s financial security or plan for the future, life insurance provides peace of mind that your obligations and family\u2019s needs are taken care of." })] }), _jsx(Box, { flexGrow: 1, children: _jsx(CardMedia, { component: "img", height: '450', width: '450', image: "https://img.freepik.com/free-vector/character-family-holding-insurance-illustration_53876-40419.jpg", alt: "green iguana" }) })] }), _jsxs(Stack, { sx: { flexDirection: { md: 'row' }, width: '100%', gap: 5 }, children: [_jsx(Box, { order: 1, children: _jsx(CardMedia, { component: "img", height: '450', width: '450', image: "https://img.freepik.com/premium-vector/health-life-insurance-concept-doctor-patients-hospital-filling-health-life-insurance-policy-contract-flat-vector-modern-illustration_566886-10356.jpg", alt: "green iguana" }) }), _jsx(Slide, { direction: "left", in: true, timeout: 500, children: _jsxs(Box, { order: 2, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 600, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Protect Your Health with Comprehensive Health Insurance" }), _jsx(Typography, { component: 'abbr', children: "Your health is your most valuable asset, and Health Insurance ensures you\u2019re covered when you need it the most. From routine check-ups to emergency treatments, health insurance provides the financial support you need for medical expenses, giving you access to quality care without the worry of high costs." })] }) })] })] }), _jsx(Grid, { item: true, xs: 12, children: _jsx(Box, { sx: { width: '100%', mx: 'auto', mt: 4, maxHeight: 400 }, children: _jsxs(Slider, { ...bannerSettings, children: [_jsx(Box, { sx: { position: 'relative' }, children: _jsx(Card, { elevation: 0, children: _jsx(CardMedia, { height: 260, component: 'img', image: "https://tekglide.com/wp-content/uploads/2024/03/Blog-01-02-scaled.webp" }) }) }), _jsx(Box, { sx: { position: 'relative' }, children: _jsx(Card, { elevation: 0, children: _jsx(CardMedia, { height: 260, component: 'img', image: "https://img.freepik.com/free-vector/support-call-centre-composition-with-doodle-images-people-with-gadgets_1284-29966.jpg" }) }) }), _jsx(Box, { sx: { position: 'relative' }, children: _jsx(Card, { elevation: 0, children: _jsx(CardMedia, { height: 260, component: 'img', image: "https://img.freepik.com/free-vector/people-walking-rain-street-colorful-flat-vector-illustration-mother-with-child-raincoat-walking-red-umbrella_74855-10701.jpg" }) }) }), _jsx(Box, { sx: { position: 'relative' }, children: _jsx(Card, { elevation: 0, children: _jsx(CardMedia, { height: 260, component: 'img', image: "https://img.freepik.com/free-vector/people-walking-rain-street-colorful-flat-vector-illustration-mother-with-child-raincoat-walking-red-umbrella_74855-10701.jpg" }) }) })] }) }) }), _jsxs(Grid, { item: true, xs: 12, children: [_jsx(Typography, { component: 'h1', textAlign: 'center', variant: "h4", children: "More than 25+ Insurance Providers" }), _jsx(Typography, { textAlign: 'center', gutterBottom: true, variant: "subtitle1", color: 'text.secondary', children: "Providing You with the Best Insurance Solutions from a Diverse Network of Trusted Providers." }), _jsx(Stack, { flexWrap: 'wrap', direction: 'row', gap: 4, justifyContent: 'space-evenly', mt: 4, children: _jsx(ProviderLogo, { name: "Reliance", grayScale: true }) })] })] }) }), cookiePrompt && _jsx(CookieCard, {})] });
};
export default Home;
