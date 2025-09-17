import { Box, keyframes, styled } from "@mui/material";


const pulse = keyframes`


    0% {
         transform: scale(1);
    }
    50% {
        transform: scale(0.8);
    }

    100% {
        transform: scale(1);
    }

`

const HeartBeat = styled(Box)(({ theme }) => ({
    width: 16,
    height: 16,
    borderRadius: '16px',
    backgroundColor: theme.palette.primary[theme.palette.mode],
    animation: `${pulse} 1.5s infinite ease-in-out`
}))

export default HeartBeat;