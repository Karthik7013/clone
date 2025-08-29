import { Avatar, Box, Button, CardContent, Divider, Drawer, Stack, Toolbar, Typography } from "@mui/material";
import WeatherWidget from "../Widgets/weather";
import DarkMode from "../Darkmode";
import Video from "../Widgets/video";
import ScrollContainer from "../Scrollbar/Scrollbar";
import GeminiIcon from "../../assets/icons/GeminiIcon";

type sidebarProps = {
    open: boolean,
    onClose: () => void
}

const Sidebar = (props: sidebarProps) => {
    return <Drawer anchor='left' onClose={props.onClose} open={props.open}>
        <Stack sx={{ height: "100dvh" }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack gap={1} direction={'row'}>
                    <GeminiIcon />
                    <Typography variant='h6' fontWeight={500}>Gemini AI</Typography>
                </Stack>
                <DarkMode />
            </Toolbar>
            <Divider />
            <ScrollContainer flexGrow={1} sx={{ bgcolor: 'background.paper' }} overflow={'auto'}>

                <CardContent>
                    Weather Tool
                    <WeatherWidget />
                    Video Tool
                    <Video />
                    Weather Tool
                    <WeatherWidget />
                    Video Tool
                    <Video />
                    Weather Tool
                    <WeatherWidget />
                    Video Tool
                    <Video />

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