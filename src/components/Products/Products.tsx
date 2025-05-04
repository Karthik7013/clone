import loanLogo from "../../assets/icons/Loan.svg";
import healthLogo from "../../assets/icons/Health.svg";
import carLogo from "../../assets/icons/car.svg";
import travelLogo from "../../assets/icons/plane.svg";
import commercialLogo from "../../assets/icons/commercial.svg"
import bikeLogo from "../../assets/icons/Bike.svg";
import { Avatar, Box, Card, CardActionArea, CardContent, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Link as MuiLink } from "@mui/material"
import { Link } from "react-router-dom";
const Products = () => {
    const theme = useTheme();
    type navProps = {
        imgUrl: string,
        name: string,
        path: string
    }
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
    return <Container>
        <Grid container spacing={2} mt={1} flexGrow={1}>


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
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </MuiLink>
                    </Grid>
                })
            }
        </Grid>
    </Container>
}
export default Products;