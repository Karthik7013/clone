import React from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

//============ MUI IMPORTS ==============>
import { LinearProgress, Toolbar } from "@mui/material";

//============ PROJECT IMPORTS ==============>
import Header from "./Framework/components/Header";
import Home from "./Home";
import Footer from "./Framework/components/Footer";

//============ VEHICLE COMPONENTS IMPORTS ==============>
import VehicleHome from "./vehicle/pages/VehicleHome";

//============ LOAN COMPONENTS IMPORTS ==============>
import LoanLandingPage from "./loan/pages/LoanLandingPage";
import CompareQuotes from "./Framework/components/CompareQuotes";
import LoanQuotesPage from "./loan/pages/LoanQuotesPage";
import LoanPaymentPage from "./loan/pages/LoanPaymentPage";

//============ TRAVEL COMPONENTS IMPORTS ==============>
import TravelHome from "./travel/pages/TravelHome";
import TravelPayment from "./travel/pages/TravelPayment";

//============ HEALTH COMPONENTS IMPORTS ==============>
import HealthHome from "./health/pages/HealthHome";
import HealthProposal from "./health/pages/HealthProposal";
import HealthPayment from "./health/pages/HealthPayment";

//============ DASHBOARD COMPONENTS IMPORTS ==============>
import Register from "./crm/common/Register";
import EmployeeLogin from "./crm/employee/pages/EmployeeLogin";
import CustomerLogin from "./crm/customer/pages/Login";
import AgentLogin from "./crm/posp/pages/Login"

import PageNotFound from "./Framework/components/PageNotFound";

import CrmLayout from "./crm/layout/CrmLayout";
import EmployeeChild from "./crm/employee/routes/EmployeeChild";
import getCustomerRoutes from "./crm/customer/routes/CustomerChilds";
import getPospRoutes from "./crm/posp/routes/pospChilds";
import ChatBot from "./Framework/components/ChatBot";

//============ PRO TYPES IMPORTS ==============>
import { customerProfileProps, employeeProfileProps, pospProfileProps } from "./types/AuthProps/AuthProps";
import { RootProps } from "./types/RootProps";
type allRouterProps = customerProfileProps | null | pospProfileProps | employeeProfileProps

//============ REDUX IMPORTS ==============>
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import BussinessAnalytics from "./crm/employee/pages/BussinessAnalytics";
import AdminService from "./crm/employee/pages/AdminService";
import RevenueService from "./crm/employee/pages/RevenueService";
import SalesService from "./crm/employee/pages/SalesService";
import EmployeeManagement from "./crm/employee/pages/EmployeeManagement";
import ProductsSale from "./crm/employee/pages/ProductsSale";
import EmployeeProfile from "./crm/employee/pages/EmployeeProfile";
import AccessManagement from "./crm/employee/pages/AccessManagement";
import IncomeService from "./crm/employee/pages/IcomeService";
import Settings from "./crm/employee/pages/Settings";
// import CustomerSettings from "./crm/customer/pages/Settings";
import CustomerManagement from "./crm/employee/pages/CustomerManagement";
import AgentManagement from "./crm/employee/pages/AgentManagement";

import { CustomerHome, HelpLine, MyClaims, MyPolicies, RegisterClaims, Settings as CustomerSettings } from "./crm/customer/routes/CustomerChilds";
import ProtectedRoutes from "./ProtectedRoute";

export const allRouter = (props: allRouterProps) => {
    const islogin = useSelector((state: RootState) => state.auth.isLogin);
    const dark = useSelector((state: RootState) => state.ui.dark);
    const profile = useSelector((state: RootState) => state.auth.profile);
    const isLoading = useSelector((state: RootState) => state.auth.loading);
    const role = useSelector((state: RootState) => state.auth.role);

    const headerProps = {
        islogin,
        dark,
        profile
    }




    let commonRoutes = [
        {
            path: "/",
            element: <>
                <Header {...headerProps} />
                <Toolbar />
                <Outlet />
                <ChatBot />
                <Footer />
            </>,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'loan',
                    element: <Outlet />,
                    children: [
                        {
                            index: true,
                            element: <LoanLandingPage />
                        },
                        {
                            path: 'quotes',
                            element: <Outlet />,
                            children: [
                                {
                                    index: true,
                                    element: <LoanQuotesPage />
                                },
                                {
                                    path: 'compare/:id',
                                    element: <CompareQuotes />
                                }
                            ]
                        },
                        {
                            path: 'payment',
                            element: <LoanPaymentPage />
                        }
                    ]
                },
                {
                    path: 'travel',
                    element: <Outlet />,
                    children: [
                        {
                            index: true,
                            element: <TravelHome />
                        },
                        {
                            path: 'quotes',
                            element: <Outlet />,
                            children: [
                                {
                                    index: true,
                                    element: <LoanQuotesPage />
                                },
                                {
                                    path: 'compare/:id',
                                    element: <CompareQuotes />
                                }
                            ]
                        },
                        {
                            path: 'payment',
                            element: <TravelPayment />
                        }
                    ]
                },
                {
                    path: 'health',
                    element: <Outlet />,
                    children: [
                        {
                            index: true,
                            element: <HealthHome />
                        },
                        {
                            path: 'quotes',
                            element: <Outlet />,
                            children: [
                                {
                                    index: true,
                                    element: <LoanQuotesPage />
                                },
                                {
                                    path: 'compare/:id',
                                    element: <CompareQuotes />
                                }
                            ]
                        },
                        {
                            path: 'proposal',
                            element: <HealthProposal />
                        },
                        {
                            path: 'payment',
                            element: <HealthPayment />
                        }
                    ]
                },
                {
                    path: 'motor',
                    element: <Outlet />,
                    children: [
                        {
                            path: 'car',
                            element: <VehicleHome />,

                        },
                        {
                            path: 'bike',
                            element: <VehicleHome />
                        },
                        {
                            path: 'commercial',
                            element: <VehicleHome />
                        }
                    ]
                },
            ],
        },
        {
            path: 'customer',
            element: <Outlet />,
            children: [
                {
                    path: '/customer',
                    element: <Navigate to={(islogin && role === 'customer') ? 'dashboard' : 'signin'} />
                },
                {
                    path: 'signin',
                    element: (islogin && role === 'customer') ? <Navigate to='/customer/dashboard' /> : <CustomerLogin />
                },
                {
                    path: 'dashboard',
                    element: (islogin && role === 'customer') ? <CrmLayout /> : <Navigate to='/customer/signin' />
                    , children: [
                        {
                            path: '/customer/dashboard',
                            element: <ProtectedRoutes role="customer" requiredPermission={1000}>
                                <CustomerHome />
                            </ProtectedRoutes>
                        },
                        {
                            path: 'policies',
                            element:
                                <ProtectedRoutes role="customer" requiredPermission={1001}>
                                    <MyPolicies /></ProtectedRoutes>
                        },
                        {
                            path: 'claims',
                            element:
                                <ProtectedRoutes role="customer" requiredPermission={1002}>
                                    <MyClaims />
                                </ProtectedRoutes>

                        },
                        {
                            path: 'register',
                            element: <ProtectedRoutes role="customer" requiredPermission={1003}>
                                <RegisterClaims />
                            </ProtectedRoutes>
                        },
                        {
                            path: 'settings',
                            element:
                                <ProtectedRoutes role="customer" requiredPermission={1004}>
                                    <CustomerSettings />
                                </ProtectedRoutes>
                        },
                        {
                            path: 'helpLine',
                            element:
                                <ProtectedRoutes role="customer" requiredPermission={1005}>
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
        },
        {
            path: 'agent',
            element: <Outlet />,
            children: [
                {
                    path: '/agent',
                    element: (islogin && role === 'agent') ? <>agent DASHBOARD</> : <>login</>
                }
            ]
        },
        {
            path: '*',
            element: <PageNotFound />
        },
    ]
    return createBrowserRouter(commonRoutes);
}




