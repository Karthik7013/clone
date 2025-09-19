import { Alert, Box, Link, Snackbar, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
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


const Header = () => {
    const { isAuthenticated } = useAuth0();
    const mode = useSelector((state: RootState) => state.urlReducer.mode)
    const messages = useSelector((state: RootState) => state.chat.messages)
    const dispatch: AppDispatch = useDispatch();
    const mobileDrawer = useSelector((state: RootState) => state.ui.mobileDrawer);
    const collapse = useSelector((state: RootState) => state.ui.collapse);
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    const handleTemporaryMode = () => {
        if (mode) {
            dispatch(temporaryMode())
        } else {
            dispatch(temporaryMode('temporary'))
        }
    }

    const handleCollpase = () => {
        if (collapse) {
            dispatch(toggleCollapse(false))
        }
        else {
            dispatch(toggleCollapse(true))
        }
    };
    const handleDrawer = () => {
        if (mobileDrawer) {
            dispatch(toggleMobileDrawer(false))
        }
        else {
            dispatch(toggleMobileDrawer(true))
        }
    }

    return <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 99 }}>
        <Helmet>
            <meta name="theme-color" content={muiTheme.palette.background.paper} />
            {messages.length && <title>{messages[0].message}</title>}
        </Helmet>
        <Toolbar sx={{ gap: 2, backgroundColor: 'background.paper' }}>

            {isAuthenticated ? <IconButton onClick={isMobile ? handleDrawer : handleCollpase}>
                <SideMenu />
            </IconButton> : <Link href="/">
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
                >{messages[0]?.message}</Typography>
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


        </Toolbar>

        <Box sx={{ position: 'relative' }}>
            <Snackbar
                sx={{ position: 'absolute' }}
                open={false}
                anchorOrigin={{
                    horizontal: 'center',
                    vertical: "top"
                }}
            >
                <Alert sx={{ width: '100%' }} color="success" title="Error">
                    Error while error causeing the errrError while error causeing the
                </Alert>
            </Snackbar>
        </Box>
    </Box>
}
export default Header;