import { Box, Container, List, Stack } from "@mui/material";
import Scrollbar from "../Scrollbar/Scrollbar";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Hero from "../Hero";
import { useEffect, useRef } from "react";
import Conversation from "../Conversation";
import HeartBeat from "../Loader/HeartBeat";
const ChatContainer = () => {
    const { thinking, isLoading } = useSelector((state: RootState) => state.chat);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { messages } = useSelector((state: RootState) => state.chat);
    const scrollToBottom = () => {
        if (messagesEndRef?.current?.scrollIntoView) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };


    useEffect(() => {
        scrollToBottom();
    }, [messages])
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
                    {isLoading && <Stack alignItems={'center'} gap={1} direction="row" px={2}>
                        <HeartBeat />{thinking && <span>thinking...</span>}
                    </Stack>
                    }
                    <Box ref={messagesEndRef} />
                </List>
            }
        </Container>
    </Scrollbar>
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

