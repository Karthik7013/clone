import React, { lazy, Suspense } from 'react';
import ProtectedRoutes from '../../../ProtectedRoute';
import MessageBox from '../../../Framework/components/MessageBox';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Navigate, Outlet } from 'react-router-dom';
import SideDrawer from '../../common/SideDrawer';
import CrmLayout from '../../layout/CrmLayout';

const MyPolicies = lazy(() => import("../pages/MyPolicies"));
const MyClaims = lazy(() => import("../pages/MyClaims"));
const RegisterClaims = lazy(() => import("../pages/RegisterClaims"));
const Settings = lazy(() => import("../pages/Settings"));
const HelpLine = lazy(() => import("../pages/HelpLine"));
const Home = lazy(() => import("../pages/Home"));
const PageNotFound = lazy(() => import("../../../Framework/components/PageNotFound"));
const Login = lazy(() => import('../pages/Login'))

export const customerRoutes = () => {
    const islogin = useSelector((state: RootState) => state.auth.isLogin);
    const role = useSelector((state: RootState) => state.auth.role);
    return ({
        path: 'customer',
        element: <Outlet />,
        children: [
            {
                path: '/customer',
                element: <Navigate to={(islogin && role === 'customer') ? 'dashboard' : 'signin'} />
            },
            {
                path: 'signin',
                element: (islogin && role === 'customer') ? <Navigate to='/customer/dashboard' /> : <Login />
            },
            {
                path: 'dashboard',
                element: (islogin && role === 'customer') ? <CrmLayout sideBar={<SideDrawer />} /> : <Navigate to='/customer/signin' />
                , children: [
                    {
                        path: '/customer/dashboard',
                        element: <ProtectedRoutes role="customer"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={1000}>
                            <Home />
                        </ProtectedRoutes>
                    },
                    {
                        path: 'policies',
                        element:
                            <ProtectedRoutes
                                role="customer"
                                requiredPermission={1001}
                                fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            >
                                <MyPolicies />
                            </ProtectedRoutes>
                    },
                    {
                        path: 'claims',
                        element:
                            <ProtectedRoutes role="customer"
                                fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                                requiredPermission={1002}>
                                <MyClaims />
                            </ProtectedRoutes>
                    },
                    {
                        path: 'register',
                        element: <ProtectedRoutes role="customer"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={1003}>
                            <RegisterClaims />
                        </ProtectedRoutes>
                    },
                    {
                        path: 'settings',
                        element:
                            <ProtectedRoutes role="customer"
                                fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                                requiredPermission={1004}>
                                <Settings />
                            </ProtectedRoutes>
                    },
                    {
                        path: 'helpLine',
                        element:
                            <ProtectedRoutes role="customer" requiredPermission={1005}
                                fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            >
                                <HelpLine />
                            </ProtectedRoutes>
                    },
                    {
                        path: '*',
                        element: <PageNotFound />
                    }
                ]

            }
        ]
    })
}
