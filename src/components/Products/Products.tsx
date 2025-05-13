import loanLogo from "../../assets/icons/Loan.svg";
import healthLogo from "../../assets/icons/Health.svg";
import carLogo from "../../assets/icons/car.svg";
import travelLogo from "../../assets/icons/plane.svg";
import commercialLogo from "../../assets/icons/commercial.svg"
import bikeLogo from "../../assets/icons/Bike.svg";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { Avatar, Box, CardActionArea, CardContent, Chip, Container, Grid, Modal, Stack, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link as MuiLink } from "@mui/material"
import { Link } from "react-router-dom";
import Card from "../ui/Card/Card";
import { useState } from "react";
import StyledIconButton from "../ui/IconButton/IconButton";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const Products = () => {
    const [viewMore, setViewMore] = useState<boolean>(false)
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
    const toggleViewMore = () => {
        setViewMore((prev) => !prev);
    }
    const AllProducts = (): React.JSX.Element => {
        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down('md'));
        console.log('view more modal');
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            width: isMobile ? '90%' : '70%',
            borderRadius: theme.shape.borderRadius
        };
        return <Modal
            open={viewMore}

            aria-labelledby="modal-modal-products"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Toolbar>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        More Products
                    </Typography>
                    <Box flexGrow={1}></Box>
                    <StyledIconButton onClick={toggleViewMore}><CloseRoundedIcon /></StyledIconButton>

                </Toolbar>
                <CardContent>
                    <Tabs variant="standard" value={1}>
                        <Tab label="Personal Insurance" value={1} />
                        <Tab label="Business Insurance" value={2} />
                    </Tabs>
                    <Typography>Hellow</Typography>
                </CardContent>
            </Box>
        </Modal>
    }

    return <Container sx={{ mt: 3 }}>
        <Typography fontWeight={600} variant="h6" textAlign='center'>Our Products</Typography>
        <Grid container spacing={2} mt={1} flexGrow={1}>
            {
                products.map((nav: navProps, _: number) => {
                    return <Grid key={_} item xs={4} sm={3} md={3} lg={2}>
                        <Card>
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
                        </Card>
                    </Grid>
                })
            }
            <Grid item xs={12}>
                <Box mt={3} minWidth={'100%'} display={'flex'} justifyContent={'center'}>
                    <Chip clickable onClick={toggleViewMore} deleteIcon={<ArrowDropDownRoundedIcon />} variant="outlined" label="View all products" />
                </Box>
            </Grid>
            <AllProducts />
        </Grid>
    </Container>
}
export default Products;