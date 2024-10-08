import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Avatar, Card, CardContent, CardMedia, ListItemIcon, ListItemText, Stack, Switch, TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutRoundedIcon from '@mui/icons-material/Logout';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toggleTheme } from '../../redux/slice/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootProps } from '../../types/RootProps';
import { handleLogout } from '../../redux/slice/authSlice';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CustomButton from '../ui-components/CustomButton';
import CustomAppBar from '../ui-components/CustomAppBar';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import ProductPannel from './ProductPannel';
import { customerProfileProps, employeeProfileProps, pospProfileProps } from '../../types/AuthProps/AuthProps';


type headerProps = {
    dark: boolean,
    islogin: boolean,
    profile: any | null
}
const Header = (props: headerProps) => {
    console.log(props.profile, 'header profile')
    const dispatch = useDispatch();
    const { dark, islogin, profile } = props;
    const [anchorElProducts, setAnchorElProducts] = useState(null);
    const [anchorElSignIn, setAnchorElSignIn] = useState(null);
    const navigate = useNavigate();
    // functions for product-menu-dropdown open/close
    const handleOpenProductMenu = (event: any) => {
        setAnchorElProducts(event.currentTarget)
    }

    const handleCloseProductMenu = () => {
        setAnchorElProducts(null);
    };

    // functions for sign-menu-dropdown open/close
    const handleOpenSignInMenu = (event: any) => {
        setAnchorElSignIn(event.currentTarget)
    }

    const handleCloseSignInMenu = () => {
        setAnchorElSignIn(null);
    };

    const toggleMode = () => {
        dispatch(toggleTheme())
    }
    const handleOnclick = () => dispatch(handleLogout()) // logout 




    return (
        <CustomAppBar>
            <Container maxWidth="xl">
                <Toolbar>
                    <Box component={'a'} href='/' sx={{ background: 'white', borderRadius: '0.75rem', padding: 0.5, display: { xs: 'none', md: 'block' } }}>
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
                            <img src="/logo.jpg" alt="" />
                        </Stack>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        <Tooltip title="Insurance Product">
                            <Button endIcon={<KeyboardArrowDownRoundedIcon />} onClick={handleOpenProductMenu} sx={{ color: 'white' }}>
                                Insurance Products
                            </Button>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px', px: 2 }}
                            id="menu-appbar"
                            anchorEl={anchorElProducts}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElProducts)}
                            onClose={handleCloseProductMenu}
                        >
                            <ProductPannel />

                        </Menu>
                        <Tooltip
                            title={<>
                                hellowjlksjkljlkjklfjakfja;
                            </>}>
                            <Button sx={{ color: 'white', display: 'block' }}>
                                Claims
                            </Button>
                        </Tooltip>

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

                            <Tooltip title={<Typography variant="caption">{profile?.email}</Typography>}>
                                <IconButton
                                    sx={{ ml: 2 }}
                                    size='small'
                                    onClick={handleOpenSignInMenu}
                                >
                                    <Avatar sx={{ width: 36, height: 36, color: 'inherit' }}>{profile?.first_name[0]}</Avatar>
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
                                    <MenuItem onClick={() => navigate(`/dashboard`)}>
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
                                        <MenuItem onClick={() => navigate('/employee/login')}>
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