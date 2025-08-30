import { Box, ListItem, Skeleton, Stack } from "@mui/material";
import GeminiIcon from "../../assets/icons/GeminiIcon";

const ChatLoader = () => {
    return <ListItem>
        <Box sx={{ borderRadius: '10px', overflowY: 'auto', width: '100%' }}>
            <GeminiIcon />
            <Box position='relative' mb={1}>
                <Stack>
                    <Skeleton animation="pulse" sx={{ p: 1 }}>Thinking...
                    </Skeleton>
                    <Skeleton animation="wave" width={'50%'} />
                    <Skeleton animation="wave" width={'70%'} />
                </Stack>
            </Box>
        </Box>
    </ListItem>
}
export default ChatLoader;