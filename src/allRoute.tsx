import React, { useCallback, useMemo, useState } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

//============ MUI IMPORTS ==============>
import { Toolbar } from "@mui/material";

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

import CustomerLogin from "./crm/customer/pages/Login";
import PageNotFound from "./Framework/components/PageNotFound";
import CrmLayout from "./crm/layout/CrmLayout";
import ChatBot from "./Framework/components/ChatBot";

//============ PRO TYPES IMPORTS ==============>


//============ REDUX IMPORTS ==============>
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";

import { CustomerHome, HelpLine, MyClaims, MyPolicies, RegisterClaims, Settings as CustomerSettings } from "./crm/customer/routes/CustomerChilds";
import ProtectedRoutes from "./ProtectedRoute";
import ProductSummary from "./Framework/components/ProductSummary";
import { useDispatch } from "react-redux";
import { handlePallete, increaseCounter, toggleTheme } from "./redux/slice/uiSlice";

export const allRouter = () => {
    const dispatch: AppDispatch = useDispatch();
    const islogin = useSelector((state: RootState) => state.auth.isLogin);
    const dark = useSelector((state: RootState) => state.ui.dark);
    const profile = useSelector((state: RootState) => state.auth.authData);
    const role = useSelector((state: RootState) => state.auth.role);

    const handleDrawer = useCallback(() => dispatch(increaseCounter()), [dispatch])

    let commonRoutes = [
        {
            path: "/",
            element: <>
                <Header {...{ islogin, dark, profile }} />
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
                {
                    path:'summary',
                    element:<ProductSummary />
                }
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
                                <ProtectedRoutes
                                    role="customer"
                                    requiredPermission={1001}
                                >
                                    <MyPolicies policies={policies} />
                                </ProtectedRoutes>
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




