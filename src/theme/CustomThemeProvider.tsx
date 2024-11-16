import { ThemeProvider } from '@emotion/react';

import React from 'react';
import theme from './theme';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type themeProviderProps = {
    children: React.ReactNode,
}

const CustomThemeProvider = (props: themeProviderProps) => {
    const dark = useSelector((state: RootState) => state.ui.dark);
    const borderRadius = useSelector((state: RootState) => state.ui.borderRadius);
    const fontFamily = useSelector((state: RootState) => state.ui.fontFamily);
    return (
        <ThemeProvider theme={theme({ dark, borderRadius, fontFamily })}>
            {
                props.children
            }
        </ThemeProvider>
    )
}

export default React.memo(CustomThemeProvider);