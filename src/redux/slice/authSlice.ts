import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EmployeeService, pospService, serverLogin } from "../../service/api";
import { createBrowserHistory, History } from 'history';
import { authProps, customerProfileProps, employeeProfileProps, pospProfileProps } from "../../types/AuthProps/AuthProps";

export const history: History = createBrowserHistory();
import { getSessionToken } from "../../utils/utils"
const initialState: authProps = {
    loading: false,
    alert: {
        type: undefined,
        message: '',
        state: false
    },
    isLogin: false,
    profile: null
}

// login employee
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


// get Profile
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

const authSlice = createSlice({
    name: "auth/user",
    initialState,
    reducers: {
        handleLogout: (state) => {
            state.isLogin = false
            state.token = null
            state.profile = null;
            sessionStorage.removeItem('access-token');
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
                state.alert = {
                    type: 'success',
                    message: 'login success',
                    state: true
                }
                state.isLogin = true;
                sessionStorage.setItem('access-token', action.payload.data.data.accessToken);
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
                state.loading = false
                state.alert = {
                    type: 'success',
                    message: 'login success',
                    state: true
                }
                state.isLogin = true;
                state.profile = action.payload.data
            })
    }
})

export const { handleLogout, closeAlert } = authSlice.actions;
export default authSlice.reducer;