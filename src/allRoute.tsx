import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

//============ MUI IMPORTS ==============>
import { Toolbar } from "@mui/material";

//============ PROJECT IMPORTS ==============>
import Header from "./Framework/components/Header";
import Home from "./Home";
import Footer from "./Framework/components/Footer";

//============ VEHICLE COMPONENTS IMPORTS ==============>
import { VehicleHome } from './vehicle/pages/index'

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

import PageNotFound from "./Framework/components/PageNotFound";
import ChatBot from "./Framework/components/ChatBot";

//============ REDUX IMPORTS ==============>

import { customerRoutes } from "./crm/customer/routes/customer.routes";
import { pospRoutes } from "./crm/posp/routes/posp.routes";
import { employeeRoutes } from "./crm/employee/routes/employee.routes";
import ThankYouPage from "./loan/pages/ThankYouPage";
import Failedpage from "./loan/pages/FailedPage";


export const allRouter = () => {
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
                        },
                        {
                            path: 'success',
                            element: <ThankYouPage />
                        },
                        {
                            path: 'failed',
                            element: <Failedpage />
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
                }
            ],
        },
        { ...customerRoutes() },
        { ...pospRoutes() },
        { ...employeeRoutes() },
        {
            path: '*',
            element: <PageNotFound />
        },
    ]
    return createBrowserRouter(commonRoutes);
}