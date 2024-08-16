import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Framework/components/Header";
import { Toolbar } from "@mui/material";
import Footer from "./Framework/components/Footer";
import Home from "./Home";
import LoanLandingPage from "./loan/pages/LoanLandingPage";
import CompareQuotes from "./Framework/components/CompareQuotes";
import LoanQuotesPage from "./loan/pages/LoanQuotesPage";
import LoanPaymentPage from "./loan/pages/LoanPaymentPage";
import TravelHome from "./travel/pages/TravelHome";
import TravelPayment from "./travel/pages/TravelPayment";
import HealthHome from "./health/pages/HealthHome";
import HealthProposal from "./health/pages/HealthProposal";
import HealthPayment from "./health/pages/HealthPayment";
import Register from "./crm/common/Register";
import EmployeeLogin from "./crm/employee/pages/EmployeeLogin";
import Login from "./crm/common/Login";
import PageNotFound from "./Framework/components/PageNotFound";

import CrmLayout from "./crm/layout/CrmLayout";
import EmployeeChild from "./crm/employee/routes/EmployeeChild";
import getCustomerRoutes from "./crm/customer/routes/CustomerChilds";
import getPospRoutes from "./crm/posp/routes/pospChilds";
import ChatBot from "./Framework/components/ChatBot";
import { customerProfileProps, employeeProfileProps, pospProfileProps } from "./types/AuthProps/AuthProps";
const VehicleHome = React.lazy(() => import("./vehicle/pages/VehicleHome"))


type allRouterProps = customerProfileProps | null | pospProfileProps | employeeProfileProps

export const allRouter = (props: allRouterProps) => {
    let commonRoutes = [
        {
            path: "/",
            element: <>
                <Header />
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
                                }, {
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
            path: 'signin',
            element: <Login />
        },
        {
            path: 'signup',
            element: <Register />
        },
        {
            path: 'employee/login',
            element: <EmployeeLogin />
        },
        {
            path: '*',
            element: <PageNotFound />
        },
        {
            path: 'dashboard',
            element: <CrmLayout />,
            children: [
                // ...getCustomerRoutes(),
                // ...getPospRoutes(false)
                // ...EmployeeChild('ceo')
            ]
        }
    ]

    return createBrowserRouter(commonRoutes);
}




