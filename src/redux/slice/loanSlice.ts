import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { authService } from "../../service/api";




export const sendOtp = createAsyncThunk('auth/sendOtp', async (payload: string, { rejectWithValue }) => {
    try {
        const reqObject = {
            sendTo: {
                "mobile": payload,
                "email": ""
            },
            "lob": "sample"
        }
        const res = await authService.post('/sendOtp', reqObject);
        return { status: res.status, data: res.data.data };
    } catch (error) {
        if (error.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        return rejectWithValue({ status: error.response.status, message: error.response.data.message });
    }
})


const loanSlice = createSlice({
    name: 'loan',
    initialState: {
        otpModal: false,
        sendOtp: {
            loading: false,
            data: [],
            alert: {
                message: '',
                state: false,
                type: undefined
            }
        },
        verifyOtp: {
            loading: false,
            data: [],
            alert: {
                message: '',
                state: false,
                type: undefined
            }
        },
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(sendOtp.pending, (state) => {
            state.sendOtp.loading = true
        })
        builder.addCase(sendOtp.rejected, (state, action) => {
            state.sendOtp.loading = false
        })
        builder.addCase(sendOtp.fulfilled, (state, action) => {
            state.sendOtp.loading = false;
            state.otpModal = true
        })
    }
})

export default loanSlice.reducer;