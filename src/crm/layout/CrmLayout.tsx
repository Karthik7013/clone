import { alpha, AppBar, Autocomplete, Avatar, Badge, Box, Button, CardContent, Chip, Divider, Drawer, IconButton, InputAdornment, LinearProgress, ListItem, ListItemIcon, ListItemText, Popover, Skeleton, Stack, styled, TextField, Toolbar, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material"
import React, { Suspense, useCallback, useEffect } from "react";
import { NotesRounded } from '@mui/icons-material';
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleIsDesktop, handleIsMobile, toggleTheme } from "../../redux/slice/uiSlice";
import { getAgentProfile, getCustomerProfile, getEmployeeProfile, logout } from "../../redux/slice/authSlice";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import SearchIcon from '@mui/icons-material/Search';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const drawerWidth = 260;
import { AppDispatch, RootState } from "../../redux/store";
import CustomScrollbarBoxComponent from "../../Framework/components/ScrollComponent";
import CustomScrollbarBox from "../../Framework/components/ScrollComponent";
import { Helmet } from 'react-helmet';
import Notification from "../../Framework/components/Notification";
import LoadingModal from "../../Framework/components/LoadingModal";


const top100Films = [
    {
        "label": "The Shawshank Redemption",
        "year": 1994
    },
    {
        "label": "The Godfather",
        "year": 1972
    },
    {
        "label": "The Godfather: Part II",
        "year": 1974
    },
    {
        "label": "The Dark Knight",
        "year": 2008
    },
    {
        "label": "12 Angry Men",
        "year": 1957
    },
    {
        "label": "Schindler's List",
        "year": 1993
    },
    {
        "label": "Pulp Fiction",
        "year": 1994
    },
    {
        "label": "The Lord of the Rings: The Return of the King",
        "year": 2003
    },
    {
        "label": "The Good, the Bad and the Ugly",
        "year": 1966
    },
    {
        "label": "Fight Club",
        "year": 1999
    },
    {
        "label": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 2001
    },
    {
        "label": "Star Wars: Episode V - The Empire Strikes Back",
        "year": 1980
    },
    {
        "label": "Forrest Gump",
        "year": 1994
    },
    {
        "label": "Inception",
        "year": 2010
    },
    {
        "label": "The Lord of the Rings: The Two Towers",
        "year": 2002
    },
    {
        "label": "One Flew Over the Cuckoo's Nest",
        "year": 1975
    },
    {
        "label": "Goodfellas",
        "year": 1990
    },
    {
        "label": "The Matrix",
        "year": 1999
    },
    {
        "label": "Seven Samurai",
        "year": 1954
    },
    {
        "label": "Star Wars: Episode IV - A New Hope",
        "year": 1977
    },
    {
        "label": "City of God",
        "year": 2002
    },
    {
        "label": "Se7en",
        "year": 1995
    },
    {
        "label": "The Silence of the Lambs",
        "year": 1991
    },
    {
        "label": "It's a Wonderful Life",
        "year": 1946
    },
    {
        "label": "Life Is Beautiful",
        "year": 1997
    },
    {
        "label": "The Usual Suspects",
        "year": 1995
    },
    {
        "label": "Léon: The Professional",
        "year": 1994
    },
    {
        "label": "Spirited Away",
        "year": 2001
    },
    {
        "label": "Saving Private Ryan",
        "year": 1998
    },
    {
        "label": "Once Upon a Time in the West",
        "year": 1968
    },
    {
        "label": "American History X",
        "year": 1998
    },
    {
        "label": "Interstellar",
        "year": 2014
    },
    {
        "label": "Casablanca",
        "year": 1942
    },
    {
        "label": "City Lights",
        "year": 1931
    },
    {
        "label": "Psycho",
        "year": 1960
    },
    {
        "label": "The Green Mile",
        "year": 1999
    },
    {
        "label": "The Intouchables",
        "year": 2011
    },
    {
        "label": "Modern Times",
        "year": 1936
    },
    {
        "label": "Raiders of the Lost Ark",
        "year": 1981
    },
    {
        "label": "Rear Window",
        "year": 1954
    },
    {
        "label": "The Pianist",
        "year": 2002
    },
    {
        "label": "The Departed",
        "year": 2006
    },
    {
        "label": "Terminator 2: Judgment Day",
        "year": 1991
    },
    {
        "label": "Back to the Future",
        "year": 1985
    },
    {
        "label": "Whiplash",
        "year": 2014
    },
    {
        "label": "Gladiator",
        "year": 2000
    },
    {
        "label": "Memento",
        "year": 2000
    },
    {
        "label": "The Prestige",
        "year": 2006
    },
    {
        "label": "The Lion King",
        "year": 1994
    },
    {
        "label": "Apocalypse Now",
        "year": 1979
    },
    {
        "label": "Alien",
        "year": 1979
    },
    {
        "label": "Sunset Boulevard",
        "year": 1950
    },
    {
        "label": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "year": 1964
    },
    {
        "label": "The Great Dictator",
        "year": 1940
    },
    {
        "label": "Cinema Paradiso",
        "year": 1988
    },
    {
        "label": "The Lives of Others",
        "year": 2006
    },
    {
        "label": "Grave of the Fireflies",
        "year": 1988
    },
    {
        "label": "Paths of Glory",
        "year": 1957
    },
    {
        "label": "Django Unchained",
        "year": 2012
    },
    {
        "label": "The Shining",
        "year": 1980
    },
    {
        "label": "WALL·E",
        "year": 2008
    },
    {
        "label": "American Beauty",
        "year": 1999
    },
    {
        "label": "The Dark Knight Rises",
        "year": 2012
    },
    {
        "label": "Princess Mononoke",
        "year": 1997
    },
    {
        "label": "Aliens",
        "year": 1986
    },
    {
        "label": "Oldboy",
        "year": 2003
    },
    {
        "label": "Once Upon a Time in America",
        "year": 1984
    },
    {
        "label": "Witness for the Prosecution",
        "year": 1957
    },
    {
        "label": "Das Boot",
        "year": 1981
    },
    {
        "label": "Citizen Kane",
        "year": 1941
    },
    {
        "label": "North by Northwest",
        "year": 1959
    },
    {
        "label": "Vertigo",
        "year": 1958
    },
    {
        "label": "Star Wars: Episode VI - Return of the Jedi",
        "year": 1983
    },
    {
        "label": "Reservoir Dogs",
        "year": 1992
    },
    {
        "label": "Braveheart",
        "year": 1995
    },
    {
        "label": "M",
        "year": 1931
    },
    {
        "label": "Requiem for a Dream",
        "year": 2000
    },
    {
        "label": "Amélie",
        "year": 2001
    },
    {
        "label": "A Clockwork Orange",
        "year": 1971
    },
    {
        "label": "Like Stars on Earth",
        "year": 2007
    },
    {
        "label": "Taxi Driver",
        "year": 1976
    },
    {
        "label": "Lawrence of Arabia",
        "year": 1962
    },
    {
        "label": "Double Indemnity",
        "year": 1944
    },
    {
        "label": "Eternal Sunshine of the Spotless Mind",
        "year": 2004
    },
    {
        "label": "Amadeus",
        "year": 1984
    },
    {
        "label": "To Kill a Mockingbird",
        "year": 1962
    },
    {
        "label": "Toy Story 3",
        "year": 2010
    },
    {
        "label": "Logan",
        "year": 2017
    },
    {
        "label": "Full Metal Jacket",
        "year": 1987
    },
    {
        "label": "Dangal",
        "year": 2016
    },
    {
        "label": "The Sting",
        "year": 1973
    },
    {
        "label": "2001: A Space Odyssey",
        "year": 1968
    },
    {
        "label": "Singin' in the Rain",
        "year": 1952
    },
    {
        "label": "Toy Story",
        "year": 1995
    },
    {
        "label": "Bicycle Thieves",
        "year": 1948
    },
    {
        "label": "The Kid",
        "year": 1921
    },
    {
        "label": "Inglourious Basterds",
        "year": 2009
    },
    {
        "label": "Snatch",
        "year": 2000
    },
    {
        "label": "3 Idiots",
        "year": 2009
    },
    {
        "label": "Monty Python and the Holy Grail",
        "year": 1975
    }
]

type crmLayoutPropType = {
    sideBar: React.ReactNode
}
const CrmLayout = (crmLayoutProps: crmLayoutPropType) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch: AppDispatch = useDispatch();
    const profile = useSelector((state: RootState) => state.auth.authData);
    // console.log(profile, 'profilexxxx')
    const dark = useSelector((state: RootState) => state.ui.dark);
    const mobileOpen: boolean = useSelector((state: RootState) => state.ui.isMobile);
    const role = useSelector((state: RootState) => state.auth.role);
    const loading = useSelector((state: RootState) => state.auth.loading);
    const desktopOpen: boolean = useSelector((state: RootState) => state.ui.isDesktop);
    const handleDrawerClose = useCallback(() => {
        dispatch(handleIsMobile())
    }, [dispatch]);

    const handleDrawerToggle = useCallback(() => {
        dispatch(handleIsMobile())
    }, [dispatch]);

    const handleOnclick = useCallback(() => dispatch(logout({})), [dispatch]);
    const handleTheme = useCallback(() => dispatch(toggleTheme()), [dispatch]);
    const handleToggleDrawer = () => dispatch(handleIsDesktop())

    useEffect(() => {
        switch (role) {
            case 'customer':
                dispatch(getCustomerProfile({}));
                break;
            case 'agent':
                dispatch(getAgentProfile({}));
                break;
            case 'employee':
                dispatch(getEmployeeProfile({}));
                break;
            default:
                break;
        }
    }, [role]);

    const StyledCardContent = styled(CardContent)(({ theme }) => ({
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        flexGrow: 1,
        height: 'calc( 100dvh - 65px)',
        border: `1px solid ${alpha(theme.palette.divider, 0.05)}`,
        backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.05) : alpha(theme.palette.primary.main, 0.02),
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: 12,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.light,
            borderRadius: 4,
            border: `1px solid ${theme.palette.primary.light}`,
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme.palette.primary.main, // Darken thumb on hover using theme
            border: `2px solid ${theme.palette.primary.main}`
        },
        '&::-webkit-scrollbar-track': {
            borderRadius: 4,
            backgroundColor: theme.palette.action.hover, // Track color from theme
        }
    }));



    return <Box>
        {loading && <LoadingModal />}
        <Helmet>
            <title>NameLix Dashboard | </title>
            <meta name="description" content="This is an awesome page using react-helmet!" />
        </Helmet>
        <AppBar
            sx={{
                position: 'static',
                background: 'none',
                color: 'inherit',
                boxShadow: 'none',
            }}
        >
            <Toolbar>
                <ListItem component={Link} to="/" disablePadding sx={{ width: drawerWidth - 80, display: { xs: 'none', md: 'flex' } }}>
                    <ListItemIcon>
                        <Avatar sx={{ mr: 1, width: 38, height: 38 }} src={'/brand.ico'} />
                    </ListItemIcon>
                    <ListItemText primary={
                        <Typography color="text.primary">Namelix</Typography>} />
                </ListItem>
                {isMobile && <IconButton
                    disableTouchRipple
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, borderRadius: '8px' }}
                >
                    <NotesRounded />
                </IconButton>}
                {!isMobile && <IconButton
                    disableTouchRipple
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleToggleDrawer}
                    sx={{ mr: 2, borderRadius: '8px' }}
                >
                    <NotesRounded />
                </IconButton>}

                {
                    profile ? <>
                        <Typography variant="h6">
                            Hellow {profile.firstname} !
                        </Typography>
                    </> : <>
                        <Skeleton width={120} height={40}></Skeleton>
                    </>
                }
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Autocomplete
                        fullWidth
                        disablePortal
                        options={top100Films}
                        size="small"
                        sx={{ maxWidth: 400, display: { lg: 'block', xs: 'none' } }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Search"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ ml: 0.5, mt: 0.2 }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                </Box>

                <Stack direction="row" gap={2} alignItems='center'>
                    <Chip sx={{ display: { xs: 'none', md: 'flex' } }} color="primary" size="small" icon={<LocationOnRoundedIcon fontSize="inherit" />} label={profile?.city} />
                    <Stack direction={'row'} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Tooltip title={dark ? "light" : "dark"}>
                            <IconButton color="default" sx={{ mr: 2 }} onClick={handleTheme}>{dark ? <LightModeIcon /> : < NightlightRoundIcon />}</IconButton>
                        </Tooltip>
                        <Notification />
                        <Button size="small" color="error" endIcon={<LogoutRoundedIcon fontSize="inherit" />} variant="outlined" onClick={handleOnclick}>Logout</Button>

                    </Stack>
                    {
                        profile ?
                            <Tooltip
                                sx={{ maxWidth: '100%' }}
                                title="check"
                            >
                                <IconButton

                                    size="small"
                                    sx={{ ml: 2 }}
                                >
                                    <Avatar
                                        component={Link}
                                        to="/"
                                        src="https://avatar.iran.liara.run/public"
                                        sx={{ width: 36, height: 36 }}
                                    >
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                            :
                            <Skeleton sx={{ borderRadius: 999 }} variant="circular" width={42} height={42} />

                    }
                </Stack>
            </Toolbar>
        </AppBar>
        <Stack direction='row'>
            <Drawer
                open={mobileOpen}
                variant="temporary"
                onClose={handleDrawerClose}
            >
                {crmLayoutProps.sideBar}
            </Drawer>
            <CustomScrollbarBox sx={{ display: { xs: 'none', md: 'block', minWidth: 'fit-content' }, maxHeight: 'calc(100dvh - 65px)', overflowY: 'auto' }}>
                {crmLayoutProps.sideBar}
            </CustomScrollbarBox>

            <StyledCardContent>
                <Suspense fallback={<LinearProgress />}>
                    <Outlet />
                    <Box my={2}>
                        <Divider />
                    </Box>
                    <Typography>Looking for support ? <Link to="/support">Ask AI ?</Link></Typography>
                </Suspense>
            </StyledCardContent>
        </Stack>
    </Box>
}

export default React.memo(CrmLayout);