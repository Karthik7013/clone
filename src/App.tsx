import React from 'react'
import { RouterProvider } from 'react-router-dom';

//============ MUI IMPORTS ==============>
import { CssBaseline, LinearProgress } from '@mui/material';

//============ REDUX IMPORTS ==============>
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from './redux/slice/authSlice';

//============ PROP TYPES IMPORTS ==============>
import { RootProps } from './types/RootProps';

//============ PROJECT IMPORTS ==============>
import AlertBox from './Framework/components/AlertBox';
import { allRouter } from "./allRoute"
import CustomizePallete from './Framework/components/CustomizePallete';
import CustomThemeProvider from './theme/CustomThemeProvider';

const App = () => {
    console.log('app render...');
    const dispatch = useDispatch();
    const dark = useSelector((state: RootProps) => state.ui.dark);
    const borderRadius = useSelector((state: RootProps) => state.ui.borderRadius);
    const fontFamily = useSelector((state: RootProps) => state.ui.fontFamily);
    const alert = useSelector((state: RootProps) => state.auth.alert);
    const handleClose = () => dispatch(closeAlert());
    const profile = useSelector((state: RootProps) => state.auth.profile);

    const themeProps = {
        dark,
        fontFamily,
        borderRadius,
        size: 44
    }

    return (
        <CustomThemeProvider {...themeProps}>
            <CssBaseline />
            {/* <AlertBox alert={alert} onClose={handleClose} /> */}
            <React.Suspense fallback={<LinearProgress />}>
                <RouterProvider router={allRouter(profile)} />
            </React.Suspense>
            <CustomizePallete />
        </CustomThemeProvider>
    )
}

export default App