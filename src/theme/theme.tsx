import { alpha, createTheme, useTheme } from "@mui/material";
import { DataGridProps } from "@mui/x-data-grid"

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
    const theme = useTheme()
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
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 5px 16px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                    }
                }
            },
            MuiDataGrid: {
                styleOverrides: {
                    root: {
                        borderRadius: borderRadius,
                        overflow: 'hidden'
                    },
                    columnHeaders: {
                        backgroundColor: theme.palette.primary.main, // Header background color
                        // color: '#ffffff', // Header text color
                    },
                    row: {
                        '&:hover': {
                            backgroundColor: theme.palette.primary.light, // Row hover color
                        },
                    },
                },

            },
            MuiDrawer: {
                styleOverrides: {

                }
            },
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        minWidth: '24px',
                        marginRight: '0.9rem'
                    }
                }
            },

            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        borderRadius: theme.shape.borderRadius,
                        "&:hover": theme.palette.primary.main,
                        color: theme.palette.text.secondary,
                        textDecoration: 'none',
                        marginBottom: 3,
                        "&:active": {
                            backgroundColor: theme.palette.primary.main
                        }
                    }
                }
            },
            MuiLink: {
                styleOverrides: {
                    root: {
                        textDecoration: "none",
                        color: theme.palette.text.primary
                    }
                }
            }
        }
    })

}

export default theme;