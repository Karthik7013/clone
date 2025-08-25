import { Box, Divider, Toolbar, useTheme } from "@mui/material";
import GeminiIcon from "../../assets/icons/GeminiIcon";
import Typography from "../ui/Typography";
import IconButton from "../ui/IconButton";
import MessageCircleDashed from "../../assets/icons/message-circle-dashed";
import Helmet from "react-helmet";
import { useState } from "react";
import Sidebar from "../Sidebar";
const Header = () => {
    const muiTheme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawer = () => setOpen((prev) => !prev)
    return <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 99 }}>
        <Helmet>
            <meta name="theme-color" content={muiTheme.palette.primary.main} />
        </Helmet>
        <Toolbar sx={{ gap: 2, backgroundColor: 'background.paper'}}>
            <GeminiIcon />
            <Box flexGrow={1}>
                <Typography variant='h6' fontWeight={500}>Gemini AI</Typography>
            </Box>
            <IconButton onClick={handleDrawer}>
                <MessageCircleDashed />
            </IconButton>
            <Sidebar open={open} onClose={handleDrawer} />
        </Toolbar>
        <Divider
        />
    </Box>
}
export default Header;