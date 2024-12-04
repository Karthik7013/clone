import { alpha, colors, createTheme, useTheme } from "@mui/material";
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
    } :


        {

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
                    },
                }
            },
            MuiListItemText: {
                styleOverrides: {
                    root: {
                        color: 'inherit'
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
                        border: `1px solid ${dark ? '#ffffff21' : theme.palette.divider}`,
                        boxShadow: 'none',
                        borderRadius,
                        overflow: 'hidden'
                    }
                }
            },
            MuiCardMedia: {
                styleOverrides: {
                    root: {
                        borderRadius,
                    }
                },

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
                    root: {
                        borderRadius
                    }
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
                        borderRadius,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.common.white
                        },
                        textDecoration: 'none',
                        marginBottom: 3,
                        "&:active": {
                            backgroundColor: theme.palette.primary.main,
                        }
                    }
                }
            },
            MuiLink: {
                styleOverrides: {
                    root: {
                        textDecoration: "none",
                        // color: theme.palette.common.black
                    }
                }
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        borderRadius
                    },
                    outlined: {
                        '&.MuiChip-colorPrimary': {
                            backgroundColor: alpha(theme.palette.primary.light, 0.15)
                        },
                        '&.MuiChip-colorError': {
                            backgroundColor: alpha(theme.palette.error.light, 0.15)
                        },
                        '&.MuiChip-colorWarning': {
                            backgroundColor: alpha(theme.palette.warning.light, 0.15)
                        },
                        '&.MuiChip-colorSuccess': {
                            backgroundColor: alpha(theme.palette.success.light, 0.15)
                        }
                    },

                }
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        '&.MuiMenu-list': { padding: '5px' },
                        borderRadius
                    }
                }
            },
            MuiMenuList: {
                styleOverrides: {
                    root: {
                        borderRadius
                    }
                }
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        borderRadius,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.common.white
                        },
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius
                    },

                }
            },
            MuiListSubheader: {
                styleOverrides: {
                    root: {
                        position: 'static',
                        background: 'none',
                    }
                }
            }
        }
    })

}

export default theme;