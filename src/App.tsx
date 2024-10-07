import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom';

//============ MUI IMPORTS ==============>
import { CssBaseline, LinearProgress } from '@mui/material';

//============ REDUX IMPORTS ==============>
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert, getProfile } from './redux/slice/authSlice';

//============ PROP TYPES IMPORTS ==============>
import { RootProps } from './types/RootProps';

//============ PROJECT IMPORTS ==============>
import AlertBox from './Framework/components/AlertBox';
import { allRouter } from "./allRoute"
import CustomizePallete from './Framework/components/CustomizePallete';
import CustomThemeProvider from './theme/CustomThemeProvider';
import { handleCookieConsent } from './redux/slice/uiSlice';
import { AppDispatch } from './redux/store';

const App = () => {
    const customizePalleteOpen = useSelector((state: RootProps) => state.ui.customizePalleteOpen)
    const dispatch: AppDispatch = useDispatch();
    const dark = useSelector((state: RootProps) => state.ui.dark);
    const borderRadius = useSelector((state: RootProps) => state.ui.borderRadius);
    const fontFamily = useSelector((state: RootProps) => state.ui.fontFamily);
    const alert = useSelector((state: RootProps) => state.auth.alert);
    const handleClose = () => dispatch(closeAlert());
    const profile = useSelector((state: RootProps) => state.auth.profile);
    const access_token = sessionStorage.getItem('access-token');



    useEffect(() => {
        const cookieConsentState = document.cookie.split('; ').find(row => row.startsWith('cookie-accept'));
        if (!cookieConsentState) {
            dispatch(handleCookieConsent(true))
        }
    }, []);


    useEffect(() => {
        if (access_token) {
            dispatch(getProfile({}));
        }
    }, [])

    const themeProps = {
        dark,
        fontFamily,
        borderRadius,
        size: 44
    }
    const customize = {
        borderRadius,
        fontFamily
    }

    return (
        <CustomThemeProvider {...themeProps}>
            <CssBaseline />
            {/* <AlertBox alert={alert} onClose={handleClose} /> */}
            <React.Suspense fallback={<LinearProgress />}>
                <RouterProvider router={allRouter(profile)} />
            </React.Suspense>
            <CustomizePallete isOpen={customizePalleteOpen} customize={customize} />
        </CustomThemeProvider>
    )
}

export default App