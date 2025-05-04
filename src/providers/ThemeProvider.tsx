import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
type props = {
    children: React.ReactNode
}
const CustomThemeProvider = (props: props) => {
    const theme = createTheme({
        palette: {
            mode: "light"
        },
        typography: {
            fontFamily: "Poppins",
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

        }
    })
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
    </ThemeProvider>
}
export default CustomThemeProvider;