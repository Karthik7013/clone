import React from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'
import Footer from './Framework/components/Footer'
import { Avatar, CssBaseline, Fab, ThemeProvider, Toolbar } from '@mui/material'
import Header from './Framework/components/Header';
import theme from './theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { RootProps } from './types/RootProps';
import { closeAlert } from './redux/slice/authSlice';
import AlertBox from './Framework/components/AlertBox';
import { allRouter } from "./allRoute"
import CustomizePallete from './Framework/components/CustomizePallete';
import AddIcon from '@mui/icons-material/Add';
import chat_bot from './assets/chat_bot.png';
import ChatBot from './Framework/components/ChatBot';

const App = () => {
    console.log('app render...');
    const dispatch = useDispatch();
    const dark = useSelector((state: RootProps) => state.ui.dark);
    const borderRadius = useSelector((state: RootProps) => state.ui.borderRadius);
    const fontFamily = useSelector((state: RootProps) => state.ui.fontFamily);
    const type = useSelector((state: RootProps) => state.auth.profile?.type);
    const alert = useSelector((state: RootProps) => state.auth.alert);
    const handleClose = () => dispatch(closeAlert());
    const role = useSelector((state: RootProps) => state.auth.profile?.role);




    return (
        <ThemeProvider theme={theme({ dark, borderRadius, fontFamily })}>
            <CssBaseline />
            <AlertBox alert={alert} onClose={handleClose} />
            <RouterProvider router={allRouter({ type, role })}></RouterProvider>
            <CustomizePallete />
            <ChatBot />

        </ThemeProvider>
    )
}

export default App