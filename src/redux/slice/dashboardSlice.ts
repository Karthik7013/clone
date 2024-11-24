import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomerResources } from "../../service/api";
import axios from "axios";

const initialState = {
    loading: false,
    alert: {
        type: undefined,
        message: '',
        state: false
    },
    data: {
        policies: [

        ],

    }
}


export const getCustomerPolicies = createAsyncThunk('customer/policies', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/policies');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        if (error.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        return rejectWithValue({ status: error.response.status, message: error.response.data.message });
    }
})



const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        closeAlert: (state) => {
            state.alert = {
                type: undefined,
                message: '',
                state: false
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCustomerPolicies.pending, (state) => {
            state.loading = true;
        })
            .addCase(getCustomerPolicies.rejected, (state, action) => {
                console.log(action, 'error')
                state.loading = false;
            })
            .addCase(getCustomerPolicies.fulfilled, (state, action) => {
                state.loading = false;
                state.data.policies = [...action.payload.data]
            })
    }
})
export const { closeAlert } = dashboardSlice.actions;
export default dashboardSlice.reducer