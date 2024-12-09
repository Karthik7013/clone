import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BotResources } from "../../service/api";




export const makeQuery = createAsyncThunk('bot/ask', async (payload:any, { rejectWithValue }) => {
    try {
        const res = await BotResources.post('/ask');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        if (error.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        return rejectWithValue({ status: error.response.status, message: error.response.data.message });
    }
})


const botSlice = createSlice({
    name: 'chat',
    initialState: {
        loading: false,
        conversation: [
            {
                botResponse: null,
                userMessage: 'No Thanks',
                timeStamp: new Date()
            }
        ]
    },
    reducers: {

    }
    ,
    extraReducers: (builder) => {
        builder.addCase(makeQuery.pending, (state) => {
            state.loading = true;
        })
            .addCase(makeQuery.rejected, (state, action) => {
                console.log(action, 'error')
                state.loading = false;
            }).addCase(makeQuery.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
            })
        }
})


export default botSlice.reducer;