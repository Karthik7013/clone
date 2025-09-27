import { Avatar, Box, Stack, Typography } from "@mui/material";
// import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
// import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
// import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
// import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
// import ArrowUp from '../../assets/icons/arrow-up';
import { useEffect } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Incognito from "../../assets/icons/Incognito";
import ScrollText from "../ScrollText";

const Hero = () => {
    const filters = useSelector((state: RootState) => state.urlReducer)
    useEffect(() => {
        const currentUrl = new URL(window.location.href);
        Object.keys(filters).forEach(key => {
            if (filters.mode) {
                currentUrl.searchParams.set(key, filters['mode']);
            } else {
                currentUrl.searchParams.delete(key); // Remove if empty/null
            }
        });
        window.history.pushState({}, '', currentUrl);
    }, [filters])

    return <Box height={'100%'} mb={6} display='flex' alignItems='center' flexDirection='column' justifyContent='space-between'>

        <Stack gap={2} justifyContent={'center'} width={'100%'} flexGrow={1}>
            {
                !filters.mode ? <>
                    <ScrollText />
                </> :

                    <Stack gap={2} alignItems={'center'}>
                        <Avatar>
                            <Incognito />
                        </Avatar>
                        <Typography
                            variant="h5"
                            fontWeight={600}
                            textAlign="center"

                        // sx={{
                        //     background: 'linear-gradient(0deg, #4285F4, #9B72CB, #FF5CAA)', // Gemini-like gradient
                        //     WebkitBackgroundClip: 'text',
                        //     WebkitTextFillColor: 'transparent'
                        // }}
                        >
                            Temporary Chat
                            <br />
                            This chat won't appear in history.
                        </Typography>
                    </Stack>
            }
        </Stack>
    </Box>
}
export default Hero;