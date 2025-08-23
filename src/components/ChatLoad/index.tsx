import { Box, keyframes, ListItem, Skeleton, Stack } from "@mui/material";
import AnimatedWrapper from "../AnimatedWrapper";
import GeminiIcon from "../../assets/icons/GeminiIcon";
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(180deg);
  }
  60% {
    transform: rotate(200deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const ChatLoader = () => {
    return <ListItem>
        <Box sx={{ borderRadius: '10px', overflowY: 'auto', width: '100%' }}>
            <AnimatedWrapper sx={{ width: '26px', height: '26px' }} animation={rotate} duration="2s" timingFunction="ease-in-out">
                <GeminiIcon />
            </AnimatedWrapper>
            <Box position='relative' mb={1}>
                <Stack>
                    <Skeleton animation="wave" width={'25%'} />
                    <Skeleton animation="wave" width={'50%'} />
                    <Skeleton animation="wave" width={'70%'} />
                    <Skeleton animation="wave" width={'70%'} >
                        Karthik
                    </Skeleton>
                </Stack>
            </Box>
        </Box>
    </ListItem >
}
export default ChatLoader;