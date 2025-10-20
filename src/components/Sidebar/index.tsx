import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import ScrollContainer from "../Scrollbar/Scrollbar";
import { GeminiText } from "../../assets/icons/GeminiText";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Edit from "../../assets/icons/edit";
import WorkFlow from "../../assets/icons/workflow";
import DownUp from "../../assets/icons/up-down";
import Compass from '../../assets/icons/compass'
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
// import { newChat } from "../../features/chatbot/chatbotSlice";
import React from "react";

// const ConversationList = React.lazy(() => import("../ConversationList"));
import ConversationList from "../ConversationList";

import { useAuth0 } from "@auth0/auth0-react";
import { toggleCollapse, toggleMobileDrawer, toggleSearch } from "../../features/ui/uiSlice";
import SideMenu from "../../assets/icons/pannel-left";

const Sidebar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const dispatch: AppDispatch = useDispatch();
    const { user, logout } = useAuth0();
    const handleNewChat = () => {
        // dispatch(newChat())
        dispatch(toggleMobileDrawer(false))
    };
    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
    };
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCollpase = () => {
        dispatch(toggleCollapse(false))
    };
    const handleDrawer = () => {
        dispatch(toggleMobileDrawer(false))
    }

    const openSearch = () => dispatch(toggleSearch(true))
    return (
        <Stack sx={{ height: "100dvh", borderRight: `1px solid ${theme.palette.divider}`, bgcolor: theme.palette.background.paper }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack gap={1} direction={'row'}>
                    <GeminiText sx={{ width: '100%' }} />
                </Stack>
                <Box></Box>
                <IconButton size="small" onClick={isMobile ? handleDrawer : handleCollpase}><SideMenu fontSize="inherit" /></IconButton>
            </Toolbar>
            <List dense>
                <ListItem>
                    <ListItemButton onClick={handleNewChat}>
                        <Edit fontSize="inherit" sx={{ mr: 1 }} />
                        <ListItemText sx={{ textWrap: 'nowrap' }} primary="New Chat" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={openSearch}>
                        <SearchRoundedIcon fontSize="inherit" sx={{ mr: 1 }} />
                        <ListItemText sx={{ textWrap: 'nowrap' }} primary="Search" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <WorkFlow fontSize="inherit" sx={{ mr: 1 }} />
                        <ListItemText sx={{ textWrap: 'nowrap' }} primary="Integrations" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Compass fontSize="inherit" sx={{ mr: 1 }} />
                        <ListItemText sx={{ textWrap: 'nowrap' }} primary="Discover" />
                    </ListItemButton>
                </ListItem>
            </List>

            <ScrollContainer flexGrow={1}>
                <ConversationList />
            </ScrollContainer>
            <Divider variant="middle" />
            <Box>
                <List id="basic-button">
                    <ListItem secondaryAction={
                        <button
                            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit' }}
                            onClick={handleClick}
                        >
                            <DownUp fontSize="inherit" />
                        </button>
                    }>
                        <ListItemIcon>
                            <Avatar sx={{
                                width: '36px', height: '36px'
                            }} src={user?.picture}></Avatar>
                        </ListItemIcon>
                        <ListItemText
                            primary={<Typography variant="subtitle2">{user?.name}</Typography>} />
                    </ListItem>


                </List>
                <Menu
                    variant="selectedMenu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Box>
        </Stack>
    )
}

export default React.memo(Sidebar);