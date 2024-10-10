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
import CustomerSettings from "./crm/customer/pages/Settings";
import CustomerManagement from "./crm/employee/pages/CustomerManagement";
import AgentManagement from "./crm/employee/pages/AgentManagement";

export const allRouter = (props: allRouterProps) => {
    const islogin = useSelector((state: RootState) => state.auth.isLogin);
    const dark = useSelector((state: RootState) => state.ui.dark);
    const profile = useSelector((state: RootState) => state.auth.profile);
    const isLoading = useSelector((state: RootState) => state.auth.loading)

    const headerProps = {
        islogin,
        dark,
        profile
    }
    console.log(headerProps, 'headerprops')
    const getRoleBaseRoutes = () => {
        const employeeFullAccessRoutes = [
            {
                path: '/dashboard',
                element: <BussinessAnalytics />
            },
            {
                path: 'employee-management',
                element: <Outlet />,
                children: [
                    {
                        path: 'profile/:id',
                        element: <EmployeeProfile />
                    },
                    {
                        index: true,
                        element: <EmployeeManagement />
                    }
                ]
            },
            {
                path: 'agent-management',
                element: <Outlet />,
                children: [
                    {
                        path: 'profile/:id',
                        element: <EmployeeProfile />
                    },
                    {
                        index: true,
                        element: <AgentManagement />
                    }
                ]
            },
            {
                path: 'customer-management',
                element: <Outlet />,
                children: [
                    {
                        path: 'profile/:id',
                        element: <CustomerSettings />
                    },
                    {
                        index: true,
                        element: <CustomerManagement />
                    }
                ]
            },
            {
                path: 'settings',
                element: <Settings />
            },
            {
                path: 'income',
                element: <IncomeService />
            },
            {
                path: 'access-management',
                element: <AccessManagement />
            },
            {
                path: 'profile',
                element: <EmployeeProfile />
            },
            {
                path: 'products',
                element: <ProductsSale />
            }
        ]
        const customerAccessRoutes = [

        ]
        return customerAccessRoutes;
        switch (props?.type) {
            case 'customer':
                return getCustomerRoutes(profile)
            case 'employee':
                return EmployeeChild(profile)
            case 'posp':
                return getPospRoutes(profile)
            default:
                return [];
        }
    }

    const componentFor = {
        'analytics': <BussinessAnalytics />,
        'service': <AdminService />,
        'revenue': <RevenueService />,
        'sales': <SalesService />,
        'income': <IncomeService />,
        'employee-management': <EmployeeManagement />,
        'products': <ProductsSale />,
        'settings': <Settings />,
        'profile': <EmployeeProfile />,
        'access-management': <AccessManagement />
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
            ]
        },
        {
            path: 'customer/signin',
            element: <CustomerLogin />
        },
        {
            path: 'customer/signup',
            element: <Register />
        },
        {
            path: 'agent/signin',
            element: <AgentLogin />
        },
        {
            path: 'agent/signup',
            element: <Register />
        },
        {
            path: 'employee/login',
            element: <EmployeeLogin />
        },
        {
            path: 'dashboard',
            element: islogin ? <CrmLayout /> : (isLoading ? <LinearProgress /> : <PageNotFound />),
            children: [...getRoleBaseRoutes()]
        },
        {
            path: '*',
            element: <PageNotFound />
        },
    ]
    return createBrowserRouter(commonRoutes);
}




