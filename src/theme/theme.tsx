import { createTheme } from "@mui/material";

type customStylesProps = {
    dark: boolean,
    borderRadius: number
}

const theme = (customStyles: customStylesProps) => {
    return createTheme({
        palette: {
            mode: customStyles.dark ? 'dark' : 'light',
        },
        shape: {
            borderRadius: customStyles.borderRadius
        },
        typography: {
            fontFamily: 'Montserrat'
        }
    })

}

export default theme;


