import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import React, { lazy } from "react";
import SideDrawer from "../../common/SideDrawer";
import CrmLayout from "../../layout/CrmLayout";
import MessageBox from "../../../Framework/components/MessageBox";
import ProtectedRoutes from "../../../ProtectedRoute";
import Profile from "../components/Profile";
import CustomerManagement from "../pages/AgentManagement";
import AgentManagement from "../pages/AgentManagement";
const EmployeeLogin = lazy(() => import('../pages/EmployeeLogin'));
const AccessManagement = React.lazy(() => import("../pages/AccessManagement"));
const AdminService = React.lazy(() => import("../pages/AdminService"));
const BussinessAnalytics = React.lazy(() => import("../pages/BussinessAnalytics"));
const EmployeeManagement = React.lazy(() => import("../pages/EmployeeManagement"));
const EmployeeProfile = React.lazy(() => import("../pages/EmployeeProfile"));
const ProductsSale = React.lazy(() => import("../pages/ProductsSale"));
const RevenueService = React.lazy(() => import("../pages/RevenueService"));
const ClaimService = React.lazy(() => import("../pages/ClaimService"));
const Settings = React.lazy(() => import("../pages/Settings"));
const IncomeService = React.lazy(() => import("../pages/IcomeService"));
const PageNotFound = React.lazy(() => import("../../../Framework/components/PageNotFound"));

export const employeeRoutes = () => {
    // dummy
    const islogin = useSelector((state: RootState) => state.auth.isLogin);
    const role = useSelector((state: RootState) => state.auth.role);
    return ({
        path: 'employee',
        element: <Outlet />,
        children: [
            {
                path: '/employee',
                element: <Navigate to={(islogin && role === 'employee') ? 'dashboard' : 'signin'} />
            },
            {
                path: 'signin',
                element: (islogin && role === 'employee') ? <Navigate to='/employee/dashboard' /> : <EmployeeLogin />
            },
            {
                path: 'dashboard',
                element: (islogin && role === 'employee') ? <CrmLayout sideBar={<SideDrawer />} /> : <Navigate to='/employee/signin' />
                , children: [
                    {
                        path: '/employee/dashboard',
                        element:
                            <ProtectedRoutes role="employee"
                                fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                                requiredPermission={3000}>
                                <BussinessAnalytics />
                            </ProtectedRoutes>

                    },
                    {
                        path: 'service',
                        element: <ProtectedRoutes role="employee"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={3001}>
                            <AdminService />
                        </ProtectedRoutes>
                    },
                    {
                        path: 'revenue',
                        element: <ProtectedRoutes role="employee"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={3002}>
                            <RevenueService />
                        </ProtectedRoutes>
                    },
                    {
                        path: 'claims',
                        element: <ProtectedRoutes role="employee"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={3003}>
                            <ClaimService />
                        </ProtectedRoutes>
                    },
                    {
                        path: 'income',
                        element: <ProtectedRoutes role="employee"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={3004}>
                            <IncomeService />
                        </ProtectedRoutes>
                    },
                    {
                        path: 'employee-management',
                        element: <ProtectedRoutes role="employee"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={3005}>
                            <Outlet />
                        </ProtectedRoutes>,
                        children: [
                            {
                                index: true,
                                element: <EmployeeManagement />
                            },
                            {
                                path: 'profile/:id',
                                element: <EmployeeProfile />
                            }
                        ]
                    },
                    {
                        path: 'customer-management',
                        element: <ProtectedRoutes role="employee"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={3006}>
                            <Outlet />
                        </ProtectedRoutes>,
                        children: [
                            {
                                index: true,
                                element: <CustomerManagement />
                            },
                            {
                                path: 'profile/:id',
                                element: <EmployeeProfile />
                            }
                        ]
                    },
                    {
                        path: 'agent-management',
                        element: <ProtectedRoutes role="employee"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={3007}>
                            <Outlet />
                        </ProtectedRoutes>,
                        children: [
                            {
                                index: true,
                                element: <AgentManagement />
                            },
                            {
                                path: 'profile/:id',
                                element: <EmployeeProfile />
                            }
                        ]
                    },
                    {
                        path: 'products',
                        element: <ProtectedRoutes role="employee"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={3008}>
                            <ProductsSale />
                        </ProtectedRoutes>
                    },
                    {
                        path: 'settings',
                        element: <ProtectedRoutes role="employee"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={3008}>
                            <Settings />
                        </ProtectedRoutes>
                    },
                    {
                        path: 'profile/:id',
                        element: <ProtectedRoutes role="employee"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={3009}>
                            <EmployeeProfile />
                        </ProtectedRoutes>
                    },
                    {
                        path: 'access-management',
                        element: <ProtectedRoutes role="employee"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={3010}>
                            <AccessManagement />
                        </ProtectedRoutes>
                    }, {
                        path: '*',
                        element: <PageNotFound />
                    }
                ]

            }
        ]
    })
}