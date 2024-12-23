import React from "react";
import { Alert, Badge, Box, Button, Card, CardContent, CardMedia, Checkbox, Chip, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, FormControlLabel, FormGroup, Grid, LinearProgress, List, ListItem, Paper, Skeleton, Slide, Slider, Stack, TextField, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import { useState } from "react";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import MessageBox from "../../Framework/components/MessageBox";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store'
import { handleAddtoCompare, handleEmptyCompare } from "../../redux/slice/uiSlice";

const LoanQuotesPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const [viewDetails, setViewDetails] = useState(false)
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const compareProducts = useSelector((state: RootState) => state.ui.productsCompare);
    const scrollBarStyles = {
        overflow: 'auto', // Enable scrollbars
        '&::-webkit-scrollbar': {
            width: '0.7em', // Width of the scrollbar
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#F5F7F8', // Color of the track
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#87cbf5', // Color of the thumb
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#5AB2FF', // Color of the thumb on hover
        },
    }
    const scrollBarHidden = {
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    }
    const NavItems = (
        <Box sx={{ width: '240px' }}>
            <Toolbar>
                <Box width={'100%'} component={Stack} justifyContent={'space-between'} direction='row' alignItems='center'>
                    <Box component={Stack} direction='row' alignItems={'center'} gap={1}>
                        <TuneRoundedIcon fontSize="small" />
                        <Typography variant='subtitle1'>Sort</Typography>
                    </Box>
                    <Box>
                        <Chip clickable label="clear" size="small" color="default" />
                    </Box>



                </Box>
            </Toolbar>

            <Divider />
            <List>
                <ListItem>
                    <TextField size="small" label='Sum Insure' />
                </ListItem>
                <ListItem>
                    <Slider aria-label="sum-insure-ratio" step={10} marks />
                </ListItem>
                <ListItem>
                    <TextField size="small" />
                </ListItem>
            </List>
            <Toolbar>
                <Box component={Stack} gap={2} flexDirection='row' alignItems='center'>
                    <TuneRoundedIcon />
                    <Typography variant='subtitle1'>Filter by</Typography>
                </Box>
            </Toolbar>
            <Divider />
            <List>
                <ListItem>
                    <TextField />
                </ListItem>
                <ListItem>
                    <Button variant="contained" sx={{ width: '100%' }}>Apply</Button>
                </ListItem>

            </List>



        </Box>
    );

    const openViewDetails = () => {
        setViewDetails(true)
    }

    const closeViewDetails = () => {
        setViewDetails(false);
    }

    const handleCompare = (id: number) => {
        if (compareProducts.length <= 3) {
            dispatch(handleAddtoCompare(id))
        }
    }

    const cancel = () => dispatch(handleEmptyCompare());


    return (
        <Box>
            <Stack direction='row'>
                <Box sx={{ borderRight: '1px solid #0000001f' }}>
                    <Drawer
                        sx={{
                            '& .MuiDrawer-paper': {
                                borderRight: 'none'
                            },
                        }}
                        variant='temporary' onClose={() => setIsMobile(false)} open={isMobile}>
                        {NavItems}
                    </Drawer>
                    <Box sx={{ display: { xs: 'none', md: 'block' }, minHeight: 'calc(100dvh - 65px)', overflowY: 'scroll', ...scrollBarStyles }}>
                        {NavItems}
                    </Box>
                </Box>

                <Box flex={1} sx={{ height: 'calc(100dvh - 65px)', overflowY: 'scroll', ...scrollBarHidden }}>
                    <Toolbar sx={{ position: 'sticky', top: 0, left: 0, backgroundColor: 'background.default', zIndex: 99, }}>
                        <Typography variant="subtitle2">
                            Showing 10 Results
                        </Typography>


                        <Button
                            size='small'
                            variant='outlined'
                            startIcon={<FilterAltIcon fontSize='small' />}


                            aria-label="open drawer"

                            onClick={() => { setIsMobile((prev) => !prev) }}
                            sx={{ borderRadius: 999, fontSize: '0.5em', display: { md: 'none' } }}
                        >
                            <Typography variant='subtitle2'>Filter</Typography>
                        </Button>
                    </Toolbar>

                    <Grid container columns={18} spacing={2} px={4} sx={{ py: { xs: 1, md: 3 } }}>
                        <Grid item xs={18}>
                            <Grid container rowGap={3}>
                                {/* <MessageBox type="warning">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero eius ea veniam consectetur cumque non vero illo numquam? Earum quod aut corporis repellendus, error a quis commodi at sunt excepturi ipsum neque.
                                    </MessageBox>
                                    <MessageBox type="error">
                                        We’ve tried searching for insurance quotes based on your request, but unfortunately, we weren’t able to find any results at this time.
                                    </MessageBox>
                                    <MessageBox type="info">
                                        We’ve tried searching for insurance quotes based on your request, but unfortunately, we weren’t able to find any results at this time.
                                    </MessageBox>
                                    <MessageBox type="success">
                                        We’ve tried searching for insurance quotes based on your request, but unfortunately, we weren’t able to find any results at this time.
                                    </MessageBox> */}


                                {/* quote cards */}

                                <Grid container rowSpacing={2}>
                                    {[1, 2, 3, 4, 5].map((e: number) => (
                                        <Grid item xs={12} key={e}>
                                            <Card sx={{ borderRadius: '9px', padding: '6px' }}>
                                                <Box display={'flex'}>
                                                    <Box flex={1} sx={{ display: "flex", flexDirection: { xs: 'column', lg: 'row' }, rowGap: 2 }}>
                                                        <CardMedia
                                                            component="img"
                                                            sx={{ borderRadius: '0.4em', height: { xs: 60, md: 60 }, width: { xs: 100, md: 100 } }}
                                                            image={'https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png'}
                                                        />
                                                        <Box flex={1} display={'flex'} sx={{ justifyContent: { lg: 'center' } }}>
                                                            <Box sx={{ display: { xs: 'flex', lg: 'block' }, gap: 1 }}>
                                                                <Typography gutterBottom variant='body1' color={'text.secondary'}>IDV Covers</Typography>
                                                                <Typography variant='body2' color={'text.primary'}>
                                                                    ₹<b style={{ fontSize: '18px' }}>{50000}</b>
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box >
                                                        <Button sx={{ borderRadius: '0.4em' }} variant='contained' endIcon={<ArrowForwardRoundedIcon />}>
                                                            <Typography variant='body1'>
                                                                <Typography> ₹ 5000</Typography>
                                                            </Typography>
                                                        </Button>
                                                    </Box>
                                                </Box>
                                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                                    <FormGroup>
                                                        <FormControlLabel control={<Checkbox onChange={() => handleCompare(e)} size='small' />} label={<Typography variant="caption">Compare</Typography>} />
                                                    </FormGroup>
                                                    <Button size="small" onClick={openViewDetails}>
                                                        <Typography variant='caption' color={'text.secondary'}>View Details</Typography>
                                                    </Button>
                                                </Box>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                                {/* loading quote cards */}
                                {
                                    [1, 2, 3, 4].map((e: number) => {
                                        return <Grid container rowSpacing={2}>
                                            <Grid item xs={12}>
                                                <Card sx={{ borderRadius: '9px', padding: '10px' }}>
                                                    <Box display={'flex'}>
                                                        <Box flex={1} sx={{ display: "flex", flexDirection: { xs: 'column', lg: 'row' }, rowGap: 2 }}>

                                                            <Skeleton sx={{
                                                                height: { xs: 60, md: '100%' }, width: { xs: 100, md: 120 }
                                                            }} animation='wave' />
                                                            <Box flex={1} display={'flex'} sx={{ justifyContent: { lg: 'center' } }}>
                                                                <Box sx={{ display: { xs: 'flex', lg: 'block' }, gap: 1 }}>
                                                                    <Skeleton width={200} height={20} />
                                                                    <Skeleton width={200} height={20} />
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box >
                                                            <Skeleton width={100} height={50} />
                                                        </Box>
                                                    </Box>
                                                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                                        <Box >
                                                            <Skeleton width={18} height={30} />
                                                        </Box>
                                                        <Box>
                                                            <Skeleton width={100} height={16} />
                                                        </Box>
                                                    </Box>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    })
                                }
                                {/* view product details */}

                                <Dialog
                                    open={viewDetails}
                                    keepMounted
                                    // onClose={closeViewDetails}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            Let Google help apps determine location. This means sending anonymous
                                            location data to Google, even when no apps are running.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={closeViewDetails}>Disagree</Button>
                                        <Button onClick={closeViewDetails}>Agree</Button>
                                    </DialogActions>
                                </Dialog>

                                {/* <Link to="/loan/payment">payment</Link> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Stack width={300} rowGap={3} py={3} pr={3} sx={{ display: { xs: 'none', md: 'flex' }, maxHeight: 'calc(100dvh - 65px)', overflowY: 'scroll', ...scrollBarHidden }}>
                    {
                        [1, 2, 3].map((e: number) => {
                            return <Card>
                                <CardMedia component={'img'} image="https://img.freepik.com/free-vector/health-insurance-template-vector-blog-banner_53876-111243.jpg?size=626&ext=jpg&ga=GA1.1.1631789375.1722771379&semt=ais_hybrid" height={'100%'} />
                            </Card>
                        })
                    }
                </Stack>
            </Stack>

            {Boolean(compareProducts.length) && <Paper
                role="dialog"
                aria-modal="false"
                aria-label="Cookie banner"
                square
                variant="outlined"
                tabIndex={-1}
                sx={{
                    zIndex: 9999999,
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    m: 0,
                    p: 2,
                    borderWidth: 0,
                    borderTopWidth: 1,
                }}
            >
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent="space-between"
                        gap={2}
                    >
                        <Box
                            display={'flex'}
                            sx={{
                                flexShrink: 1,
                                gap: 2,
                                alignSelf: { xs: 'flex-start', sm: 'center' },
                            }}
                        >

                            {[1, 2, 3, 4].map((product) => {
                                return <Button sx={{ p: 0 }}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="50"
                                            image="https://economictimes.indiatimes.com/thumb/msid-83775383,width-1200,height-900,resizemode-4,imgsize-102884/12.jpg?from=mdr"
                                        />
                                    </Card>
                                </Button>

                            })}

                        </Box>
                        <Stack
                            gap={2}
                            direction={{
                                xs: 'row-reverse',
                                sm: 'row',
                            }}
                            sx={{
                                flexShrink: 0,
                                alignSelf: { xs: 'flex-end', sm: 'center' },
                            }}
                        >
                            <Button>Clear
                            </Button>
                            <Badge badgeContent={compareProducts.length + 1} color='primary'>
                                <Button variant="contained" startIcon={<CompareArrowsRoundedIcon />}>Compare
                                </Button>
                            </Badge>
                        </Stack>
                    </Stack>
                </Container>
            </Paper>}
        </Box >
    )
}

export default LoanQuotesPage