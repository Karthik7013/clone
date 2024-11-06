import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AgentService, CustomerService, EmployeeService } from "../../service/api";
import { createBrowserHistory, History } from 'history';
import { authProps } from "../../types/AuthProps/AuthProps";

const role = getSessionToken('role');
const accessToken = getSessionToken('access-token')

export const history: History = createBrowserHistory();
import { getSessionToken } from "../../utils/utils"
import axios from "axios";
const initialState: authProps = {
    loading: false,
    alert: {
        type: undefined,
        message: '',
        state: false
    },
    isLogin: role && accessToken ? true:false,
    profile: null,
    role: role
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
        const res = await EmployeeService.get('/profile', { headers });
        return { status: res.status, data: res.data.data }
    } catch (error) {
        return rejectWithValue({ status: error.response.status, message: error.response.data });
    }
})


// =============== | CUSTOMER ACTIONS | ==============>
export const loginCustomer = createAsyncThunk('login/customer', async (payload: { phone: number }, { rejectWithValue }) => {
    try {
        // const res = await CustomerService.post('/verify', { ...payload });
        const res = await axios.post('http://localhost:8000/api/v1/auth/customer/verify', payload);
        return { status: res.status, data: res.data };
    } catch (error) {
        if (error.message === 'Network Error') return rejectWithValue({ message: "Our servers are currently unavailable. Please try again later." });
        return rejectWithValue({ status: error.response.status, message: error.response.data.message });
    }
}
);

export const getCustomerProfile = createAsyncThunk('profile/customer', async (payload: {}, { rejectWithValue }) => {
    try {
        const token = getSessionToken('access-token');
        const headers = {
            "authorization": `Bearer ${token}`,
        };
        const res = await CustomerService.get('/profile', { headers });
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
        handleLogout: (state) => {
            state.isLogin = false
            state.profile = null;
            sessionStorage.removeItem('access-token');
            sessionStorage.removeItem('role');
        },
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
                sessionStorage.removeItem('access-token')
            })
            .addCase(loginCustomer.fulfilled, (state, action) => {
                state.loading = false
                state.isLogin = true;
                console.log(JSON.stringify(action.payload.data.data))
                state.alert = {
                    message: 'Login Success',
                    state: true,
                    type: 'success'
                }
                state.role = action.payload.data.data.user.role
                // sessionStorage.setItem('access-token', action.payload.data.data.user);
                sessionStorage.setItem('access-token', action.payload.data.data.accessToken);
                sessionStorage.setItem('role', action.payload.data.data.user.role);
            });
        builder.addCase(getCustomerProfile.pending, (state) => {
            state.loading = true;
        })
            .addCase(getCustomerProfile.rejected, (state, action) => {
                state.loading = false;
                state.alert = {
                    type: 'error',
                    message: 'failed to get profile',
                    state: true
                }
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
                state.profile = action.payload.data
            })
    }
})

export const { handleLogout, closeAlert } = authSlice.actions;
export default authSlice.reducer;