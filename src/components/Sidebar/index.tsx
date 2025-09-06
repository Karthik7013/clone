import { Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography, useTheme } from "@mui/material";
import ScrollContainer from "../Scrollbar/Scrollbar";
import { GeminiText } from "../../assets/icons/GeminiText";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Edit from "../../assets/icons/edit";
import WorkFlow from "../../assets/icons/workflow";
// import PannelLeft from "../../assets/icons/pannel-left";
import DownUp from "../../assets/icons/up-down";
import Compass from '../../assets/icons/compass'
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { newChat } from "../../features/chatbot/chatbotSlice";
import React from "react";
import ConversationList from "../ConversationList";



const Sidebar = () => {
    const theme = useTheme();
    const dispatch: AppDispatch = useDispatch();

    const handleNewChat = () => {
        dispatch(newChat())
    };

    return (
        <Stack sx={{ height: "100dvh", borderRight: `1px solid ${theme.palette.divider}`, bgcolor: theme.palette.background.paper }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack gap={1} direction={'row'}>
                    <GeminiText sx={{ width: '100%' }} />
                </Stack>
                {/* <Box>
                    <IconButton size="small"><PannelLeft fontSize="inherit" /></IconButton>
                </Box> */}

            </Toolbar>
            <List dense>
                <ListItem>
                    <ListItemButton onClick={handleNewChat}>
                        <Edit fontSize="inherit" sx={{ mr: 1 }} />
                        <ListItemText primary="New Chat" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <SearchRoundedIcon fontSize="inherit" sx={{ mr: 1 }} />
                        <ListItemText primary="Search" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <WorkFlow fontSize="inherit" sx={{ mr: 1 }} />
                        <ListItemText primary="Integrations" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Compass fontSize="inherit" sx={{ mr: 1 }} />
                        <ListItemText primary="Discover" />
                    </ListItemButton>
                </ListItem>
            </List>

            <ScrollContainer flexGrow={1}>
                <ConversationList />
            </ScrollContainer>
            <Divider variant="middle" />
            <Box>

                <List disablePadding>
                    <ListItem secondaryAction={<DownUp fontSize="inherit" />}>
                        <ListItemIcon>
                            <Avatar sx={{
                                width: '36px', height: '36px'
                            }} src="https://avatar.iran.liara.run/public">K</Avatar>
                        </ListItemIcon>
                        <ListItemText secondary={<Typography variant="caption">karthiktumala143</Typography>} primary={<Typography variant="subtitle2">@karthik2451</Typography>} />
                    </ListItem>
                </List>
            </Box>
        </Stack>
    )
}

export default React.memo(Sidebar);