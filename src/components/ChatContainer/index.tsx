import { Box, Chip, Container, List, Stack, Typography } from "@mui/material";
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
// import ChatLoader from "../ChatLoad";
import { useRef } from "react";
import Conversation from "../Conversation";
import ArrowUp from "../../assets/icons/arrow-up";

const ChatContainer = () => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const conversation = useSelector((state: RootState) => state.chatbotReducer.conversation);
    return <Container maxWidth="md" sx={{
        flexGrow: 1
    }}>
        {
            !conversation.length ?
                <Box height={'100%'} display='flex' margin={'auto'} alignItems='center' flexDirection='column' justifyContent='space-between'>
                    <Stack gap={2} justifyContent={'center'} width={'100%'} flexGrow={1}>
                        <Typography
                            variant="h5"
                            fontWeight={600}
                            textAlign="center"
                            sx={{
                                background: 'linear-gradient(0deg, #4285F4, #9B72CB, #FF5CAA)', // Gemini-like gradient
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            🖐 Hi there<br /> how can I help you today?
                        </Typography>
                        <Stack direction='row' justifyContent='center' flexWrap='wrap' gap={2} sx={{ mx: 'auto', maxWidth: '90%', mt: 2 }}>
                            <Chip clickable variant='outlined' color='primary' icon={<CodeRoundedIcon />} label="Code" />
                            <Chip variant='outlined' color='success' icon={<ArrowUp />} label="Summarize" />
                            <Chip variant='outlined' color='secondary' icon={<LocalDiningRoundedIcon />} label="Recipe" />
                            <Chip variant='outlined' color='info' icon={<FlightTakeoffRoundedIcon />} label="Travel" />
                            <Chip variant='outlined' color='error' icon={<MovieRoundedIcon />} label="Movies" />
                        </Stack>
                    </Stack>
                </Box> :
                <List>
                    {conversation.map((content, _) => {
                        return <Conversation key={_} candidate={content.candidate} response={content.response} timeStamp={content.timeStamp} />
                    })}
                    {/* {isLoading && <ChatLoader />} */}
                    <Box ref={messagesEndRef} />
                </List>
        }
    </Container>
}
export default ChatContainer;