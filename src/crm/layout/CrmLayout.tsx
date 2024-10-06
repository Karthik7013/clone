import { alpha, AppBar, Avatar, Badge, Box, Breadcrumbs, Card, CardContent, Chip, Divider, Drawer, Icon, IconButton, InputAdornment, LinearProgress, ListItemIcon, Menu, MenuItem, Skeleton, Stack, styled, Switch, TextField, Toolbar, Tooltip, Typography, useTheme } from "@mui/material"
import React, { Suspense, useEffect } from "react";
import { Logout, NotesRounded } from '@mui/icons-material';
import SideBar from "../common/SideDrawer";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootProps } from "../../types/RootProps";
import { toggleTheme } from "../../redux/slice/uiSlice";
import { getProfile, handleLogout } from "../../redux/slice/authSlice";
import PageNotFound from "../../Framework/components/PageNotFound";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
// import theme from "../../theme/theme";
const drawerWidth = 240;
import { AppDispatch } from "../../redux/store";
const CrmLayout = () => {
    const theme = useTheme()
    const location = useLocation();
    const links = location.pathname.split('/').slice(2);
    const dispatch: AppDispatch = useDispatch()
    let profile = useSelector((state: RootProps) => state.auth.profile);
    const dark = useSelector((state: RootProps) => state.ui.dark);

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOnclick = () => dispatch(handleLogout()) // logout 
    const handleTheme = () => dispatch(toggleTheme()); //toggle theme;
    const userLocation = useSelector((state: RootProps) => state.auth.profile?.location);


    useEffect(() => {
        dispatch(getProfile({}));
    }, [dispatch]);

    const StyledCardContent = styled(CardContent)(({ theme }) => ({
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius * 2,
        overflowY: 'auto',
        height: 'calc( 100dvh - 65px)',
        // width: 'calc(100% - 65px)',
        backgroundColor: alpha(theme.palette.divider, 0.05)
    }));


    return (
        <Box sx={{}}>
            <Box sx={{ display: 'flex' }}>
                <AppBar
                    sx={{
                        background: 'none',
                        color: 'inherit',
                        boxShadow: 'none',
                        width: { md: `calc(100% - ${drawerWidth}px)` },
                        ml: { md: `${drawerWidth}px` }
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <NotesRounded />
                        </IconButton>

                        {
                            profile ? <>
                                <Typography variant="h6" color='text.secondary'>
                                    Hellow {profile.firstname} !
                                </Typography>
                            </> : <>
                                <Skeleton width={120} height={40}></Skeleton>
                            </>
                        }
                        <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} />

                        <Stack direction="row" alignItems='center' gap={2}>
                            <Chip color="primary" size="small" icon={<LocationOnRoundedIcon sx={{ color: 'inherit' }} />} label="Banglore" />


                            <Stack direction={'row'} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Tooltip title={dark ? "light" : "dark"}>
                                    <IconButton color="default" sx={{ mr: 2 }} onClick={handleTheme}>{dark ? <LightModeIcon /> : < NightlightRoundIcon />}</IconButton>
                                </Tooltip>
                            </Stack>
                            {
                                profile ? <>
                                    <Tooltip
                                        sx={{ maxWidth: '100%' }}
                                        title=""
                                    >
                                        <IconButton
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ ml: 2 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                        >
                                            <Avatar
                                                src={'https://img.freepik.com/free-photo/3d-illustration-young-business-man-with-funny-expression-his-face_1142-55156.jpg'}
                                                sx={{ width: 38, height: 38 }}
                                            >
                                                {profile.firstname[0]}
                                            </Avatar>

                                        </IconButton>
                                    </Tooltip>
                                </> : <>
                                    <Skeleton sx={{ borderRadius: 999 }} variant="circular" width={42} height={42}></Skeleton>
                                </>
                            }
                            {
                                profile &&
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    variant="selectedMenu"
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    {
                                        profile.menuProps.map((menuItems, key) => <MenuItem onClick={handleClose} key={key}>
                                            <ListItemIcon>
                                                <Icon fontSize="small">{menuItems.icon}</Icon>
                                            </ListItemIcon>
                                            <Typography component='a' href={menuItems.path}>{menuItems.title}</Typography>
                                        </MenuItem>)
                                    }
                                    <Divider />
                                    <MenuItem onClick={handleOnclick}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        <Typography component='a' href="/">Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            }
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth
                            },
                        }}
                    >
                        <SideBar items={profile?.sideProps} />
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 'none' },
                        }}
                        open
                    >
                        <SideBar items={profile?.sideProps} />
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <StyledCardContent>
                        <Suspense fallback={<LinearProgress />}>
                            <Outlet />
                        </Suspense>
                    </StyledCardContent>

                </Box>
            </Box>
        </Box>
    )
}

export default CrmLayout