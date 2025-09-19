import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

type props = {
    children: React.ReactNode
}

const getSystemMode = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined' && window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        } else {
            return 'light';
        }
    }
    return 'light';
};

const CustomThemeProvider: React.FC<props> = (props: props): React.JSX.Element => {
    const { borderRadius, fontFamily, mode, primaryColor } = useSelector((state: RootState) => state.themeReducer);
    const newMode: 'light' | 'dark' | 'system' = mode === 'system' ? getSystemMode() : mode
    const newtheme = createTheme({
        spacing: 8,
        palette: {
            mode: newMode,
            primary: {
                main: primaryColor
            }
        },
        typography: {
            fontFamily
        },
        components: {
            MuiCardMedia: {
                styleOverrides: {
                    root: {
                        borderRadius
                    }
                }
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius
                    }
                }
            },
            MuiAlert: {
                defaultProps: {
                    variant: "filled"
                },
                styleOverrides: {
                    root: {
                        borderRadius
                    }
                }
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        borderRadius
                    }
                }
            }
        },
        shape: {
            borderRadius
        }
    })
    return <ThemeProvider theme={newtheme}>
        <CssBaseline />
        {props.children}
    </ThemeProvider>
}
export default CustomThemeProvider;