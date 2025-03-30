import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomerResources, EmployeeResources } from "../../service/api";
import { alertProps } from "../../types/UiProps/uiProps";
import axios, { AxiosError } from "axios";
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
    barGraph: {
        data: any,
        alert: alertProps,
        loading: boolean
    },
    pieChart: {
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
    },
    create_permission: {
        loading: boolean,
        alert: alertProps,
        data: any
    },
    all_employee_permissions: {
        loading: boolean,
        data: any,
        alert: alertProps
    },
    error_logs: {
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
    barGraph: {
        data: [
            {
                name: 'Sales',
                data: [30, 40, 45, 50, 49, 60, 70],
            }
        ],
        loading: false,
        alert: {
            message: '',
            state: false,
            type: undefined
        }
    },
    pieChart: {
        data: [1, 2, 5, 6],
        loading: false,
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
    },
    create_permission: {
        loading: false,
        alert: {
            message: '',
            state: false,
            type: undefined
        }, data: null
    },
    all_employee_permissions: {
        loading: false,
        data: [],
        alert: {
            message: '',
            type: undefined,
            state: false
        }
    },
    error_logs: {
        loading: false,
        alert: {
            message: "",
            type: undefined,
            state: false
        },
        data: null
    }
}


export const getCustomerPolicies = createAsyncThunk('customer/policies', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/policies');
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

export const registerCustomerPolicies = createAsyncThunk('register/policies', async (payload: any, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.post('/register-claims', payload);
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

export const getCustomerClaims = createAsyncThunk('customer/claims', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/claims');
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

export const getCustomerStats = createAsyncThunk('customer/stats', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/analytics');
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

export const updateCustomerProfile = createAsyncThunk('customer/update', async (payload: any, { rejectWithValue }) => {
    console.log(payload);

    try {
        const res = await CustomerResources.post('/profile/update', payload);
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


export const getCustomerApplicationQueue = createAsyncThunk('customer/policyQueue', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/policyQueue');
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

export const getCustomerPayments = createAsyncThunk('customer/payments', async (payload, { rejectWithValue }) => {
    try {
        const res = await CustomerResources.get('/payments');
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


// employee actions

export const getEmployeesList = createAsyncThunk('employee/employeeList', async (payload, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get('/employees');
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
export const getAgentsList = createAsyncThunk('employee/agentList', async (payload, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get('/agents');
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
export const getCustomerList = createAsyncThunk('employee/customerList', async (payload, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get('/customers');
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
export const getEmployeeRoles = createAsyncThunk('employee/roles', async (payload, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get('/get-roles');
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
export const getPermissions = createAsyncThunk('employee/permissions', async (payload, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get('/get-permissions');
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

export const getEmployeesPermissions = createAsyncThunk('employee/all-permissions', async (payload, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.get('/employee-permissions');
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

export const createNewEmployee = createAsyncThunk('employee/create-employee', async (payload: any, { rejectWithValue }) => {
    try {
        console.log(payload, 'reducer...add')
        const res = await EmployeeResources.post('/create-new-employee', payload);
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


export const createPermission = createAsyncThunk('employee/create-permission', async (payload: any, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.post('/create-permission', payload);
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

export const getErrorLogs = createAsyncThunk('employee/errorLog', async (payload: {
    page: number,
    limit: number,
    fromDate: string,
    toDate: string
}, { rejectWithValue }) => {
    try {
        const res = await EmployeeResources.post('/errorlog', payload);
        console.log('reserrorr', res.data)
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

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        closeAlert: (state) => {
            // state.alert = {
            //     type: undefined,
            //     message: '',
            //     state: false
            // }
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
        },
        closeCreatePermissionAlert: (state) => {
            state.create_permission.alert = {
                message: '',
                state: false,
                type: undefined
            }
        },
        closeUpdateProfileAlert: (state) => {
            state.updateProfile.alert = {
                message: '',
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
        }).addCase(registerCustomerPolicies.rejected, (state, action: { payload: any }) => {
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
        }).addCase(getCustomerStats.rejected, (state, action: { payload: any }) => {
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
        }).addCase(updateCustomerProfile.rejected, (state, action: { payload: any }) => {
            const { payload } = action;
            state.updateProfile.loading = false;
            state.updateProfile.alert.message = payload?.message;
            state.updateProfile.alert.type = 'error';
            state.updateProfile.alert.state = true
        }).addCase(updateCustomerProfile.fulfilled, (state, action) => {
            console.log(action.payload.message)
            state.updateProfile.loading = false;
            state.updateProfile.alert.message = action.payload.message;
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
        builder.addCase(getPermissions.pending, (state) => {
            state.employee_permissions.loading = true
        }).addCase(getPermissions.rejected, (state, action) => {
            state.employee_permissions.loading = false;
        }).addCase(getPermissions.fulfilled, (state, action) => {
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
        builder.addCase(createPermission.pending, (state) => {
            state.create_permission.loading = true
        }).addCase(createPermission.rejected, (state, action) => {
            console.log(action.payload, 'failed-payload')
            state.create_permission.loading = false;
            state.create_permission.alert = {
                message: 'Failed to create Permission',
                state: true,
                type: 'error'
            }
        }).addCase(createPermission.fulfilled, (state, action) => {
            console.log(action.payload, 'success-payload')
            state.create_permission.loading = false;
            state.create_permission.data = action.payload?.data,
                state.create_permission.alert = {
                    message: 'Permission created',
                    state: true,
                    type: 'success'
                };
            state.addEmployeeModal = false
        })
        builder.addCase(getEmployeesPermissions.pending, (state) => {
            state.all_employee_permissions.loading = true
        }).addCase(getEmployeesPermissions.rejected, (state, action) => {
            state.all_employee_permissions.loading = false;
        }).addCase(getEmployeesPermissions.fulfilled, (state, action) => {
            state.all_employee_permissions.loading = false;
            state.all_employee_permissions.data = action.payload?.data
        })
        builder.addCase(getErrorLogs.pending, (state) => {
            state.error_logs.loading = true;
        }).addCase(getErrorLogs.rejected, (state, action) => {
            state.error_logs.loading = false;
        }).addCase(getErrorLogs.fulfilled, (state, action) => {
            state.error_logs.loading = false;
            state.error_logs.data = action.payload?.data;
        })
    }
})

export const { closeAlert, closeAddEmployeeAlert, handleAddEmployeeModal, closeCreatePermissionAlert, closeUpdateProfileAlert } = dashboardSlice.actions;
export default dashboardSlice.reducer