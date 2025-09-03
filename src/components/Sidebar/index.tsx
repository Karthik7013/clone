import { Avatar, Box, CardContent, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Skeleton, Stack, Toolbar, Typography } from "@mui/material";
import DarkMode from "../Darkmode";
import ScrollContainer from "../Scrollbar/Scrollbar";
import { GeminiText } from "../../assets/icons/GeminiText";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Edit from "../../assets/icons/edit";
import WorkFlow from "../../assets/icons/workflow";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import PannelLeft from "../../assets/icons/pannel-left";
import DownUp from "../../assets/icons/up-down";
import Compass from '../../assets/icons/compass'
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { newChat } from "../../features/chatbot/chatbotSlice";

type sidebarProps = {
    open: boolean,
    onClose: () => void
}
const generateRandomMessage = () => {
    const subjects = ['Meeting', 'Hi', 'File', 'Call', 'Done', 'Help', 'Later'];
    const verbs = ['sent', 'done', 'ready', 'coming', 'here', 'updated'];
    const nouns = ['now', 'today', 'soon', 'tomorrow', 'attached'];
    return `${subjects[Math.floor(Math.random() * subjects.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}!`;
};
const Sidebar = (props: sidebarProps) => {

    const dispatch: AppDispatch = useDispatch();


    const handleNewChat = () => {
        dispatch(newChat())
        props.onClose()
    };

    return <Drawer anchor='left' onClose={props.onClose} open={props.open} >
        <Stack sx={{ height: "100dvh", bgcolor: 'background.paper', width: '280px' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack gap={1} direction={'row'}>
                    <GeminiText sx={{ width: '100%' }} />
                </Stack>
                <Box>
                    <IconButton size="small" onClick={props.onClose}><PannelLeft fontSize="inherit" /></IconButton>
                </Box>

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

            <ScrollContainer flexGrow={1} overflow={'auto'}>
                <CardContent sx={{ py: 0 }}>


                    <List dense disablePadding subheader={
                        <ListSubheader
                            sx={{
                                position: "sticky",
                                top: -1,
                                bgcolor: "background.paper", // important, so text doesn’t overlap background
                                pl: 2
                            }}
                        >
                            <Typography fontSize={'0.75rem'} variant="subtitle2">Chats</Typography>
                        </ListSubheader>
                    }>
                        {Array.from({ length: 20 }, (_, i) => (
                            <ListItem key={i} secondaryAction={<MoreHorizRoundedIcon />}>
                                <ListItemText primary={generateRandomMessage()} />
                            </ListItem>
                        ))}
                        <ListItem >
                            <ListItemText primary={<Skeleton animation='wave' variant="text" />} />
                        </ListItem>
                        <DarkMode />
                    </List>
                </CardContent>
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
    </Drawer >
}

export default Sidebar;