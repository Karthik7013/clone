import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { smsService } from "../../service/api";
import { alertProps } from "../../types/UiProps/uiProps";



const initialState: {
    otpModal: boolean,
    sendOtp: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    verifyOtp: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    reqObject: null | any
} = {
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
    reqObject: null
}
export const sendOtp = createAsyncThunk('sms/sendOtp', async (payload: {
    email: string,
    name: string,
    method: "SEND",
    phone: string,
    referBy: string | null,
    refered_by_employee: string | null,
    refered_by_agent: string | null
}, { rejectWithValue }) => {
    try {
        const res = await smsService.post('/sendOtp', payload);
        return { status: res.status, data: res.data.message };
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.message === 'Network Error') {
                return rejectWithValue({ message: "Oops! Something went wrong" });
            }
            const status = error.response?.status ?? 500;
            const message = error.response?.data?.message ?? "Unexpected error occurred";

            return rejectWithValue({ status, message });
        }

        // Fallback for non-Axios errors
        return rejectWithValue({ message: "An unknown error occurred" });
    }
})

export const verifyOtp = createAsyncThunk('sms/verifyOtp', async (payload: {
    otp: number,
    email: string,
    method: "VERIFY"
}, { rejectWithValue }) => {
    try {
        const res = await smsService.post('/verifyOtp', payload);
        return { status: res.status, data: res.data.message };
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.message === 'Network Error') {
                return rejectWithValue({ message: "Oops! Something went wrong" });
            }
            const status = error.response?.status ?? 500;
            const message = error.response?.data?.message ?? "Unexpected error occurred";

            return rejectWithValue({ status, message });
        }

        // Fallback for non-Axios errors
        return rejectWithValue({ message: "An unknown error occurred" });
    }
})


const loanSlice = createSlice({
    name: 'loan',
    initialState,
    reducers: {
        closeOtpModal: (state) => {
            state.otpModal = false;
        },
        resetSendOtpAlert: (state) => {
            state.sendOtp.alert = {
                message: '',
                state: false,
                type: undefined
            }
        },
        resetVerifyOtpAlert: (state) => {
            state.verifyOtp.alert = {
                message: '',
                state: false,
                type: undefined
            }
        },

        setReqObject: (state, action) => {
            const { payload } = action;
            state.reqObject = payload
        },
        updateReqObject: (state, action) => {
            const { payload } = action;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendOtp.pending, (state) => {
            state.sendOtp.loading = true
        })
        builder.addCase(sendOtp.rejected, (state, action) => {
            state.sendOtp.loading = false
            state.sendOtp.alert = {
                message: 'Otp Send Failed',
                state: true,
                type: 'error'
            }
        })
        builder.addCase(sendOtp.fulfilled, (state, action) => {
            state.sendOtp.loading = false;
            state.sendOtp.alert = {
                message: 'Otp Send Successfull',
                state: true,
                type: 'success'
            }
            state.otpModal = true
        })
        builder.addCase(verifyOtp.pending, (state) => {
            state.verifyOtp.loading = true
        })
        builder.addCase(verifyOtp.rejected, (state, action) => {
            state.verifyOtp.loading = false
            state.verifyOtp.alert = {
                message: "invalid/expired Otp",
                state: true,
                type: 'error'
            }
        })
        builder.addCase(verifyOtp.fulfilled, (state, action) => {
            state.verifyOtp.loading = false;
            state.verifyOtp.alert = {
                message: 'Otp Verified Successfull',
                state: true,
                type: 'success'
            }
            // state.otpModal = false
        })
    }
})

export const { closeOtpModal, resetSendOtpAlert, resetVerifyOtpAlert,setReqObject } = loanSlice.actions

export default loanSlice.reducer;