import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomerResources, EmployeeResources } from "../../service/api";
import { alertProps } from "../../types/UiProps/uiProps";
import { AxiosError } from "axios";
import { boolean } from "yup";
interface ErrorResponse {
    status?: number;
    message: string;
}
interface CustomerPoliciesResponse {

}

type dashboardProps = {
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
    },
    // employee types
    employeesList: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    agentsList: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    customerList: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    employee_roles: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    employee_permissions: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    addEmployeeModal: boolean,
    create_new_employee: {
        loading: boolean,
        data: any,
        alert: alertProps
    }
}

const initialState: dashboardProps = {
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
    },
    // employee states

    employeesList: {
        loading: false,
        data: [],
        alert: {
            message: '',
            state: false,
            type: undefined
        }
    },
    agentsList: {
        loading: false,
        data: [],
        alert: {
            message: '',
            state: false,
            type: undefined
        }
    },
    customerList: {
        loading: false,
        data: [],
        alert: {
            message: '',
            state: false,
            type: undefined
        }
    },
    employee_roles: {
        loading: false,
        data: [],
        alert: {
            message: '',
            type: undefined,
            state: false
        }
    },
    employee_permissions: {
        loading: false,
        data: [],
        alert: {
            message: '',
            type: undefined,
            state: false
        }
    },
    addEmployeeModal: false,
    create_new_employee: {
        loading: false,
        alert: {
            message: '',
            state: false,
            type: undefined
        },
        data: null
    }
}


export const getCustomerPolicies = createAsyncThunk('customer/policies', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/policies');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})

export const registerCustomerPolicies = createAsyncThunk('register/policies', async (payload: any, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.post('/register-claims', payload);
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})

export const getCustomerClaims = createAsyncThunk('customer/claims', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/claims');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})

export const getCustomerStats = createAsyncThunk('customer/stats', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/analytics');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})

export const updateCustomerProfile = createAsyncThunk('customer/update', async (payload: any, { rejectWithValue }) => {
    console.log(payload);

    try {
        const res = await CustomerResources.post('/profile/update', payload);
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})


export const getCustomerApplicationQueue = createAsyncThunk('customer/policyQueue', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/policyQueue');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})

export const getCustomerPayments = createAsyncThunk('customer/payments', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/payments');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})


// employee actions

export const getEmployeesList = createAsyncThunk('employee/employeeList', async (payload, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get('/employees');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})
export const getAgentsList = createAsyncThunk('employee/agentList', async (payload, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get('/agents');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})
export const getCustomerList = createAsyncThunk('employee/customerList', async (payload, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get('/customers');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})
export const getEmployeeRoles = createAsyncThunk('employee/roles', async (payload, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get('/get-roles');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})
export const getEmployeePermissions = createAsyncThunk('employee/permissions', async (payload, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get('/get-permissions');
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
    }
})

export const createNewEmployee = createAsyncThunk('employee/create-employee', async (payload: any, { rejectWithValue }) => {
    try {
        console.log(payload, 'reducer...add')
        const res = await EmployeeResources.post('/create-new-employee', payload);
        return { status: res.status, data: res.data.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') {
            return rejectWithValue({ message: "Oops! Something went wrong" });
        }
        if (axiosError.response) {
            return rejectWithValue({ status: axiosError.response.status, message: axiosError.response.data?.message });
        }
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
        },
        handleAddEmployeeModal: (state) => {
            state.addEmployeeModal = !state.addEmployeeModal
        },
        closeAddEmployeeAlert: (state) => {
            state.create_new_employee.alert = {
                message: "",
                state: false,
                type: undefined
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
        // employee reducers
        builder.addCase(getEmployeesList.pending, (state) => {
            state.employeesList.loading = true
        }).addCase(getEmployeesList.rejected, (state, action) => {
            state.employeesList.loading = false;
        }).addCase(getEmployeesList.fulfilled, (state, action) => {
            state.employeesList.loading = false;
            state.employeesList.data = action.payload?.data
        })
        builder.addCase(getAgentsList.pending, (state) => {
            state.agentsList.loading = true
        }).addCase(getAgentsList.rejected, (state, action) => {
            state.agentsList.loading = false;
        }).addCase(getAgentsList.fulfilled, (state, action) => {
            state.agentsList.loading = false;
            state.agentsList.data = action.payload?.data
        })
        builder.addCase(getCustomerList.pending, (state) => {
            state.customerList.loading = true
        }).addCase(getCustomerList.rejected, (state, action) => {
            state.customerList.loading = false;
        }).addCase(getCustomerList.fulfilled, (state, action) => {
            state.customerList.loading = false;
            state.customerList.data = action.payload?.data
        })

        builder.addCase(getEmployeeRoles.pending, (state) => {
            state.employee_roles.loading = true
        }).addCase(getEmployeeRoles.rejected, (state, action) => {
            state.employee_roles.loading = false;
        }).addCase(getEmployeeRoles.fulfilled, (state, action) => {
            state.employee_roles.loading = false;
            state.employee_roles.data = action.payload?.data
        })
        builder.addCase(getEmployeePermissions.pending, (state) => {
            state.employee_permissions.loading = true
        }).addCase(getEmployeePermissions.rejected, (state, action) => {
            state.employee_permissions.loading = false;
        }).addCase(getEmployeePermissions.fulfilled, (state, action) => {
            state.employee_permissions.loading = false;
            state.employee_permissions.data = action.payload?.data
        })
        builder.addCase(createNewEmployee.pending, (state) => {
            state.create_new_employee.loading = true
        }).addCase(createNewEmployee.rejected, (state, action) => {
            console.log(action.payload, 'failed-payload')
            state.create_new_employee.loading = false;
            state.create_new_employee.alert = {
                message: 'Failed to create Employee',
                state: true,
                type: 'error'
            }
        }).addCase(createNewEmployee.fulfilled, (state, action) => {
            console.log(action.payload, 'success-payload')
            state.create_new_employee.loading = false;
            state.create_new_employee.data = action.payload?.data,
                state.create_new_employee.alert = {
                    message: 'Employee created',
                    state: true,
                    type: 'success'
                };
            state.addEmployeeModal = false
        })
    }
})
export const { closeAlert, closeAddEmployeeAlert, handleAddEmployeeModal } = dashboardSlice.actions;
export default dashboardSlice.reducer