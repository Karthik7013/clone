import { createSlice } from "@reduxjs/toolkit";


type conversation = {
    response: string,
    candidate: 'bot' | 'user',
    timeStamp: string
}
type initialProps = {
    loading: boolean,
    conversation: conversation[]
}

const initialState: initialProps = {
    loading: false,
    conversation: []
}

const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        pushMessage: (state, action: { payload: { t: string, canditate: 'user' | 'bot', timeStamp?: string }, type: string }) => {
            const { payload } = action
            state.conversation.push(
                {
                    response: payload.t,
                    candidate: payload.canditate,
                    timeStamp: payload.timeStamp || new Date().toISOString()
                }
            )
        }
    }
})

export const { pushMessage } = chatbotSlice.actions;
export default chatbotSlice.reducer;