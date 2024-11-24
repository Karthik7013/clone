import React from 'react';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Navigate, Outlet } from 'react-router-dom';
import CrmLayout from '../../layout/CrmLayout';
import SideDrawer from '../../common/SideDrawer';
import ProtectedRoutes from '../../../ProtectedRoute';
import MessageBox from '../../../Framework/components/MessageBox';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Login = lazy(() => import('../pages/Login'));
const Bookings = lazy(() => import('../pages/Bookings'));
const AddPolicy = lazy(() => import('../pages/AddPolicy'));
const Claims = lazy(() => import('../pages/Claims'));
const Settings = lazy(() => import('../pages/Settings'));
const Helpline = lazy(() => import('../../common/Helpline'));
const Examination = lazy(() => import('../pages/Examination'));
const StudyMaterial = lazy(() => import('../pages/StudyMaterial'));
const PageNotFound = lazy(() => import('../../../Framework/components/PageNotFound'));

export const pospRoutes = () => {
    const islogin = useSelector((state: RootState) => state.auth.isLogin);
    const role = useSelector((state: RootState) => state.auth.role);
    return ({
        path: "agent",
        element: <Outlet />,
        children: [
            {
                path: '/agent',
                element: <Navigate to={(islogin && role === 'agent') ? 'dashboard' : 'signin'} />
            },
            {
                path: 'signin',
                element: (islogin && role === 'agent') ? <Navigate to='/agent/dashboard' /> : <Login />
            },
            {
                path: 'dashboard',
                element: (islogin && role === 'agent') ? <CrmLayout sideBar={<SideDrawer />} /> : <Navigate to='/agent/signin' />,
                children: [
                    {
                        path: '/agent/dashboard',
                        element:
                            <ProtectedRoutes role="agent"
                                fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                                requiredPermission={2000}>
                                <Dashboard />
                            </ProtectedRoutes>
                    },
                    {
                        path: 'bookings',
                        element:
                            <ProtectedRoutes role="agent"
                                fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                                requiredPermission={2001}>
                                <Bookings />
                            </ProtectedRoutes>

                    },
                    {
                        path: 'add-policy',
                        element: <ProtectedRoutes role="agent"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={2002}>
                            <AddPolicy />
                        </ProtectedRoutes>

                    },
                    {
                        path: 'claims',
                        element: <ProtectedRoutes role="agent"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={2003}>
                            <Claims />
                        </ProtectedRoutes>

                    },
                    {
                        path: 'settings',
                        element: <ProtectedRoutes role="agent"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={2004}>
                            <Settings />
                        </ProtectedRoutes>

                    },
                    {
                        path: 'help',
                        element: <ProtectedRoutes role="agent"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={2005}>
                            <Helpline />
                        </ProtectedRoutes>

                    },
                    {
                        path: 'study-material',
                        element: <ProtectedRoutes role="agent"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={2006}>
                            <StudyMaterial />
                        </ProtectedRoutes>

                    },
                    {
                        path: 'examination',
                        element: <ProtectedRoutes role="agent"
                            fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                            requiredPermission={2006}>
                            <Examination />
                        </ProtectedRoutes>
                    }, {
                        path: "*",
                        element: <PageNotFound />
                    }
                ]
            }
        ]
    })
}