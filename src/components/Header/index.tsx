import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import IconButton from "../ui/IconButton";
import MessageCircleDashed from "../../assets/icons/message-circle-dashed";
import Helmet from "react-helmet";
import SideMenu from "../../assets/icons/side-menu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { temporaryMode } from "../../features/url/urlSlice";
import Message from "../../assets/icons/message-icon";

type headerProps = {
    closeMobileDrawer?: () => void,
    closeDesktopDrawer?: () => void
}
const Header = (props: headerProps) => {
    const mode = useSelector((state: RootState) => state.urlReducer.mode)
    const dispatch: AppDispatch = useDispatch()
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    const handleTemporaryMode = () => {
        if (mode) {
            dispatch(temporaryMode())
        } else {
            dispatch(temporaryMode('temporary'))
        }
    }
    return <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 99 }}>
        <Helmet>
            <meta name="theme-color" content={muiTheme.palette.background.paper} />
            <title>Sample Markdown format - md</title>
        </Helmet>
        <Toolbar sx={{ gap: 2, backgroundColor: 'background.paper' }}>
            <IconButton onClick={isMobile
                ? props.closeMobileDrawer : props.closeDesktopDrawer}>
                <SideMenu />
            </IconButton>



            <Box flexGrow={1} display='flex' gap={2} justifyContent={isMobile ? 'center' : 'flex-start'}>

            </Box>

            <IconButton onClick={handleTemporaryMode}>
                {mode ? <Message /> : <MessageCircleDashed />}
            </IconButton>
        </Toolbar>
    </Box>
}
export default Header;