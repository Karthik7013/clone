import React, { useCallback, useEffect, useMemo } from 'react'
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
import { AppDispatch, RootState } from './redux/store';

const App = () => {
    const customizePalleteOpen = useSelector((state: RootState) => state.ui.customizePalleteOpen)
    const dispatch: AppDispatch = useDispatch();
    const dark = useSelector((state: RootState) => state.ui.dark);
    const borderRadius = useSelector((state: RootState) => state.ui.borderRadius);
    const fontFamily = useSelector((state: RootState) => state.ui.fontFamily);
    const profile = useSelector((state: RootState) => state.auth.profile);
    const access_token = sessionStorage.getItem('access-token');

    const alert = useSelector((state: RootState) => state.auth.alert);


    const handleCloseAlert = () => dispatch(closeAlert());

    useEffect(() => {
        const cookieConsentState = document.cookie.split('; ').find(row => row.startsWith('cookie-accept'));
        if (!cookieConsentState) {
            dispatch(handleCookieConsent(true))
        }
    }, []);


    useEffect(() => {
        if (access_token) {
            console.log('re login')
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
            <React.Suspense fallback={<LinearProgress />}>
                <RouterProvider router={allRouter(profile)} />
            </React.Suspense>
            <CustomizePallete isOpen={customizePalleteOpen} customize={customize} />
            <AlertBox alert={alert} onClose={handleCloseAlert} />
        </CustomThemeProvider>
    )
}

export default App