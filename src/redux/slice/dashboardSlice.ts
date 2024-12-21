import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomerResources } from "../../service/api";
import { alertProps } from "../../types/UiProps/uiProps";

type dashboardProps = {
    activeTab: null | '',
    alert: alertProps,
    loading: boolean,
    stats: {
        data: any,
        alert: alertProps,
        loading: boolean
    },
    policies: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    myclaims: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    registerClaim: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    updateProfile: {
        loading: boolean,
        data: any,
        alert: alertProps
    }
    applicationQueue: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    myPayments: {
        loading: boolean,
        data: any,
        alert: alertProps
    }
}

const initialState: dashboardProps = {
    activeTab: '',
    loading: false,
    alert: {
        type: undefined,
        message: '',
        state: false
    },
    policies: {
        loading: false,
        data: [],
        alert: {
            message: '',
            state: false,
            type: undefined
        }
    },
    myclaims: {
        loading: false,
        data: [],
        alert: {
            message: '',
            state: false,
            type: undefined
        }
    },
    stats: {
        loading: false,
        alert: {
            message: '',
            type: undefined,
            state: false
        },
        data: null
    },
    registerClaim: {
        data: null,
        alert: {
            message: '',
            state: false,
            type: undefined
        },
        loading: false
    },
    updateProfile: {
        data: null,
        alert: {
            message: '',
            type: undefined,
            state: false
        },
        loading: false
    },
    applicationQueue: {
        loading: false,
        data: [],
        alert: {
            message: '',
            state: false,
            type: undefined
        }
    },
    myPayments: {
        loading: false,
        data: [],
        alert: {
            message: '',
            state: false,
            type: undefined
        }
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

export const updateCustomerProfile = createAsyncThunk('customer/update', async (payload: any, { rejectWithValue }) => {
    console.log(payload);

    try {
        const res = await CustomerResources.post('/profile/update', payload);
        return { status: res.status, data: res.data.data };
    } catch (error) {
        if (error.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        return rejectWithValue({ status: error.response.status, message: error.response.data.message });
    }
})


export const getCustomerApplicationQueue = createAsyncThunk('customer/policyQueue', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/policyQueue');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        if (error.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        return rejectWithValue({ status: error.response.status, message: error.response.data.message });
    }
})

export const getCustomerPayments = createAsyncThunk('customer/payments', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/payments');
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
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        closeAlert: (state) => {
            state.alert = {
                type: undefined,
                message: '',
                state: false
            }
        },
        closeRegisterAlert: (state) => {
            state.registerClaim.alert = {
                type: undefined,
                message: '',
                state: false
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCustomerPolicies.pending, (state) => {
            state.policies.loading = true;
        })
            .addCase(getCustomerPolicies.rejected, (state, action) => {
                state.policies.loading = false;
            }).addCase(getCustomerPolicies.fulfilled, (state, action) => {
                state.policies.loading = false;
                state.policies.data = [...action.payload.data]
            })
        builder.addCase(getCustomerClaims.pending, (state) => {
            state.myclaims.loading = true;
        })
            .addCase(getCustomerClaims.rejected, (state, action) => {
                state.myclaims.loading = false;
            }).addCase(getCustomerClaims.fulfilled, (state, action) => {
                state.myclaims.loading = false;
                state.myclaims.data = [...action.payload.data]
            })
        builder.addCase(registerCustomerPolicies.pending, (state) => {
            state.registerClaim.loading = true;
        }).addCase(registerCustomerPolicies.rejected, (state, action) => {
            state.registerClaim.loading = false;
            state.registerClaim.alert.message = action.payload?.message;
            state.registerClaim.alert.type = 'error';
            state.registerClaim.alert.state = true
        }).addCase(registerCustomerPolicies.fulfilled, (state, action) => {
            state.registerClaim.loading = false
            state.registerClaim.alert.message = action.payload.data.description;
            state.registerClaim.alert.type = 'success';
            state.registerClaim.alert.state = true
        })
        builder.addCase(getCustomerStats.pending, (state) => {
            state.stats.loading = true
        }).addCase(getCustomerStats.rejected, (state, action) => {
            state.stats.loading = false;
            state.stats.alert.message = action.payload?.message;
            state.stats.alert.type = 'error';
            state.stats.alert.state = true
        }).addCase(getCustomerStats.fulfilled, (state, action) => {
            state.stats.loading = false;
            state.stats.data = action.payload.data
        })


        builder.addCase(updateCustomerProfile.pending, (state) => {
            state.updateProfile.loading = true
        }).addCase(updateCustomerProfile.rejected, (state, action) => {
            state.updateProfile.loading = false;
            state.updateProfile.alert.message = action.payload?.message;
            state.updateProfile.alert.type = 'error';
            state.updateProfile.alert.state = true
        }).addCase(updateCustomerProfile.fulfilled, (state, action) => {
            state.updateProfile.loading = false;
            state.updateProfile.alert.message = action.payload.data.description;
            state.updateProfile.alert.type = 'success';
            state.updateProfile.alert.state = true
        })


        builder.addCase(getCustomerApplicationQueue.pending, (state) => {
            state.applicationQueue.loading = true
        }).addCase(getCustomerApplicationQueue.rejected, (state, action) => {
            state.applicationQueue.loading = false;
        }).addCase(getCustomerApplicationQueue.fulfilled, (state, action) => {
            state.applicationQueue.loading = false;
            state.applicationQueue.data = action.payload.data
        })

        builder.addCase(getCustomerPayments.pending, (state) => {
            state.myPayments.loading = true
        }).addCase(getCustomerPayments.rejected, (state, action) => {
            state.myPayments.loading = false;
        }).addCase(getCustomerPayments.fulfilled, (state, action) => {
            state.myPayments.loading = false;
            state.myPayments.data = action.payload.data
        })
    }
})
export const { closeAlert } = dashboardSlice.actions;
export default dashboardSlice.reducer