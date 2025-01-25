import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BotResources } from "../../service/api";
import { AxiosError } from "axios";




export const makeQuery = createAsyncThunk('bot/ask', async (payload: any, { rejectWithValue }) => {
    try {
        const res = await BotResources.post('/ask', payload);
        if (res.data.success) {
            return {
                success: res.data.success,
                message: res.data.message,
                status: res.data.status,
                data: res.data.data,
                timestamp: res.data.timestamp
            };
        }
        return rejectWithValue({
            success: false,
            message: "Unexpected error occurred",
            status: res.status,
            data: null,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        if (error instanceof AxiosError) {
            let errorMessage = "Something went wrong";
            if (error.message === 'Network Error') {
                errorMessage = "Network Error: Please check your connection";
            } else if (error.response?.data?.message) {
                errorMessage = error.response?.data?.message;
            }
            return rejectWithValue({
                success: false,
                message: errorMessage,
                status: error.response?.status ?? 500,
                data: null,
                timestamp: new Date().toISOString(),
            });
        }
        return rejectWithValue({
            success: false,
            message: "An unknown error occurred",
            status: 500,
            data: null,
            timestamp: new Date().toISOString()
        });
    }
})

type conversation = {
    response: String,
    candidate: 'bot' | 'user',
    timeStamp: String
}
type initialProps = {
    loading: boolean,
    conversation: conversation[]
}


const initialState: initialProps = {
    loading: false,
    conversation: [
        {
            response: 'Hi ! How can i help you ?',
            candidate: 'bot',
            timeStamp: new Date().toISOString()
        },
    ]
}


const botSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        pushMessage: (state, action: { payload: { t: string }, type: String }) => {
            state.conversation.push({ response: action.payload.t, candidate: 'user', timeStamp: new Date().toISOString() })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(makeQuery.pending, (state, action) => {
            state.loading = true;
        })
            .addCase(makeQuery.rejected, (state, action) => {
                state.loading = false;
            }).addCase(makeQuery.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload.data.response, 'see final response')
                state.conversation.push({ response: action.payload.data.response, candidate: 'bot', timeStamp: new Date().toISOString() })
            })
    }
})

export const { pushMessage } = botSlice.actions;
export default botSlice.reducer;