import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AgentService, authService, CustomerResources, CustomerService, EmployeeService } from "../../service/api";
import { createBrowserHistory, History } from 'history';
import { authProps } from "../../types/AuthProps/AuthProps";


const role = getSessionToken('role');

export const history: History = createBrowserHistory();
import { getSessionToken } from "../../utils/utils"
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
export const loginUser = createAsyncThunk('login/user', async (payload: { phone: number }, { rejectWithValue }) => {
    try {
        const res = await EmployeeService.post('/verify', { ...payload });
        console.log(res.data, 'res through toolkit');
        return { status: res.status, data: res.data };
    } catch (error) {
        return rejectWithValue({ status: error.response.status, message: error.response.data });
    }
}
);

export const getProfile = createAsyncThunk('profile/user', async (payload: {}, { rejectWithValue }) => {
    try {
        const token = getSessionToken('access-token');
        const headers = {
            "authorization": `Bearer ${token}`,
        };
        // const res = await EmployeeService.get('/profile', { headers });
        // return { status: res.status, data: res.data.data }
    } catch (error) {
        return rejectWithValue({ status: error.response.status, message: error.response.data });
    }
})

// =============== | CUSTOMER ACTIONS | ==============>
export const loginCustomer = createAsyncThunk('login/customer', async (payload: { phone: number }, { rejectWithValue }) => {
    try {
        const res = await authService.post('/customer/verify', payload);
        return { status: res.status, data: res.data };
    } catch (error) {
        if (error.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        return rejectWithValue({ status: error.response.status, message: error.response.data.message });
    }
}
);

export const getCustomerProfile = createAsyncThunk('profile/customer', async (payload: {}, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get(`/profile`);
        return { status: res.status, data: res.data.data }
    } catch (error) {
        return rejectWithValue({ status: error.response.status, message: error.response.data });
    }
})

export const logoutCustomer = createAsyncThunk('logout/customer', async (payload: {}, { rejectWithValue }) => {
    try {
        const res = await CustomerService.post(`/signOut`);
        return { status: res.status, data: res.data.data }
    } catch (error) {
        return rejectWithValue({ status: error.response.status, message: error.response.data });
    }
})

// =============== | AGENT ACTIONS | ==============>
export const loginAgent = createAsyncThunk('login/user', async (payload: { phone: number }, { rejectWithValue }) => {
    try {
        const res = await AgentService.post('/verify', { ...payload });
        console.log(res.data, 'res through toolkit');
        return { status: res.status, data: res.data };
    } catch (error) {
        return rejectWithValue({ status: error.response.status, message: error.response.data });
    }
}
);

// get agent Profile
export const getAgentProfile = createAsyncThunk('profile/user', async (payload: {}, { rejectWithValue }) => {
    try {
        const token = getSessionToken('access-token');
        const headers = {
            "authorization": `Bearer ${token}`,
        };
        const res = await AgentService.get('/profile', { headers });
        return { status: res.status, data: res.data.data }
    } catch (error) {
        return rejectWithValue({ status: error.response.status, message: error.response.data });
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

        // employee
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        })
            .addCase(loginUser.rejected, (state) => {
                state.loading = false;
                state.alert = {
                    type: 'error',
                    message: 'invalid username/password',
                    state: true
                }

            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.isLogin = true;
                state.alert = {
                    message: 'Login Success',
                    state: true,
                    type: 'success'
                }
                sessionStorage.setItem('access-token', action.payload.data.data.accessToken);
                sessionStorage.setItem('login-type', 'employee');
            });
        builder.addCase(getProfile.pending, (state) => {
            state.loading = true;
        })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false;
                state.alert = {
                    type: 'error',
                    message: 'failed to get profile',
                    state: true
                }
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false;
                if (getSessionToken('prev_login')) {
                    // console.log('first time entered')
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
                state.profile = action.payload.data
            })

        // customer
        builder.addCase(loginCustomer.pending, (state) => {
            state.loading = true;
        })
            .addCase(loginCustomer.rejected, (state, action: { payload: any }) => {
                state.loading = false;
                state.alert = {
                    type: 'error',
                    message: action.payload.message,
                    state: true
                }
            })
            .addCase(loginCustomer.fulfilled, (state, action) => {
                state.loading = false
                state.isLogin = true;
                state.alert = {
                    message: 'Login Success',
                    state: true,
                    type: 'success'
                }
                state.role = action.payload.data.data.role
                sessionStorage.setItem('role', action.payload.data.data.role);
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
        builder.addCase(logoutCustomer.pending, (state) => {
            state.loading = true
        })
            .addCase(logoutCustomer.rejected, (state, action) => {
                state.loading = false
            })
            .addCase(logoutCustomer.fulfilled, (state, action) => {
                state.loading = false;
                state.isLogin = false;
                state.role = null;
                state.alert = {
                    message: 'Logout Success',
                    state: true,
                    type: 'error'
                }
                sessionStorage.removeItem('role')
            })
    }
})

export const { closeAlert } = authSlice.actions;
export default authSlice.reducer;