import { Alert, Box, Button, Link, Snackbar, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import IconButton from "../ui/IconButton";
import MessageCircleDashed from "../../assets/icons/message-circle-dashed";
import Helmet from "react-helmet";
import SideMenu from "../../assets/icons/side-menu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { temporaryMode } from "../../features/url/urlSlice";
import Message from "../../assets/icons/message-icon";
import Share from "../../assets/icons/share";
import { GeminiText } from "../../assets/icons/GeminiText";
import { toggleCollapse, toggleMobileDrawer } from "../../features/ui/uiSlice";
import GoogleButton from "../GoogleButton";
import { useAuth0 } from "@auth0/auth0-react";
// import { clearStreamError } from "../../features/chatbot/chatbotSlice";

const Header = () => {
    const { isAuthenticated } = useAuth0();
    const mode = useSelector((state: RootState) => state.urlReducer.mode)
    const messages = useSelector((state: RootState) => state.chat.messages)
    const error = useSelector((state: RootState) => state.chat.error)
    // const { conversation } = useSelector((state: RootState) => state.chat)
    const dispatch: AppDispatch = useDispatch();
    // const mobileDrawer = useSelector((state: RootState) => state.ui.mobileDrawer);
    // const collapse = useSelector((state: RootState) => state.ui.collapse);
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    const handleTemporaryMode = () => {
        if (mode) {
            dispatch(temporaryMode())
        } else {
            dispatch(temporaryMode('temporary'))
        }
    }
    const clearErr = () => null;
    const handleCollpase = () => {
        dispatch(toggleCollapse(true))
    };
    const handleDrawer = () => {
        dispatch(toggleMobileDrawer(true))
    }



    return <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 99 }}>
        <Helmet>
            <meta name="theme-color" content={muiTheme.palette.background.paper} />
            {messages.length && <title>{messages[0].message}</title>}
        </Helmet>
        <Toolbar sx={{ gap: 2, backgroundColor: 'background.paper', position: 'relative' }}>

            {isAuthenticated ?
                <IconButton onClick={isMobile ? handleDrawer : handleCollpase}>
                    <SideMenu />
                </IconButton> :
                <Link href="/">
                    < GeminiText sx={{ fontSize: '4em' }} />
                </Link>
            }
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
                >{"New Chat"}</Typography>
            </Box>
            {!isAuthenticated && <GoogleButton />}
            {isAuthenticated && <>
                {!messages.length ? <IconButton onClick={handleTemporaryMode}>
                    {mode ? <Message /> : <MessageCircleDashed />}
                </IconButton>
                    : <IconButton size='small'>
                        <Share fontSize='inherit' />
                    </IconButton>}
            </>}
            <Snackbar

                open={Boolean(error)}
                anchorOrigin={{
                    horizontal: 'center',
                    vertical: "top"
                }}>
                <Alert
                    sx={{
                        width: "100%"
                    }}
                    action={<Button onClick={clearErr} color="inherit" size="small">Close</Button>} severity="error" color="error">
                    {error?.message || 'Something went wrong'}
                </Alert>
            </Snackbar>
        </Toolbar>


    </Box >
}
export default Header;