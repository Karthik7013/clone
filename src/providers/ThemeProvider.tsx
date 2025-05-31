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
    const newMode: 'light' | 'dark' = mode === 'system' ? getSystemMode() : mode
    const newtheme = createTheme({
        palette: {
            mode: newMode
        },
        typography: {
            fontFamily: fontFamily,
            caption: {
                margin: 0,
                fontSize: '0.65rem',  // Increased slightly for readability,
            },
            h6: {
                fontSize: '0.95rem',  // Making h5 slightly larger than h6 for hierarchy,
                fontWeight: 300
            },
            h5: {
                fontSize: '1rem',  // Making h5 slightly larger than h6 for hierarchy,
                fontWeight: 300
            },
            h4: {
                fontSize: '1.25rem',  // A bit more prominent for heading structure,
                fontWeight: 300
            },
            h3: {
                fontSize: '1.5rem',  // Increased for better visual importance,
                fontWeight: 300
            },
            h2: {
                fontSize: '1.85rem',  // A large enough size to stand out,
                fontWeight: 400
            },
            h1: {
                fontSize: '2rem',  // Largest for main titles,
                fontWeight: 500
            },
            body1: {
                fontSize: '1rem'
            },
            body2: {
                fontSize: '0.9rem'
            }
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