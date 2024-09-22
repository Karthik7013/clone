import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pospService, serverLogin } from "../../service/api";
import { createBrowserHistory, History } from 'history';
import { authProps, customerProfileProps, employeeProfileProps, pospProfileProps } from "../../types/AuthProps/AuthProps";
import { RootProps } from "../../types/RootProps";
import { useNavigate } from "react-router-dom";

export const history: History = createBrowserHistory();

const initialState: authProps = {
    loading: false,
    alert: {
        type: undefined,
        message: '',
        state: false
    },
    isLogin: false,
    token: null,
    profile: null
}

// login user
export const loginUser = createAsyncThunk('login/user', async (payload: { phno: string }) => {
    // const type: string = "posp";
    // switch (type) {
    //     case 'posp':

    //         break;
    //     case 'customer':

    //         break;
    //     case 'employee':

    //         break;

    //     default:
    //         break;
    // }

    const res = await serverLogin.post('/verify', { ...payload });
    return { status: res.status, data: res.data }
});

// get Profile
export const getProfile = createAsyncThunk('profile/user', async (payload: {}, { getState }) => {
    const state: RootProps = getState();
    console.log(state)
    const token = state.auth.token?.token;

    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const res = await serverLogin.post('/profile', {}, { headers });
    return { status: res.status, data: res.data }
})

const authSlice = createSlice({
    name: "auth/user",
    initialState,
    reducers: {
        handleLogout: (state) => {
            state.isLogin = false
            state.token = null
            state.profile = null
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
                state.token = action.payload.data
            });
        builder.addCase(getProfile.pending, (state) => {
            state.loading = true;
        }).addCase(getProfile.rejected, (state, action) => {
            state.loading = false;
            state.alert = {
                type: 'error',
                message: 'failed to get profile',
                state: true
            }
        }).addCase(getProfile.fulfilled, (state, action) => {
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