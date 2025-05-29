import { Link } from "@mui/material"
import PageNotFoundSvg from "../../assets/images/pagenotfound.svg"
import { Stack } from "@mui/material"
const PageNotFound = () => {
    // const theme = useTheme();
    return (
        <Stack sx={{ minHeight: '100dvh' }} direction="row" justifyContent='center' alignItems='center'>
            <div>
                <Stack justifyContent='center' rowGap={3} >
                    <img style={{ margin: 'auto' }} width={'50%'} alt='oops page no found' src={PageNotFoundSvg} />
                    <Link margin='auto' href="/">Home</Link>
                </Stack>

            </div>
        </Stack>
    )
}

export default PageNotFound