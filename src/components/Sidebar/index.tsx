import { CardContent, Divider, Drawer, Toolbar, Typography } from "@mui/material";
import WeatherWidget from "../Widgets/weather";
import DarkMode from "../Darkmode";
import Video from "../Widgets/video";

type sidebarProps = {
    open: boolean,
    onClose: () => void
}

const Sidebar = (props: sidebarProps) => {
    return <Drawer anchor='left' onClose={props.onClose} open={props.open}>
        <Toolbar>
            <Typography variant="h4">Tools</Typography>
        </Toolbar>
        <Divider />
        <CardContent>
            Weather Tool
            <WeatherWidget />
            Video Tool
            <Video />
            <DarkMode />
        </CardContent>
    </Drawer>
}

export default Sidebar;