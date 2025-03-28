import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom';

//============ MUI IMPORTS ==============>
import { CssBaseline, LinearProgress } from '@mui/material';

//============ REDUX IMPORTS ==============>
import { useDispatch } from 'react-redux';

//============ PROJECT IMPORTS ==============>
import { allRouter } from "./allRoute"
import CustomizePallete from './Framework/components/CustomizePallete';
import CustomThemeProvider from './theme/CustomThemeProvider';
import { handleCookieConsent } from './redux/slice/uiSlice';
import { AppDispatch } from './redux/store';

const App = () => {
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        const cookieConsentState = document.cookie.split('; ').find(row => row.startsWith('cookie-accept'));
        if (!cookieConsentState) {
            dispatch(handleCookieConsent(true))
        }
    }, []);

    return (
        <CustomThemeProvider>
            <CssBaseline />
            <React.Suspense fallback={<LinearProgress />} >
                <RouterProvider future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true
                } as any
                } router={allRouter()} />
            </React.Suspense>
            <CustomizePallete />
        </CustomThemeProvider>
    )
}

export default App;
