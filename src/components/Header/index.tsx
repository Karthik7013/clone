import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import GeminiIcon from "../../assets/icons/GeminiIcon";
import Typography from "../ui/Typography";
import IconButton from "../ui/IconButton";
import MessageCircleDashed from "../../assets/icons/message-circle-dashed";
import Helmet from "react-helmet";
import { useState } from "react";
import Sidebar from "../Sidebar";
import SideMenu from "../../assets/icons/side-menu";
const Header = () => {
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
    const [open, setOpen] = useState(false);
    const handleDrawer = () => setOpen((prev) => !prev)
    return <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 99 }}>
        <Helmet>
            <meta name="theme-color" content={muiTheme.palette.background.default} />
        </Helmet>
        <Toolbar sx={{ gap: 2, backgroundColor: 'background.paper' }}>
            {isMobile && <IconButton onClick={handleDrawer}>
                <SideMenu />
            </IconButton>}
            <Box flexGrow={1} display='flex' gap={2} justifyContent={isMobile ? 'center' : 'flex-start'}>
                <GeminiIcon />
                <Typography variant='h6' fontWeight={500}>Gemini AI</Typography>
            </Box>

            <IconButton onClick={handleDrawer}>
                <MessageCircleDashed />
            </IconButton>

            <Sidebar open={open} onClose={handleDrawer} />
        </Toolbar>
    </Box>
}
export default Header;