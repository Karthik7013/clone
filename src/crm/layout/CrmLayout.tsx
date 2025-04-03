import { alpha, AppBar, Autocomplete, Avatar, Badge, Box, Button, Card, CardContent, Chip, Collapse, Divider, Drawer, IconButton, InputAdornment, LinearProgress, ListItem, ListItemIcon, ListItemText, Popover, Skeleton, Stack, styled, TextField, Toolbar, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material"
import React, { Suspense, useCallback, useEffect } from "react";
import { NotesRounded } from '@mui/icons-material';
import { Link, Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleIsDesktop, handleIsMobile, toggleTheme } from "../../redux/slice/uiSlice";
import { getAgentProfile, getCustomerProfile, getEmployeeProfile, logout } from "../../redux/slice/authSlice";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const drawerWidth = 260;
import { AppDispatch, RootState } from "../../redux/store";
import { Helmet } from 'react-helmet';
import Notification from "../../Framework/components/Notification";
import LoadingModal from "../../Framework/components/LoadingModal";



type crmLayoutPropType = {
    sideBar: React.ReactNode
}
const CrmLayout = (crmLayoutProps: crmLayoutPropType) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch: AppDispatch = useDispatch();
    const profile = useSelector((state: RootState) => state.auth.authData);
    const dark = useSelector((state: RootState) => state.ui.dark);
    const mobileOpen: boolean = useSelector((state: RootState) => state.ui.isMobile);
    const role = useSelector((state: RootState) => state.auth.role);
    const loading = useSelector((state: RootState) => state.auth.loading);

    useEffect(() => {
        switch (role) {
            case 'customer':
                dispatch(getCustomerProfile({}));
                break;
            // case 'agent':
            //     dispatch(getAgentProfile({}));
            //     break;
            // case 'employee':
            //     dispatch(getEmployeeProfile({}));
            //     break;
            default:
                break;
        }
    }, [role]);


    const handleDrawerClose = useCallback(() => {
        dispatch(handleIsMobile())
    }, [dispatch]);

    const handleDrawerToggle = useCallback(() => {
        dispatch(handleIsMobile())
    }, [dispatch]);

    const handleOnclick = useCallback(() => dispatch(logout({})), [dispatch]);
    const handleTheme = useCallback(() => dispatch(toggleTheme()), [dispatch]);
    const handleToggleDrawer = () => dispatch(handleIsDesktop())

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

    if (!role) return <Navigate to='/' />

    return <Box>
        {loading && <LoadingModal />}
        <Helmet>
            <title>NameLix Dashboard | {role}</title>
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
                <Collapse component={Box} in={!isMobile} orientation="horizontal">
                    <ListItem component={Link} to="/" disablePadding sx={{ width: drawerWidth - 80, display: { xs: 'none', md: 'flex' } }}>
                        <ListItemIcon>
                            <Avatar sx={{ mr: 2, width: 38, height: 38 }} src={'/brand.ico'} />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography color="text.primary">Namelix</Typography>} />
                    </ListItem>
                </Collapse>
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
                    </> : <Skeleton width={120} height={40}></Skeleton>
                }
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} />

                <Stack direction="row" gap={2} alignItems='center'>
                    <Collapse in={!isMobile} orientation="horizontal">
                        <Stack direction={'row'} alignItems={'center'}>
                            {profile.city && <Chip sx={{ display: { xs: 'none', md: 'flex' } }} color="primary" size="small" icon={<LocationOnRoundedIcon fontSize="inherit" />} label={profile?.city} />
                            }
                            <Tooltip title={dark ? "light" : "dark"}>
                                <IconButton color="default" sx={{ mr: 2 }} onClick={handleTheme}>{dark ? <LightModeIcon /> : < NightlightRoundIcon />}</IconButton>
                            </Tooltip>
                            <Notification />
                            <Button size="small" color="error" endIcon={<LogoutRoundedIcon fontSize="inherit" />} variant="outlined" onClick={handleOnclick}>Logout</Button>
                        </Stack>
                    </Collapse>
                    {profile && <Tooltip title={profile.role}>
                        <IconButton size="small">
                            <Avatar
                                src="https://avatar.iran.liara.run/public"
                                sx={{ width: 36, height: 36 }}
                                alt="profile_logo"
                            >
                            </Avatar>
                        </IconButton>
                    </Tooltip>
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

            <Box sx={{
                display: {
                    md: 'block',
                    xs: "none"
                }
            }}>
                <Collapse sx={{
                    display: {
                        md: 'block',
                        xs: "none"
                    }
                }} component={Box} orientation="horizontal" in={!isMobile}>
                    {crmLayoutProps.sideBar}
                </Collapse>
            </Box>


            <Card sx={{ p: 2, flexGrow: 1, height: 'calc(100dvh - 65px)', overflow: 'auto' }}>
                <Suspense fallback={<LinearProgress />}>
                    <Outlet />
                    <Box my={2}>
                        <Divider />
                    </Box>
                    <Typography>Looking for support ? <Link to="/support">Ask AI ?</Link></Typography>
                </Suspense>
            </Card>
        </Stack>
    </Box >
}

export default React.memo(CrmLayout);