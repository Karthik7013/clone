import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomerResources } from "../../service/api";
import { alertProps } from "../../types/UiProps/uiProps";

type dashboardProps = {
    activeTab: null | '',
    alert: alertProps,
    loading: boolean,
    data: any
}

const initialState: dashboardProps = {
    activeTab: '',
    loading: false,
    alert: {
        type: undefined,
        message: '',
        state: false
    },
    data: {
        stats: null,
        policies: [

        ],
        claims: [

        ]
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

export const registerCustomerPolicies = createAsyncThunk('register/policies', async (payload: any, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.post('/register-claims', payload);
        return { status: res.status, data: res.data.data };
    } catch (error) {
        if (error.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        return rejectWithValue({ status: error.response.status, message: error.response.data.message });
    }
})

export const getCustomerClaims = createAsyncThunk('customer/claims', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/claims');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        if (error.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        return rejectWithValue({ status: error.response.status, message: error.response.data.message });
    }
})

export const getCustomerStats = createAsyncThunk('customer/stats', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/analytics');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        if (error.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        return rejectWithValue({ status: error.response.status, message: error.response.data.message });
    }
})

export const updateCustomerProfile = createAsyncThunk('customer/update', async (payload:any, { rejectWithValue }) => {
    console.log(payload);
    
    try {
        const res = await CustomerResources.post('/profile/update',payload);
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
            }).addCase(getCustomerPolicies.fulfilled, (state, action) => {
                state.loading = false;
                state.data.policies = [...action.payload.data]
            })
        builder.addCase(getCustomerClaims.pending, (state) => {
            state.loading = true;
        })
            .addCase(getCustomerClaims.rejected, (state, action) => {
                console.log(action, 'error')
                state.loading = false;
            }).addCase(getCustomerClaims.fulfilled, (state, action) => {
                state.loading = false;
                state.data.claims = [...action.payload.data]
            })
        builder.addCase(registerCustomerPolicies.pending, (state) => {
            state.loading = true
        }).addCase(registerCustomerPolicies.rejected, (state, action) => {
            console.log(action)
            state.loading = false;
            state.alert.message = action.payload?.message;
            state.alert.type = 'error';
            state.alert.state = true
        }).addCase(registerCustomerPolicies.fulfilled, (state, action) => {
            state.loading = false
            state.alert.message = action.payload.data.description;
            state.alert.type = 'success';
            state.alert.state = true
        })
        builder.addCase(getCustomerStats.pending, (state) => {
            state.loading = true
        }).addCase(getCustomerStats.rejected, (state, action) => {
            console.log(action)
            state.loading = false;
            state.alert.message = action.payload?.message;
            state.alert.type = 'error';
            state.alert.state = true
        }).addCase(getCustomerStats.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload.data, 'statpayload')
            state.data.stats = action.payload.data
            // state.alert.message = action.payload.data.description;
            // state.alert.type = 'success';
            // state.alert.state = true
            // state.data.stats = 

        })


        builder.addCase(updateCustomerProfile.pending, (state) => {
            state.loading = true
        }).addCase(updateCustomerProfile.rejected, (state, action) => {
            console.log(action)
            state.loading = false;
            state.alert.message = action.payload?.message;
            state.alert.type = 'error';
            state.alert.state = true
        }).addCase(updateCustomerProfile.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload.data, 'statpayload')
            state.alert.message = action.payload.data.description;
            state.alert.type = 'success';
            state.alert.state = true
        })

    }
})
export const { closeAlert } = dashboardSlice.actions;
export default dashboardSlice.reducer