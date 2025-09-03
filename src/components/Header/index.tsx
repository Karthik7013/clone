import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import IconButton from "../ui/IconButton";
import MessageCircleDashed from "../../assets/icons/message-circle-dashed";
import Helmet from "react-helmet";
import { useState } from "react";
import Sidebar from "../Sidebar";
import SideMenu from "../../assets/icons/side-menu";
import { GeminiText } from "../../assets/icons/GeminiText";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { temporaryMode } from "../../features/url/urlSlice";
import Message from "../../assets/icons/message-icon";
// import GoogleButton from "../GoogleButton";
const Header = () => {
    const mode = useSelector((state: RootState) => state.urlReducer.mode)
    const dispatch: AppDispatch = useDispatch()
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
    const [open, setOpen] = useState(false);
    const handleDrawer = () => setOpen((prev) => !prev)
    const handleTemporaryMode = () => {
        if (mode) {
            dispatch(temporaryMode())
        } else {
            dispatch(temporaryMode('temporary'))
        }
    }
    return <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 99 }}>
        <Helmet>
            <meta name="theme-color" content={muiTheme.palette.background.default} />
        </Helmet>
        <Toolbar sx={{ gap: 2, backgroundColor: 'background.paper' }}>
            <IconButton onClick={handleDrawer}>
                <SideMenu />
            </IconButton>
            <Box flexGrow={1} display='flex' gap={2} justifyContent={isMobile ? 'center' : 'flex-start'}>
                <GeminiText sx={{
                    width: 'fit-content'
                }} />
            </Box>

            <IconButton onClick={handleTemporaryMode}>
                {mode ? <Message /> : <MessageCircleDashed />}
            </IconButton>

            {/* <GoogleButton /> */}

            <Sidebar open={open} onClose={handleDrawer} />
        </Toolbar>
    </Box>
}
export default Header;