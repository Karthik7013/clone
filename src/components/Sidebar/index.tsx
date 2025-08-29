import { Avatar, Box, Button, CardContent, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, useTheme } from "@mui/material";
import DarkMode from "../Darkmode";
import ScrollContainer from "../Scrollbar/Scrollbar";
import { GeminiText } from "../../assets/icons/GeminiText";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Edit from "../../assets/icons/edit";
import WorkFlow from "../../assets/icons/workflow";
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
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
    const theme = useTheme()
    return <Drawer anchor='left' onClose={props.onClose} open={props.open} >
        <Stack sx={{ height: "100dvh", bgcolor: 'background.paper', width: '320px' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack gap={1} direction={'row'}>
                    <GeminiText sx={{ width: '100%' }} />
                </Stack>
                <DarkMode />
            </Toolbar>
            <ScrollContainer flexGrow={1} overflow={'auto'}>
                <List dense sx={{ position: 'sticky', top: 0, left: 0, background: theme.palette.background.paper, zIndex: 99 }}>
                    <ListItem>
                        <ListItemButton >
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
                            <ExploreRoundedIcon fontSize="inherit" sx={{ mr: 1 }} />
                            <ListItemText primary="Discover" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <CardContent>


                    <List dense subheader="Chats">
                        {Array.from({ length: 20 }, (_, i) => (
                            <ListItem key={i} secondaryAction={<MoreHorizRoundedIcon />}>
                                <ListItemText primary={generateRandomMessage()} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </ScrollContainer>
            <Divider />
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box>
                    <Avatar src="https://avatar.iran.liara.run/public">K</Avatar>
                </Box>
                <Button color="error" variant="contained">Logout</Button>
            </Toolbar>

        </Stack>
    </Drawer>
}

export default Sidebar;