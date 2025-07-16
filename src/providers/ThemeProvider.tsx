import { createTheme, ThemeProvider, CssBaseline, alpha, useTheme } from "@mui/material";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

type props = {
    children: React.ReactNode
}
const getSystemMode = (): 'light' | 'dark' => "dark"
const CustomThemeProvider: React.FC<props> = (props: props): React.JSX.Element => {
    const theme = useTheme();
    const { borderRadius, fontFamily, mode } = useSelector((state: RootState) => state.themeReducer);
    const newMode: 'light' | 'dark' | 'system' = mode === 'system' ? getSystemMode() : mode
    const newtheme = createTheme({
        palette: {
            mode: newMode
        },

        typography: {
            fontFamily: fontFamily,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 600,

            h1: {
                fontSize: '3.5rem',
                fontWeight: 500,
                lineHeight: 1.2,
            },
            h2: {
                fontSize: '2.75rem',
                fontWeight: 500,
                lineHeight: 1.3,
            },
            h3: {
                fontSize: '2.25rem',
                fontWeight: 500,
                lineHeight: 1.4,
            },
            h4: {
                fontSize: '1.75rem',
                fontWeight: 500,
                lineHeight: 1.5,
            },
            h5: {
                fontSize: '1.5rem',
                fontWeight: 400,
                lineHeight: 1.5,
            },
            h6: {
                fontSize: '1.25rem',
                fontWeight: 400,
                lineHeight: 1.5,
            },
            body1: {
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.6,
            },
            body2: {
                fontSize: '0.875rem',
                fontWeight: 400,
                lineHeight: 1.6,
            },
            caption: {
                fontSize: '0.75rem',
                fontWeight: 400,
                lineHeight: 1.4,
            },
            overline: {
                fontSize: '0.75rem',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '1px',
            },
            button: {
                fontSize: '0.875rem',
                fontWeight: 500,
                textTransform: 'uppercase',
            },
        },

        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius
                    }
                }
            },
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
                        border: `1px solid ${newMode ? '#ffffff21' : theme.palette.divider}`,
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
            // MuiDataGrid: {
            //     styleOverrides: {
            //         root: {
            //             borderRadius: borderRadius,
            //             overflow: 'hidden',
            //             // backgroundColor: theme.palette.background.default
            //         },
            //         columnHeader: {
            //             backgroundColor: theme.palette.primary.light,
            //             color: theme.palette.background.default
            //         },
            //         row: {
            //             '&:hover': {
            //                 backgroundColor: alpha(theme.palette.primary.dark, 0.2), // Row hover color
            //             },
            //         },
            //     },
            // },
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
                        marginRight: 0
                    }
                }
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        borderRadius,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.common.white,
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
                    root: {
                        // fontSize: '0.1em'
                    }

                }
            },
            MuiAlert: {
                styleOverrides: {
                    root: {
                        color: theme.palette.background.paper
                    }
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
            },
            MuiCardActionArea: {
                styleOverrides: {
                    root: {
                        borderRadius,
                        overflow: 'hidden'
                    }
                }
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        borderRadius
                    }
                }
            },
            MuiSelect: {
                styleOverrides: {
                    root: {
                        borderRadius
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        backdropFilter: 'blur(2px)'
                    }
                }
            }
        }
    })
    return <ThemeProvider theme={newtheme}>
        <CssBaseline />
        {props.children}
    </ThemeProvider>
}
export default CustomThemeProvider;