import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { serverLogin } from "../../service/api";
import { createBrowserHistory, History } from 'history';
import { authProps, profileProps } from "../../types/AuthProps/AuthProps";

export const history: History = createBrowserHistory();
const ceoProfile: profileProps = {
    joinDate: '26-11-1999',
    access: ['admin'],
    role: 'ceo', // ceo hr accountant callers
    type: 'employee', // employee customer posp
    firstname: 'Karthik',
    lastname: 'Tumala',
    dob: '26-11-1999',
    gender: 'Male',
    empId: '1234',
    sideProps: [
        {
            title: "Analytics",
            path: "/employee/dashboard",
            icon: "trending_up",
        },
        {
            title: "Revenue",
            path: "/employee/dashboard/revenue",
            icon: "payments",
        },
        {
            title: "Sales",
            path: "/employee/dashboard/sales",
            icon: "sell",
        },
        {
            title: "Income",
            path: "/employee/dashboard/income",
            icon: "currency_rupee_circle",
        },
        {
            title: "Service",
            path: "/employee/dashboard/service",
            icon: "support_agent",
        },

        {
            title: "Employee Management",
            path: "/employee/dashboard/employee-management",
            icon: "supervisor_account",
        },
        {
            title: "Products",
            path: "/employee/dashboard/products",
            icon: "category",
        },
        {
            title: "Access",
            path: "/employee/dashboard/access-management",
            icon: "checklist_rtl",
        },
        {
            title: "Settings",
            path: "/employee/dashboard/settings",
            icon: "settings",
        },
    ]
}
const hrProfile = {
    joinDate: '26-11-1999',
    access: ['hr'],
    role: 'hr', // ceo hr accountant callers
    type: 'employee', // employee customer posp
    firstname: 'Agarwal',
    lastname: 'Kajal',
    dob: '26-11-1999',
    gender: 'Female',
    empId: '1235',
    sideProps: [
        {
            title: "Employee Management",
            path: "/employee/dashboard/",
            icon: "supervisor_account",
        },
        {
            title: "Access",
            path: "/employee/dashboard/access-management",
            icon: "checklist_rtl",
        }
    ]
}

const customerProfile: profileProps = {
    type: 'customer',
    dob: '12-06-1999',
    firstname: 'John',
    gender: 'Male',
    joinDate: '12-04-1999',
    lastname: 'Doe',
    custId: '1234',
    role: 'customer',
    sideProps: [
        {
            title: "Dashboard",
            path: "/customer/dashboard/",
            icon: "space_dashboard",
        },
        {
            title: "My Policies",
            path: "/customer/dashboard/policies",
            icon: "description",
        },
        {
            title: "Policy Claims",
            path: "/customer/dashboard/claims",
            icon: "policy",
        },
        {
            title: "Register Claims",
            path: "/customer/dashboard/register-claims",
            icon: "edit_note",
        },
        {
            title: "Settings",
            path: "/customer/dashboard/settings",
            icon: "settings",
        },
        {
            title: "Helpline",
            path: "/customer/dashboard/help",
            icon: "call_quality",
        }
    ]
}

const pospProfile: profileProps = {
    empId: '005434333',
    type: 'posp',
    dob: '12-06-1999',
    firstname: 'Posp Dummy',
    gender: 'Male',
    joinDate: '12-04-1999',
    lastname: 'Goe',
    custId: '1234',
    role: 'Agent',
    sideProps: [
        {
            title: "Home",
            path: "/",
            icon: "home",
        },
        {
            title: "Dashboard",
            path: "/posp/dashboard/",
            icon: "space_dashboard",
        },
        {
            title: "Bookings",
            path: "/posp/dashboard/bookings",
            icon: "import_contacts",
        },
        {
            title: "Add Policy",
            path: "/posp/dashboard/add-policy",
            icon: "post_add",
        },
        {
            title: "Policy Claims",
            path: "/posp/dashboard/claims",
            icon: "policy",
        },
        {
            title: "Settings",
            path: "/posp/dashboard/settings",
            icon: "settings",
        },
        {
            title: "Help-line",
            path: "/posp/dashboard/help",
            icon: "help",
        }
    ]
}

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
export const loginUser = createAsyncThunk('login/user', async (payload: { username: string, password: string }) => {
    const res = await serverLogin.post('/user/login', { ...payload });
    return { status: res.status, data: res.data }
});

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
                console.log(action, 'success action')
                state.loading = false
                state.alert = {
                    type: 'success',
                    message: 'login success',
                    state: true
                }
                state.isLogin = true;
                state.token = action.payload.data

                // state.profile = hrProfile
                state.profile = ceoProfile
                window.location.href = '/employee/dashboard';

                // state.profile = customerProfile;
                // window.location.href = '/customer/dashboard';

                // state.profile = pospProfile;
                // window.location.href = '/posp/dashboard';
            })
    }
})

export const { handleLogout, closeAlert } = authSlice.actions;
export default authSlice.reducer;