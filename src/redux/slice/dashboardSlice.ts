import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomerResources, CustomerService } from "../../service/api";
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
            {
                "application_id": "APPL001",
                "policy_number": "PN001",
                "policy_type": "Health",
                "insured_name": "John Doe",
                "insured_company": "ABC Corp",
                "customer_id": "C001",
                "agent_id": "A001",
                "employee_id": null,
                "start_date": "2023-12-31T18:30:00.000Z",
                "end_date": "2024-12-31T18:30:00.000Z",
                "premium_amount": "500.00",
                "coverage_amount": "5000.00",
                "status": "Active",
                "created_at": "2024-11-10T05:09:47.000Z",
                "updated_at": "2024-11-10T05:09:47.000Z",
                "mode": "ONLINE"
            },
            {
                "application_id": "APPL002",
                "policy_number": "PN002",
                "policy_type": "Health",
                "insured_name": "John Doe",
                "insured_company": "ABC Corp",
                "customer_id": "C001",
                "agent_id": "A001",
                "employee_id": null,
                "start_date": "2023-12-31T18:30:00.000Z",
                "end_date": "2024-12-31T18:30:00.000Z",
                "premium_amount": "500.00",
                "coverage_amount": "5000.00",
                "status": "Inactive",
                "created_at": "2024-11-10T05:09:47.000Z",
                "updated_at": "2024-11-10T05:09:47.000Z",
                "mode": "OFFLINE"
            }
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
                // console.log(action.payload.data, 'data')
            })
    }
})
export const { closeAlert } = dashboardSlice.actions;
export default dashboardSlice.reducer