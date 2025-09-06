import React, { useState } from 'react';
import { Collapse, Stack, useMediaQuery, useTheme, Drawer, Box } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatContainer from '../components/ChatContainer';
import Prompt from '../components/Prompt';
import PreviewMode from '../components/Preview';



const AppLayout = () => {
    const [mobileDrawer, setMobileDrawer] = useState(false);
    const [preview] = useState(false);
    const [collapse, setCollapse] = useState(true);
    const handleCollpase = () => setCollapse((prev) => !prev)
    const handleDrawer = () => setMobileDrawer((prev) => !prev);
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));





    return (
        <Stack direction={'row'} sx={{ height: '100dvh', width: '100%' }}>
            <Collapse orientation='horizontal' in={!isMobile && collapse} unmountOnExit>
                <Sidebar />
            </Collapse>
            <Drawer anchor='left' onClose={handleDrawer} open={isMobile && mobileDrawer}>
                <Sidebar />
            </Drawer>
            <Stack sx={{ height: '100%', flexGrow: 1, width: '100%' }}>
                <Header closeMobileDrawer={handleDrawer} closeDesktopDrawer={handleCollpase} />
                <Stack sx={{ overflowY: 'auto', flexGrow: 1, justifyContent: 'center' }}>
                    <ChatContainer />
                    <Prompt />
                </Stack>
            </Stack>

            <Box flexGrow={1}>
                <Collapse orientation='horizontal' sx={{ height: '100dvh', overflowX: 'auto' }} unmountOnExit in={!isMobile && !collapse && preview}>
                    <PreviewMode />
                </Collapse>
            </Box>
            <Drawer anchor='right' open={isMobile && !mobileDrawer && preview}>
                <PreviewMode />
            </Drawer>

        </Stack>
    )
}

export default React.memo(AppLayout);

