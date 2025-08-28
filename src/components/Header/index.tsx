import { Box, Button, Divider, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import GeminiIcon from "../../assets/icons/GeminiIcon";
import Typography from "../ui/Typography";
import IconButton from "../ui/IconButton";
import MessageCircleDashed from "../../assets/icons/message-circle-dashed";
import Helmet from "react-helmet";
import { useState } from "react";
import Sidebar from "../Sidebar";
import SideMenu from "../../assets/icons/side-menu";
import { togglePreview } from "../../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
const Header = () => {
    const preview = useSelector((state: RootState) => state.themeReducer.preview)
    const dispatch: AppDispatch = useDispatch()
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
    const [open, setOpen] = useState(false);
    const handleDrawer = () => setOpen((prev) => !prev)
    const handlePreview = () => dispatch(togglePreview(!preview))
    return <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 99 }}>
        <Helmet>
            <meta name="theme-color" content={muiTheme.palette.primary.main} />
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
            <Button onClick={handlePreview}>Preview Mode</Button>
            <Sidebar open={open} onClose={handleDrawer} />
        </Toolbar>
        <Divider
        />
    </Box>
}
export default Header;