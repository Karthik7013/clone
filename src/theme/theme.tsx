import { alpha, createTheme, useTheme } from "@mui/material";
import { DataGridProps } from "@mui/x-data-grid"
import '@mui/x-data-grid';

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


declare module '@mui/material/styles' {
    interface Components {
        MuiDataGrid?: {
            styleOverrides?: any;
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
                            margin: 0,
                        }
                    },

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
                        overflow: 'hidden',
                        // backgroundColor: theme.palette.background.default
                    },
                    columnHeader: {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.background.default
                    },
                    row: {
                        '&:hover': {
                            backgroundColor: alpha(theme.palette.primary.dark, 0.2), // Row hover color
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
                        borderRadius: borderRadius,
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
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        // Default background (transparent if no color is selected)
                        // backgroundColor: 'transparent',  // Default transparent background


                        // Adjust opacity based on the theme palette color

                    },
                }
            },

            // MuiMenu: {
            //     styleOverrides: {
            //         root: {
            //             '.MuiList-root': {
            //                 border: `1px solid ${alpha(theme.palette.background.default, 0.1)}`,
            //                 borderRadius: theme.shape.borderRadius * 2,
            //                 backgroundColor: alpha(theme.palette.primary.main,0.4),
            //                 color:theme.palette.primary.contrastText
            //             }
            //         }
            //     }
            // }
        }
    })

}

export default theme;