import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BotResources } from "../../service/api";




export const makeQuery = createAsyncThunk('bot/ask', async (payload: any, { rejectWithValue }) => {
    try {
        const res = await BotResources.post('/ask', payload);
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
                response: 'Hi ! How can i help you ?',
                candidate:'bot',
                timeStamp: new Date().toISOString()
            }
        ]
    },
    reducers: {
        pushMessage: (state, action:{payload:{t:string}  ,type:String}) => {
            state.conversation.push({ response: action.payload.t,candidate:'user', timeStamp: new Date().toISOString() })
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
                state.conversation.push({ response: action.payload.data.response,candidate:'bot', timeStamp: new Date().toISOString() })
            })
    }
})

export const { pushMessage } = botSlice.actions;
export default botSlice.reducer;