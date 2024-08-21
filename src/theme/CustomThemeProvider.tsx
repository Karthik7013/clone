import { ThemeProvider } from '@emotion/react';

import React from 'react';
import theme from './theme';

type themeProviderProps = {
    children: React.ReactNode,
    dark: boolean,
    borderRadius: number,
    fontFamily: string
}

const CustomThemeProvider = (props: themeProviderProps) => {
    const { dark, borderRadius, fontFamily } = props;
    return (
        <ThemeProvider theme={theme({ dark, borderRadius, fontFamily })}>
            {
                props.children
            }
        </ThemeProvider>
    )
}

export default React.memo(CustomThemeProvider);