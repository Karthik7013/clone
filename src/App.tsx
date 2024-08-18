import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { CssBaseline, Fab, LinearProgress, ThemeProvider, Toolbar } from '@mui/material'
import theme from './theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { RootProps } from './types/RootProps';
import { closeAlert } from './redux/slice/authSlice';
import AlertBox from './Framework/components/AlertBox';
import { allRouter } from "./allRoute"
import CustomizePallete from './Framework/components/CustomizePallete';
import ChatBot from './Framework/components/ChatBot';

const App = () => {
    console.log('app render...');
    const dispatch = useDispatch();
    const dark = useSelector((state: RootProps) => state.ui.dark);
    const borderRadius = useSelector((state: RootProps) => state.ui.borderRadius);
    const fontFamily = useSelector((state: RootProps) => state.ui.fontFamily);
    const alert = useSelector((state: RootProps) => state.auth.alert);
    const handleClose = () => dispatch(closeAlert());
    const profile = useSelector((state: RootProps) => state.auth.profile);

    return (
        <ThemeProvider theme={theme({ dark, borderRadius, fontFamily })}>
            <CssBaseline />
            <AlertBox alert={alert} onClose={handleClose} />
            <React.Suspense fallback={<LinearProgress />}>
                <RouterProvider router={allRouter(profile)}></RouterProvider>
            </React.Suspense>
            <CustomizePallete />
            <ChatBot />
        </ThemeProvider>
    )
}

export default App