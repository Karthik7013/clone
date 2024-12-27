import { alpha, AppBar, Avatar, Box, Button, CardContent, Chip, Drawer, IconButton, LinearProgress, ListItem, ListItemIcon, ListItemText, Skeleton, Stack, styled, Toolbar, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material"
import React, { Suspense, useCallback, useEffect } from "react";
import { NotesRounded } from '@mui/icons-material';
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleIsDesktop, handleIsMobile, toggleTheme } from "../../redux/slice/uiSlice";
import { getAgentProfile, getCustomerProfile, getEmployeeProfile, logout } from "../../redux/slice/authSlice";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
const drawerWidth = 260;
import { AppDispatch, RootState } from "../../redux/store";


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
    const desktopOpen: boolean = useSelector((state: RootState) => state.ui.isDesktop);
    const handleDrawerClose = useCallback(() => {
        dispatch(handleIsMobile())
    }, [dispatch]);

    const handleDrawerToggle = useCallback(() => {
        dispatch(handleIsMobile())
    }, [dispatch]);

    const handleOnclick = useCallback(() => dispatch(logout({})), [dispatch]);
    const handleTheme = useCallback(() => dispatch(toggleTheme()), [dispatch]);
    const handleToggleDrawer = ()=> dispatch(handleIsDesktop())

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
        borderRadius: theme.shape.borderRadius * 1.2,
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
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} />

                <Stack direction="row" alignItems='center' gap={2}>
                    <Chip sx={{ display: { xs: 'none', md: 'block' } }} color="primary" size="small" icon={<LocationOnRoundedIcon sx={{ color: 'inherit' }} />} label={profile?.city} />
                    <Stack direction={'row'} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Tooltip title={dark ? "light" : "dark"}>
                            <IconButton color="default" sx={{ mr: 2 }} onClick={handleTheme}>{dark ? <LightModeIcon /> : < NightlightRoundIcon />}</IconButton>
                        </Tooltip>
                        <Button variant="outlined" onClick={handleOnclick}>Logout</Button>
                    </Stack>
                    {
                        profile ? <>
                            <Tooltip
                                sx={{ maxWidth: '100%' }}
                                title=""
                            >
                                <IconButton

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
            {!desktopOpen && <Box minWidth={drawerWidth} maxWidth={drawerWidth} sx={{ display: { xs: 'none', md: 'block' }, maxHeight: 'calc(100dvh - 65px)', overflowY: 'auto' }}>
                {crmLayoutProps.sideBar}
            </Box>}
            <StyledCardContent>
                <Suspense fallback={<LinearProgress />}>
                    <Outlet />
                </Suspense>
            </StyledCardContent>
        </Stack>
    </Box>
}

export default React.memo(CrmLayout);