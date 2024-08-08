import { alpha, createTheme, useTheme } from "@mui/material";

type customStylesProps = {
    dark: boolean,
    borderRadius: number,
    fontFamily: string
}

const theme = (customStyles: customStylesProps) => {
    const { dark, borderRadius, fontFamily } = customStyles;
    return createTheme({
        palette: {
            mode: dark ? 'dark' : 'light',
            background: {
                default: dark ? '#020f16' : '#FFFDFB',
                paper: dark ? '#020f16' : '#FFFDFB'
            },
            primary: {
                main: '#23a8fa',
                contrastText: '#fff'
            },
        },
        shape: {
            borderRadius: borderRadius
        },
        typography: {
            fontFamily: fontFamily,
        },
        components: {
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        '&.Mui-expanded': {
                            margin: 0
                        }
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        // backgroundColor: dark ? "#003f67" : '#23a8fa'
                    }
                }
            },
            MuiListItemText: {
                styleOverrides: {
                    root: {
                        color: dark ? '#fff' : '#040D12',
                    }
                }
            }
        },
    })

}

export default theme;