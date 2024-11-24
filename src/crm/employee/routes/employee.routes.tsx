import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import React, { lazy } from "react";
import SideDrawer from "../../common/SideDrawer";
import CrmLayout from "../../layout/CrmLayout";
const EmployeeLogin = lazy(() => import('../pages/EmployeeLogin'));
const AccessManagement = React.lazy(() => import("../pages/AccessManagement"));
const AdminService = React.lazy(() => import("../pages/AdminService"));
const BussinessAnalytics = React.lazy(() => import("../pages/BussinessAnalytics"));
const EmployeeManagement = React.lazy(() => import("../pages/EmployeeManagement"));
const EmployeeProfile = React.lazy(() => import("../pages/EmployeeProfile"));
const ProductsSale = React.lazy(() => import("../pages/ProductsSale"));
const RevenueService = React.lazy(() => import("../pages/RevenueService"));
const SalesService = React.lazy(() => import("../pages/SalesService"));
const Settings = React.lazy(() => import("../pages/Settings"));
const IncomeService = React.lazy(() => import("../pages/IcomeService"));
const PageNotFound = React.lazy(() => import("../../../Framework/components/PageNotFound"));

export const employeeRoutes = () => {
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
                            <BussinessAnalytics />
                    },
                    {
                        path: 'service',
                        element: <AdminService />
                    },
                    {
                        path: 'revenue',
                        element: <RevenueService />
                    },
                    {
                        path: 'sales',
                        element: <SalesService />
                    },
                    {
                        path: 'income',
                        element: <IncomeService />
                    },
                    {
                        path: 'employee-management',
                        element: <EmployeeManagement />
                    },
                    {
                        path: 'products',
                        element: <ProductsSale />
                    },
                    {
                        path: 'settings',
                        element: <Settings />
                    },
                    {
                        path: 'profile/:id',
                        element: <EmployeeProfile />
                    },
                    {
                        path: 'access-management',
                        element: <AccessManagement />
                    }, {
                        path: '*',
                        element: <PageNotFound />
                    }
                ]

            }
        ]
    })
}