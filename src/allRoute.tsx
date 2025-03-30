import { createBrowserRouter, Outlet } from "react-router-dom";

//============ MUI IMPORTS ==============>
import { Box, Chip, Container, Toolbar, Typography } from "@mui/material";

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
import { ChatBot as Chat } from "./Framework/components/ChatBot";
import AuthProvider from "./Framework/components/AuthProvider";

export const allRouter = () => {
    let commonRoutes = [
        {
            path: "/",
            element:
                <AuthProvider>
                    <Header />
                    <Toolbar />
                    <Outlet />
                    <ChatBot />
                    <Footer />
                </AuthProvider>,
            children: [
                {
                    index: true,
                    element: <Home />,
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