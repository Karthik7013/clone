import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AgentResources, authService, CustomerResources, EmployeeResources, } from "../../service/api";
import { createBrowserHistory, History } from 'history';
import { authProps } from "../../types/AuthProps/AuthProps";

const role = getSessionToken('role');
export const history: History = createBrowserHistory();
import { getSessionToken } from "../../utils/utils"
import { AxiosError } from "axios";

interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    status: number;
    data?: T;
    timestamp: string;
}


const initialState: authProps = {
    loading: false,
    alert: {
        type: undefined,
        message: '',
        state: false
    },
    isLogin: role ? true : false,
    authData: null,
    role: role,
}

// =============== | EMPLOYEE ACTIONS | ==============>
export const loginEmployee = createAsyncThunk('login/user', async (payload: { phone: string }, { rejectWithValue }) => {
    try {
        const res = await authService.post('/employee/verify', { ...payload });
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
}
);

export const getEmployeeProfile = createAsyncThunk('profile/employee', async (payload: {}, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get(`/profile`);
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

// =============== | CUSTOMER ACTIONS | ==============>
export const loginCustomer = createAsyncThunk('login/customer', async (payload: { phone: string }, { rejectWithValue }) => {
    try {
        const res = await authService.post('/customer/verify', payload);
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
});

export const getCustomerProfile = createAsyncThunk('profile/customer', async (payload: {}, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get(`/profile`);
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

export const logout = createAsyncThunk('logout', async (payload: {}, { rejectWithValue }) => {
    try {
        const res = await authService.post(`/signOut`);
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

// =============== | AGENT ACTIONS | ==============>
export const loginAgent = createAsyncThunk('login/agent', async (payload: { phone: string }, { rejectWithValue }) => {
    try {
        const res = await authService.post('/agent/verify', payload);
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
}
);

export const getAgentProfile = createAsyncThunk('profile/agent', async (payload: {}, { rejectWithValue }) => {
    try {
        const res = await AgentResources.get(`/profile`);
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

const authSlice = createSlice({
    name: "auth/user",
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
        // customer
        builder.addCase(loginCustomer.pending, (state) => {
            state.loading = true;
        })
            .addCase(loginCustomer.rejected, (state, action: { payload: any }) => {
                state.loading = false;
                const { payload } = action;
                state.alert = {
                    type: 'error',
                    message: payload.message,
                    state: true
                }
            })
            .addCase(loginCustomer.fulfilled, (state, action) => {
                state.loading = false;
                const { payload } = action
                state.isLogin = true;
                state.alert = {
                    message: payload.message,
                    state: true,
                    type: 'success'
                }
                state.role = payload.data.role
                sessionStorage.setItem('role', payload.data.role);
            });
        builder.addCase(getCustomerProfile.pending, (state) => {
            state.loading = true;
        })
            .addCase(getCustomerProfile.rejected, (state, action) => {
                state.loading = false;
                state.alert = {
                    type: 'warning',
                    message: 'Session has Expire Re login',
                    state: true
                }
                state.isLogin = false;
                state.authData = null;
                sessionStorage.removeItem('role');
            })
            .addCase(getCustomerProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.alert = {
                    type: 'success',
                    message: 'Login Success',
                    state: true
                }
                state.isLogin = true;
                state.authData = action.payload.data
            });


        // agent 
        builder.addCase(loginAgent.pending, (state) => {
            state.loading = true;
        })
            .addCase(loginAgent.rejected, (state, action: { payload: any }) => {
                const { payload } = action
                state.loading = false;
                state.alert = {
                    type: 'error',
                    message: payload.message,
                    state: true
                }
            })
            .addCase(loginAgent.fulfilled, (state, action) => {
                const { payload } = action;
                state.loading = false
                state.isLogin = true;
                state.alert = {
                    message: payload.message,
                    state: true,
                    type: 'success'
                }
                state.role = payload.data.role
                sessionStorage.setItem('role', payload.data.role);
            });

        builder.addCase(getAgentProfile.pending, (state) => {
            state.loading = true;
        })
            .addCase(getAgentProfile.rejected, (state, action) => {
                state.loading = false;
                state.alert = {
                    type: 'warning',
                    message: 'Session has Expire Re login',
                    state: true
                }
                state.isLogin = false;
                state.authData = null;
                sessionStorage.removeItem('role');
            })
            .addCase(getAgentProfile.fulfilled, (state, action) => {
                state.loading = false;
                if (getSessionToken('prev_login')) {
                    state.alert = {
                        type: 'success',
                        message: 'Welcom Back',
                        state: true
                    }
                } else {
                    state.alert = {
                        type: 'success',
                        message: 'Login Success',
                        state: true
                    }
                    sessionStorage.setItem('prev_login', 'true')
                }
                state.isLogin = true;
                state.authData = action.payload.data
            });








        // employee
        builder.addCase(loginEmployee.pending, (state) => {
            state.loading = true
        })
            .addCase(loginEmployee.rejected, (state, action: { payload: any }) => {
                state.loading = false;
                const { payload } = action
                state.alert = {
                    type: 'error',
                    message: payload.message,
                    state: true
                }
            })
            .addCase(loginEmployee.fulfilled, (state, action) => {
                console.log(action.payload, 'successRes');
                const { payload } = action
                state.loading = false
                state.isLogin = true;
                state.alert = {
                    message: payload.message,
                    state: true,
                    type: 'success'
                }
                state.role = payload.data.role
                sessionStorage.setItem('role', payload.data.role);
            })

        builder.addCase(getEmployeeProfile.pending, (state) => {
            state.loading = true;
        })
            .addCase(getEmployeeProfile.rejected, (state, action) => {
                state.loading = false;
                state.alert = {
                    type: 'warning',
                    message: 'Session has Expire Re login',
                    state: true
                }
                state.isLogin = false;
                state.authData = null;
                sessionStorage.removeItem('role');
            })
            .addCase(getEmployeeProfile.fulfilled, (state, action: { payload: any }) => {
                state.loading = false;
                if (getSessionToken('prev_login')) {
                    state.alert = {
                        type: 'success',
                        message: 'Welcom Back',
                        state: true
                    }
                } else {
                    state.alert = {
                        type: 'success',
                        message: 'Login Success',
                        state: true
                    }
                    sessionStorage.setItem('prev_login', 'true')
                }
                state.isLogin = true;
                state.authData = action.payload.data
            })







        // logout
        builder.addCase(logout.pending, (state) => {
            state.loading = true
        })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.isLogin = false;
                state.role = null;
                state.alert = {
                    message: 'Logout Success',
                    state: true,
                    type: 'error'
                }
                sessionStorage.removeItem('role')
            });
    }
})

export const { closeAlert } = authSlice.actions;
export default authSlice.reducer;