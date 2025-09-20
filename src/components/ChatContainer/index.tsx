import { Box, Button, Collapse, Container, List, Stack, Theme } from "@mui/material";
import Scrollbar from "../Scrollbar/Scrollbar";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Hero from "../Hero";
import { useRef, useState } from "react";
import Conversation from "../Conversation";
import HeartBeat from "../Loader/HeartBeat";
import ReactMarkdown from "../MarkdownRender";
import { sampleMarkdown } from "../../features/chatbot/chatbotSlice";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
const ChatContainer = () => {
    const [think, setThink] = useState(false);
    const { thinking, isLoading } = useSelector((state: RootState) => state.chat);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { messages } = useSelector((state: RootState) => state.chat);
    // const scrollToBottom = () => {
    //     if (messagesEndRef?.current?.scrollIntoView) {
    //         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };



    return <Scrollbar sx={{
        flexGrow: !messages.length ? 0 : 1, transition: 'flex .2s linear'
    }}>
        <Container maxWidth="md">
            {!messages.length ?
                <Hero /> :
                <List sx={{ display: 'flex', gap: 2, flexDirection: 'column', py: 2, height: '100%', position: 'relative' }}>
                    {messages.map((message, _) => {
                        return <Conversation key={_} candidate={message.type} response={message.message} />
                    })}
                    {!isLoading && <Box px={2}>
                        <Stack sx={{
                            position: "sticky",
                            top: 0,
                            zIndex: 99,
                            bgcolor: "background.paper"
                        }} alignItems={'center'} gap={1} direction="row">
                            <HeartBeat />
                            <Collapse orientation="horizontal" unmountOnExit in={!thinking}>
                                <Button sx={{
                                    textWrap: 'nowrap'
                                }} onClick={() => setThink((prev: boolean) => !prev)} size="small" endIcon={<ExpandMoreRoundedIcon sx={{
                                    transform: think ? 'rotate(0deg)' : 'rotate(270deg)'
                                }} />}>thinking... (5sec)</Button>
                            </Collapse>

                        </Stack>
                        <Box component={Collapse} in={think} p={2}
                            sx={{
                                borderLeft: (theme: Theme) => `2px solid ${theme.palette.divider}`,
                                maxHeight: '600px',
                                overflow:'auto'
                            }}
                        >
                            <Box borderRadius={1}>
                                <ReactMarkdown>
                                    {
                                        sampleMarkdown
                                    }
                                </ReactMarkdown>
                            </Box>

                        </Box>
                    </Box>
                    }
                    <Box ref={messagesEndRef} />
                </List>
            }
        </Container>
    </Scrollbar >
}
export default ChatContainer;
{/* <IconButton onClick={scrollToBottom} size='small' sx={{
    position: 'sticky',
    width: 'fit-content',
    margin: 'auto',
    bottom: 10,
    zIndex: 9999,
    bgcolor: muiTheme.palette.primary[mode]
}}>
    <ArrowDownwardRounded />
</IconButton> */}

