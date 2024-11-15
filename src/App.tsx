import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom';

//============ MUI IMPORTS ==============>
import { CssBaseline, LinearProgress } from '@mui/material';

//============ REDUX IMPORTS ==============>
import { useDispatch, useSelector } from 'react-redux';

//============ PROP TYPES IMPORTS ==============>

//============ PROJECT IMPORTS ==============>
import { allRouter } from "./allRoute"
import CustomizePallete from './Framework/components/CustomizePallete';
import CustomThemeProvider from './theme/CustomThemeProvider';
import { handleCookieConsent } from './redux/slice/uiSlice';
import { AppDispatch, RootState } from './redux/store';

const App = () => {
 
    console.log('apprenders')
    const customizePalleteOpen = useSelector((state: RootState) => state.ui.customizePalleteOpen)
    const dispatch: AppDispatch = useDispatch();
    const dark = useSelector((state: RootState) => state.ui.dark);
    const borderRadius = useSelector((state: RootState) => state.ui.borderRadius);
    const fontFamily = useSelector((state: RootState) => state.ui.fontFamily);

    useEffect(() => {
        const cookieConsentState = document.cookie.split('; ').find(row => row.startsWith('cookie-accept'));
        if (!cookieConsentState) {
            dispatch(handleCookieConsent(true))
        }
    }, []);

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
                <RouterProvider router={allRouter()} />
            </React.Suspense>
            <CustomizePallete isOpen={customizePalleteOpen} customize={customize} />
        </CustomThemeProvider>
    )
}

export default App