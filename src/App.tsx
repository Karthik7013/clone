import React from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'
import Footer from './Framework/components/Footer'
import { CssBaseline, ThemeProvider, Toolbar } from '@mui/material'
import Header from './Framework/components/Header'
import theme from './theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { RootProps } from './types/RootProps';
import { closeAlert } from './redux/slice/authSlice';
import AlertBox from './Framework/components/AlertBox';
import { allRouter } from "./allRoute"

const App = () => {
    console.log('app render...');
    const dispatch = useDispatch();
    const dark = useSelector((state: RootProps) => state.ui.dark);
    const type = useSelector((state: RootProps) => state.auth.profile?.type);
    const alert = useSelector((state: RootProps) => state.auth.alert);
    const handleClose = () => dispatch(closeAlert());
    const role = useSelector((state: RootProps) => state.auth.profile?.role);

    return (
        <ThemeProvider theme={theme({ dark, borderRadius: 5 })}>
            <CssBaseline />
            <AlertBox alert={alert} onClose={handleClose} />
            <RouterProvider router={allRouter({ type, role })}></RouterProvider>
        </ThemeProvider >
    )
}

export default App