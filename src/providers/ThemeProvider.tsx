import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

type props = {
    children: React.ReactNode
}
const CustomThemeProvider: React.FC<props> = (props: props): React.JSX.Element => {
    const theme = createTheme({
        palette: {
            mode: "dark"
        },
        typography: {
            fontFamily: "Poppins",
        }
    })
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
    </ThemeProvider>
}
export default CustomThemeProvider;