import React from "react";
import { Badge, Box, Button, Card, CardMedia, Checkbox, Container, Divider, Drawer, FormControlLabel, FormGroup, Grid, List, ListItem, Paper, Skeleton, Stack, TextField, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import { useState } from "react";

const LoanQuotesPage = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
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
                <Box component={Stack} gap={2} flexDirection='row' alignItems='center'>
                    <TuneRoundedIcon />
                    <Typography variant='subtitle1'>Sort & Filter</Typography></Box>
            </Toolbar>

            <Divider />
            <List>
                <ListItem>
                    <TextField />
                </ListItem>
                <ListItem>
                    <TextField />
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
                <ListItem disablePadding>
                    <TextField />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box>
            <Stack direction='row'>
                <Box sx={{ borderRight: '1px solid #0000001f' }}>
                    <Drawer variant='temporary' onClose={() => setIsMobile(false)} open={isMobile}>
                        {NavItems}
                    </Drawer>
                    <Box sx={{ display: { xs: 'none', md: 'block' }, minHeight: 'calc(100dvh - 65px)', overflowY: 'scroll', ...scrollBarStyles }}>
                        {NavItems}
                    </Box>
                </Box>

                <Box flex={1} sx={{ height: 'calc(100dvh - 65px)', overflowY: 'scroll', ...scrollBarHidden }}>

                    <Toolbar sx={{ justifyContent: 'space-between', display: { md: 'none' }, backgroundColor: '#edf7ff61', position: "sticky" }}>
                        <Typography variant='body2'>Showing 10 search results</Typography>
                        <Button
                            size='small'
                            variant='outlined'
                            startIcon={<FilterAltIcon fontSize='small' />}

                            aria-label="open drawer"

                            onClick={() => { setIsMobile((prev) => !prev) }}
                            sx={{ borderRadius: 999, fontSize: '0.5em' }}
                        >
                            <Typography variant='subtitle2'>Filter</Typography>
                        </Button>
                    </Toolbar>



                    <Container maxWidth='lg' sx={{ py: { xs: 1, md: 3 } }}>
                        <Grid container columns={18} spacing={2}>
                            <Grid item xs={18}>
                                <Grid container rowGap={3}>

                                    {/* quote cards */}


                                    {[1, 2, 3, 4].map((e: number) => (
                                        <Grid key={e} container rowSpacing={2}>
                                            <Grid item xs={12}>
                                                <Card sx={{ borderRadius: '9px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', padding: '10px' }}>
                                                    <Box display={'flex'}>
                                                        <Box flex={1} sx={{ display: "flex", flexDirection: { xs: 'column', lg: 'row' }, rowGap: 2 }}>
                                                            <CardMedia
                                                                component="img"
                                                                sx={{ borderRadius: '0.6em', height: { xs: 60, md: 80 }, width: { xs: 100, md: 120 } }}
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
                                                            <FormControlLabel control={<Checkbox size='small' />} label={<Typography variant="caption">Compare</Typography>} />
                                                        </FormGroup>
                                                        <Box>
                                                            <Typography variant='caption' color={'text.secondary'}>View Details</Typography>
                                                        </Box>
                                                    </Box>
                                                </Card>
                                            </Grid>
                                        </Grid>


                                    ))}

                                    <Link to="/loan/payment">payment</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Stack width={300} rowGap={3} py={3} pr={3} sx={{ display: { xs: 'none', md: 'flex' }, maxHeight: 'calc(100dvh - 65px)', overflowY: 'scroll', ...scrollBarHidden }}>
                    {[1, 2].map((e: number) => <Skeleton key={e} sx={{ borderRadius: '1em', minHeight: '120px' }} variant='rectangular' animation="pulse"></Skeleton>)}
                </Stack>
            </Stack>
            <Paper
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

                            {[1, 2, 3].map((product) => {
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
                            <Button >Clear
                            </Button>
                            <Badge badgeContent={3} color='primary'>

                                <Button variant="contained" startIcon={<CompareArrowsRoundedIcon />}>Compare
                                </Button>
                            </Badge>
                        </Stack>
                    </Stack>
                </Container>

            </Paper>
        </Box>
    )
}

export default LoanQuotesPage