import { Box, Container, List } from "@mui/material";
import Scrollbar from "../Scrollbar/Scrollbar";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Hero from "../Hero";
import { useRef } from "react";
import Conversation from "../Conversation";
const ChatContainer = () => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { messages } = useSelector((state: RootState) => state.chat);
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
// const scrollToBottom = () => {
//     if (messagesEndRef?.current?.scrollIntoView) {
//         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }
// };
