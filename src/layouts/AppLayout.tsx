import React, { useState } from 'react';
import { Collapse, Stack, useMediaQuery, useTheme, Drawer } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatContainer from '../components/ChatContainer';
import Prompt from '../components/Prompt';



const AppLayout = () => {
    const [mobileDrawer, setMobileDrawer] = useState(false);
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
        </Stack>
    )
}

export default React.memo(AppLayout);

