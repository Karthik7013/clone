import { AppBar, Avatar, Badge, Box, Breadcrumbs, Card, CardContent, Divider, Drawer, Icon, IconButton, InputAdornment, LinearProgress, ListItemIcon, Menu, MenuItem, Stack, Switch, TextField, Toolbar, Tooltip, Typography } from "@mui/material"
import React from "react";
import { Logout, NotesRounded } from '@mui/icons-material';
import SideBar from "../common/SideDrawer";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootProps } from "../../types/RootProps";
import { toggleTheme } from "../../redux/slice/uiSlice";
import { handleLogout } from "../../redux/slice/authSlice";
import PageNotFound from "../../Framework/components/PageNotFound";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
const drawerWidth = 240;
const CrmLayout = () => {
    const location = useLocation();
    const links = location.pathname.split('/').slice(2);
    console.log(links)

    const dispatch = useDispatch()
    const profile = useSelector((state: RootProps) => state.auth.profile);
    console.log(profile?.menuProps)
    const type = useSelector((state: RootProps) => state.auth.profile?.type);
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
    const handleTheme = () => dispatch(toggleTheme()); //toggle theme




    return (
        <Box>
            {profile ? <Box sx={{ display: 'flex' }}>
                <AppBar
                    position="fixed"
                    sx={{
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
                        <Typography variant="body2" noWrap component="div">
                            Hellow {profile?.firstname} !
                        </Typography>
                        <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField sx={{ display: { xs: 'none', md: 'block' }, maxWidth: 400, margin: 'auto' }} fullWidth variant="outlined" size="small"
                                placeholder="Search"
                                InputProps={{
                                    endAdornment: <InputAdornment position="start"><SearchRoundedIcon /></InputAdornment>,
                                }}
                            ></TextField>
                        </Box>
                        <Stack direction="row" alignItems='center' gap={2}>
                            <Stack direction={'row'} sx={{ display: { xs: 'none', md: 'block' } }}>


                                <IconButton sx={{ mr: 2 }} onClick={handleTheme} color='inherit'>{dark ? <LightModeIcon /> : < NightlightRoundIcon />}</IconButton>


                            </Stack>

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
                                        {profile?.firstname[0]}
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
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
                                    profile.menuProps.map((menuItems) => <MenuItem onClick={handleClose}>
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
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        <SideBar items={profile.sideProps} />

                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        <SideBar items={profile.sideProps} />
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Toolbar>
                        <Breadcrumbs aria-label="breadcrumb">
                            {links.map((e, index) => {
                                if (links.length - 1 === index) {
                                    return <Typography variant="body1">{e}</Typography>
                                }
                                return <Link color="inherit" to="/employee/dashboard">
                                    {e}
                                </Link>
                            })}
                        </Breadcrumbs>
                    </Toolbar>
                    <Divider />
                    <LinearProgress />
                    <CardContent>
                        <Outlet />
                    </CardContent>
                </Box>
            </Box> :
                <PageNotFound />}
        </Box>
    )
}

export default CrmLayout