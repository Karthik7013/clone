import { createBrowserRouter, Outlet } from "react-router-dom";

//============ MUI IMPORTS ==============>
import { Toolbar } from "@mui/material";

//============ PROJECT IMPORTS ==============>
import Header from "./Framework/components/Header";
import Home from "./Home";
import Footer from "./Framework/components/Footer";

//============ VEHICLE COMPONENTS IMPORTS ==============>
import { VehicleHome, VehiclePayment, VehicleProposal, VehicleQuotes } from './vehicle/pages/index'

//============ LOAN COMPONENTS IMPORTS ==============>
import { LoanLandingPage, LoanPaymentPage, LoanQuotesPage, FailedPage, ThankYouPage } from "./loan/pages/index"

//============ TRAVEL COMPONENTS IMPORTS ==============>
import { TravelHome, TravelPayment } from "./travel/pages/index"

//============ HEALTH COMPONENTS IMPORTS ==============>
import { HealthHome, HealthPayment, HealthProposal } from "./health/pages/index"

import { customerRoutes } from "./crm/customer/routes/customer.routes";
import { pospRoutes } from "./crm/posp/routes/posp.routes";
import { employeeRoutes } from "./crm/employee/routes/employee.routes";

//============ FRAMEWORK IMPORTS ==============>
import { CompareQuotes, ChatBot, PageNotFound } from "./Framework/components/index";

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
                            element: <FailedPage />
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
                            element: <Outlet />,
                            children: [
                                {
                                    index: true,
                                    element: <VehicleHome />
                                },
                                {
                                    path: 'helow',
                                    element: <>next</>
                                }
                            ]
                        },
                        {
                            path: 'bike',
                            element: <Outlet />,
                            children: [
                                {
                                    index: true,
                                    element: <VehicleHome />
                                },
                                {
                                    path: 'helow',
                                    element: <>next</>
                                }
                            ]
                        },
                        {
                            path: 'commercial',
                            element: <Outlet />,
                            children: [
                                {
                                    index: true,
                                    element: <VehicleHome />
                                },
                                {
                                    path: 'helow',
                                    element: <>next</>
                                }
                            ]
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