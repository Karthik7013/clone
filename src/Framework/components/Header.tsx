import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Avatar, CardMedia, ListItemIcon, ListItemText, Stack, } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoutRoundedIcon from '@mui/icons-material/Logout';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toggleTheme } from '../../redux/slice/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CustomButton from '../ui-components/CustomButton';
import CustomAppBar from '../ui-components/CustomAppBar';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import ProductPannel from './ProductPannel';
import { logout } from '../../redux/slice/authSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { Helmet } from 'react-helmet';

const Header = () => {
    console.log('header renders');
    const dark = useSelector((state: RootState) => state.ui.dark);
    const islogin = useSelector((state: RootState) => state.auth.isLogin);
    const profile = useSelector((state: RootState) => state.auth.authData);
    const role = useSelector((state: RootState) => state.auth.role);

    const dispatch: AppDispatch = useDispatch();

    const [anchorElSignIn, setAnchorElSignIn] = useState<HTMLElement | null>(null);
    const navigate = useNavigate();


    // functions for sign-menu-dropdown open/close
    const handleOpenSignInMenu = (event: any) => {
        setAnchorElSignIn(event.currentTarget)
    }

    const handleCloseSignInMenu = () => {
        setAnchorElSignIn(null);
    };

    // function for toggle theme
    const toggleMode = () => dispatch(toggleTheme())

    const handleOnclick = () => dispatch(logout({})) // logout 

    return (
        <CustomAppBar>
            <Helmet>
                <title>NameLix 360° Insurance | Smart Insurance for a Secure Tomorrow </title>
                <meta name="description" content="This is an awesome page using react-helmet!" />
            </Helmet>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box component={'a'} href='/' sx={{ background: 'white', borderRadius: '0.45rem', padding: 0.5, display: { xs: 'none', md: 'block' } }}>
                        <CardMedia
                            component="img"
                            height="40"
                            image="/logo.jpg"
                            alt="Paella"
                        />
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <Stack sx={{ background: '#fff', borderRadius: "5px", padding: '5px', width: '70px' }}>
                            <img src="/logo.jpg" alt="logo" />
                        </Stack>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        <ProductPannel />
                        <Button sx={{ color: 'white', display: 'block' }}>
                            Claims
                        </Button>
                        <Button startIcon={<CallRoundedIcon />} sx={{ color: 'white' }}>
                            Talk to Expert
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: { xs: 1, md: 0 }, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <IconButton sx={{ mr: 2 }} onClick={toggleMode} color='inherit'>{dark ? <LightModeIcon /> : < NightlightRoundIcon />}</IconButton>

                        {islogin ? <>
                            <Tooltip title="Logout">
                                <CustomButton variant='outlined' size='small' onClick={handleOnclick} startIcon={<LogoutRoundedIcon />} sx={{ color: 'white' }}>
                                    Logout
                                </CustomButton>
                            </Tooltip>

                            <Tooltip title={profile?.email}>
                                <IconButton
                                    sx={{ ml: 2 }}
                                    size='small'
                                    onClick={handleOpenSignInMenu}
                                >
                                    <Avatar src='https://avatar.iran.liara.run/public' sx={{ width: 36, height: 36, color: 'inherit' }}>{profile?.firstname[0]}</Avatar>
                                </IconButton>
                            </Tooltip>
                        </> :
                            <Tooltip title="Signin">
                                <Button startIcon={<LoginRoundedIcon />} onClick={handleOpenSignInMenu} sx={{ color: 'white' }}>
                                    Signin
                                </Button>
                            </Tooltip>
                        }
                        <Menu
                            sx={{ mt: '45px', px: 2 }}
                            id="menu-appbar"
                            anchorEl={anchorElSignIn}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElSignIn)}
                            onClose={handleCloseSignInMenu}
                        >{
                                islogin ? <Box>
                                    <MenuItem onClick={() => navigate(`/${role}/`)}>
                                        <ListItemIcon>
                                            <SpaceDashboardIcon fontSize='small' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography textAlign="center" >Dashboard</Typography>
                                        </ListItemText>
                                    </MenuItem>
                                </Box> :
                                    <Box>
                                        <MenuItem onClick={() => navigate('/customer/signin')}>
                                            <Stack direction={'row'} gap={1} >
                                                <AccountCircleRoundedIcon fontSize='small' />
                                                <Typography textAlign="center" >cusotmer</Typography>
                                            </Stack>
                                        </MenuItem>
                                        <MenuItem onClick={() => navigate('/agent/signin')}>
                                            <Stack direction={'row'} gap={1}>
                                                <AssignmentIndIcon fontSize='small' />
                                                <Typography textAlign="center">Agent</Typography>
                                            </Stack>
                                        </MenuItem>
                                        <MenuItem onClick={() => navigate('/employee/signin')}>
                                            <Stack direction={'row'} gap={1}>
                                                <AdminPanelSettingsIcon fontSize='small' />
                                                <Typography textAlign="center">Employee</Typography>
                                            </Stack>
                                        </MenuItem>
                                    </Box>
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </CustomAppBar>
    )
}

export default React.memo(Header);