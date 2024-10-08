import React from "react"
import { Link, useTheme } from "@mui/material"
import PageNotFoundSvg from "../../assets/pages/404 error with a tired person-pana.svg"
import { Stack } from "@mui/material"
const PageNotFound = () => {
    const theme = useTheme();
    return (
        <Stack sx={{ minHeight: '100dvh' }} direction="row" justifyContent='center' alignItems='center'>
            <div>
                <Link href="/">Home</Link>
                <img width={'400px'} alt='oops page no found' src={PageNotFoundSvg} />
            </div>
        </Stack>
    )
}

export default PageNotFound