import { alpha, createTheme, useTheme } from "@mui/material";

type customStylesProps = {
    dark: boolean,
    borderRadius: number,
    fontFamily: string
}
declare module '@mui/material/styles' {
    interface Palette {
        custom?: {
            blue: string;
            green: string;
            orange: string;
        };
    }

    interface PaletteOptions {
        custom?: {
            blue?: string;
            green?: string;
            orange?: string;
        };
    }
}

const token = (dark: boolean) => ({
    ...(dark ? {
        primary: {
            100: '#23a8fa'
        }
    } : {

    })
})

const theme = (customStyles: customStylesProps) => {
    const { dark, borderRadius, fontFamily } = customStyles;
    const colors = token(!dark);
    console.log(colors)
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
            custom: {
                blue: '#23a8fa'
            }
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
            },
            MuiSkeleton: {
                styleOverrides: {
                    root: {
                        borderRadius
                    }
                }
            }
        },
    })

}

export default theme;