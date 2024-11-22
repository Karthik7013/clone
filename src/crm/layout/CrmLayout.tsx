import { alpha, AppBar, Avatar, Box, CardContent, Chip, Divider, Drawer, IconButton, LinearProgress, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Skeleton, Stack, styled, Toolbar, Tooltip, Typography } from "@mui/material"
import React, { Suspense, useEffect } from "react";
import { Logout, NotesRounded } from '@mui/icons-material';
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootProps } from "../../types/RootProps";
import { toggleTheme } from "../../redux/slice/uiSlice";
import { getCustomerProfile, logoutCustomer } from "../../redux/slice/authSlice";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
const drawerWidth = 240;
import { AppDispatch } from "../../redux/store";


type crmLayoutPropType = {
    sideBar: React.ReactNode
}
const CrmLayout = (crmLayoutProps: crmLayoutPropType) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch: AppDispatch = useDispatch()
    let profile = useSelector((state: RootProps) => state.auth.authData);
    const dark = useSelector((state: RootProps) => state.ui.dark);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerClose = () => {
        setMobileOpen(false);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOnclick = () => dispatch(logoutCustomer({})) // logout 
    const handleTheme = () => dispatch(toggleTheme()); //toggle theme;

    useEffect(() => {
        dispatch(getCustomerProfile({}));
    }, [dispatch]);

    const StyledCardContent = styled(CardContent)(({ theme }) => ({
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius * 2,
        flexGrow: 1,
        height: 'calc( 100dvh - 65px)',
        border: `1px solid ${alpha(theme.palette.divider, 0.05)}`,
        backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.05) : alpha(theme.palette.primary.main, 0.02),

        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: '0.7em',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.dark,
            borderRadius: theme.shape.borderRadius / 2,
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.primary.light,
            borderRadius: theme.shape.borderRadius / 2
        },
    }));

    return <Box>
        <AppBar
            sx={{
                position: 'static',
                background: 'none',
                color: 'inherit',
                boxShadow: 'none',
            }}
        >
            <Toolbar>
                <ListItem component={Link} to="/" disablePadding sx={{ width: drawerWidth - 10, display: { xs: 'none', md: 'flex' } }}>
                    <ListItemIcon>
                        <Avatar sx={{ mr: 1, width: 38, height: 38 }} src={'/brand.ico'} />
                    </ListItemIcon>
                    <ListItemText primary={
                        <Typography color="text.primary">Namelix</Typography>} />
                </ListItem>
                <IconButton
                    disableTouchRipple
                    aria-label="open drawer"
                    edge="start"
                    // onClick={handleDrawerToggle}
                    sx={{ mr: 2, borderRadius: '8px' }}
                >
                    <NotesRounded />
                </IconButton>

                {
                    profile ? <>
                        <Typography variant="body1" color='text.secondary'>
                            Hellow {profile.firstname} !
                        </Typography>
                    </> : <>
                        <Skeleton width={120} height={40}></Skeleton>
                    </>
                }
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} />

                <Stack direction="row" alignItems='center' gap={2}>
                    <Chip color="primary" size="small" icon={<LocationOnRoundedIcon sx={{ color: 'inherit' }} />} label={profile?.city} />
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
                                >
                                    <Avatar
                                        src="https://avatar.iran.liara.run/public"
                                        sx={{ width: 36, height: 36 }}
                                    >
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
                            variant="menu"
                            transformOrigin={{ horizontal: 'right', vertical: 'center' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >

                            <Divider />
                            <MenuItem onClick={handleOnclick}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                <Typography>Logout</Typography>
                            </MenuItem>
                        </Menu>
                    }
                </Stack>
            </Toolbar>
        </AppBar>
        <Stack direction='row'>
            <Drawer
                open={mobileOpen}
                variant="temporary"
                onClose={handleDrawerClose}
                sx={{
                    width: drawerWidth,
                }}
            >
                {crmLayoutProps.sideBar}
            </Drawer>
            <Box minWidth={drawerWidth} maxWidth={drawerWidth} sx={{ display: { xs: 'none', md: 'block' }, maxHeight: 'calc(100dvh - 65px)', overflowY: 'auto' }}>
                {crmLayoutProps.sideBar}
            </Box>
            <StyledCardContent>
                <Suspense fallback={<LinearProgress />}>
                    <Outlet />
                </Suspense>
            </StyledCardContent>
        </Stack>
    </Box>
}

export default React.memo(CrmLayout);