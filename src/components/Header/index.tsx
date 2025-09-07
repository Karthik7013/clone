import { Box, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import IconButton from "../ui/IconButton";
import MessageCircleDashed from "../../assets/icons/message-circle-dashed";
import Helmet from "react-helmet";
import SideMenu from "../../assets/icons/side-menu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { temporaryMode } from "../../features/url/urlSlice";
import Message from "../../assets/icons/message-icon";
import Share from "../../assets/icons/share";

type headerProps = {
    closeMobileDrawer?: () => void,
    closeDesktopDrawer?: () => void
}
const Header = (props: headerProps) => {
    const mode = useSelector((state: RootState) => state.urlReducer.mode)
    const messages = useSelector((state: RootState) => state.chat.messages)
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
            {messages.length && <title>{messages[0].message}</title>}
        </Helmet>
        <Toolbar sx={{ gap: 2, backgroundColor: 'background.paper' }}>
            <IconButton onClick={isMobile
                ? props.closeMobileDrawer : props.closeDesktopDrawer}>
                <SideMenu />
            </IconButton>



            <Box flexGrow={1} display='flex' gap={2} justifyContent={'center'}>
                <Typography
                    variant="subtitle2"
                    textAlign={'center'}
                    textOverflow={'ellipsis'}
                    overflow={'hidden'}
                    sx={{
                        maxWidth: { xs: 180, lg: 400 },
                        fontSize: 14,
                        whiteSpace: 'nowrap'
                    }}
                >{messages[0]?.message}</Typography>
            </Box>
            {!messages.length ? < IconButton onClick={handleTemporaryMode}>
                {mode ? <Message /> : <MessageCircleDashed />}
            </IconButton>
                : <IconButton size='small'>
                    <Share fontSize='inherit' />
                </IconButton>}
        </Toolbar>
    </Box >
}
export default Header;