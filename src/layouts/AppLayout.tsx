import React from 'react';
import { Collapse, Stack, useMediaQuery, useTheme, Drawer } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatContainer from '../components/ChatContainer';
import Prompt from '../components/Prompt';
import PreviewMode from '../components/Preview';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { setPreviewContent, toggleMobileDrawer, togglePreviewMode } from '../features/ui/uiSlice';
import { useAuth0 } from '@auth0/auth0-react';
import SearchConversation from '../components/SeachConversation';

const AppLayout = () => {
    const dispatch: AppDispatch = useDispatch();
    const { user } = useAuth0()
    const mobileDrawer = useSelector((state: RootState) => state.ui.mobileDrawer);
    const preview = useSelector((state: RootState) => state.ui.previewMode);
    const collapse = useSelector((state: RootState) => state.ui.collapse);
    const closeDrawer = () => dispatch(toggleMobileDrawer(false));
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    const closePreview = () => {
        dispatch(setPreviewContent()); // reset the conent to default
        dispatch(togglePreviewMode(false)) // close the preview slide
    }
    return <Stack direction={'row'} sx={{ height: '100dvh', width: '100%' }}>
            <Collapse
            sx={{
                "& .MuiCollapse-wrapperInner": {
                    width: '100%'
                }
            }}
            orientation='horizontal' in={!isMobile && collapse && Boolean(user)} unmountOnExit>
            <Sidebar />
        </Collapse>
        <Drawer anchor='left' onClose={closeDrawer} open={Boolean(user) && isMobile && mobileDrawer}>
            <Sidebar />
        </Drawer>
        <Stack sx={{ width: (!isMobile && !collapse && preview) ? "50%" : "100%" }}>
            <Header />
            <Stack sx={{ overflowY: 'auto', flexGrow: 1, justifyContent: 'center' }}>
                <ChatContainer />
                <Prompt />
            </Stack>
        </Stack>
        <Collapse
            sx={{
                flexGrow: 1,
                "& .MuiCollapse-wrapperInner": {
                    width: '100%'
                }
            }}
            orientation='horizontal' unmountOnExit in={!isMobile && !collapse && preview}>
            <PreviewMode />
        </Collapse>
        <Drawer
            sx={{
                '& .MuiDrawer-paper': {
                    width: '100%'
                }
            }}
            anchor='right' onClose={closePreview} open={isMobile && !mobileDrawer && preview}>
            <PreviewMode />
        </Drawer>
        <SearchConversation />
    </Stack>
}

export default React.memo(AppLayout);

