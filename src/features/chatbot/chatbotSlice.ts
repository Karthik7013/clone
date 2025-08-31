// actions/chatActions.js or inside your slice
import { createSlice } from '@reduxjs/toolkit';


type Message = { type: 'user' | 'assistant', message: string };



type initialProps = {
    messages: Message[],
    isLoading: boolean,
    error: null | Error
}
const initialState: initialProps = {
    error: null,
    isLoading: false,
    messages: []
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action: { payload: { type: 'user' | 'assistant', message: string } }) => {
            const { payload } = action;
            state.messages.push(payload)
        },
        startStreaming: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        streamChunk: (state, action: { payload: string }) => {
            const { payload } = action;
            const lastMsg = state.messages[state.messages.length - 1];
            if (lastMsg && lastMsg.type === 'assistant') {
                lastMsg.message += payload;
            } else {
                state.messages.push({ type: 'assistant', message: payload });
            }
        },
        streamComplete: (state) => {
            state.isLoading = false;
        },
        streamError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        newChat: (state) => {
            state.messages = [];
        }
    },
});

export const {
    addMessage,
    startStreaming,
    streamChunk,
    streamComplete,
    streamError,
    newChat
} = chatSlice.actions;

export default chatSlice.reducer;