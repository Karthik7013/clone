import { Box, CardContent, Divider, Toolbar, useTheme } from "@mui/material";
import GeminiIcon from "../../assets/icons/GeminiIcon";
import Typography from "../ui/Typography";
import DarkMode from "../Darkmode";
import IconButton from "../ui/IconButton";
import MessageCircleDashed from "../../assets/icons/message-circle-dashed";
import Helmet from "react-helmet";
import Drawer from "../ui/Drawer";
import WeatherWidget from "../Widgets/weather";
import Video from "../Widgets/video";
import { useState } from "react";
const Header = () => {
    const muiTheme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawer = () => setOpen((prev) => !prev)
    return <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 99 }}>
        <Helmet>
            <meta name="theme-color" content={muiTheme.palette.primary.main} />
        </Helmet>
        <Toolbar sx={{ gap: 2, bgcolor: 'background.paper' }}>
            <GeminiIcon />
            <Box flexGrow={1}>
                <Typography variant='h6' fontWeight={500}>Gemini AI</Typography>
            </Box>
            <DarkMode />
            <IconButton onClick={handleDrawer}>
                <MessageCircleDashed />
            </IconButton>
            <Drawer anchor='left' onClose={handleDrawer} open={open}>
                <Toolbar>
                    <Typography variant="h4">Tools</Typography>
                </Toolbar>
                <Divider />
                <CardContent>
                    Weather Tool
                    <WeatherWidget />
                    Video Tool
                    <Video />
                </CardContent>
            </Drawer>
        </Toolbar>
        <Divider
        />
    </Box>
}
export default Header;