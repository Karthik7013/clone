
import { Link } from "react-router-dom"
import PageNotFoundSvg from "../../assets/pages/404 error with a tired person-pana.svg"
import { Stack } from "@mui/material"
const PageNotFound = () => {
    return (
        <Stack sx={{ minHeight: '100dvh' }} direction="row" justifyContent='center' alignItems='center'>
            <div>
                <Link to="/">Home</Link><img width={'400px'} style={{ margin: 'auto' }} alt='oops page no found' src={PageNotFoundSvg} />
            </div>
        </Stack>
    )
}

export default PageNotFound