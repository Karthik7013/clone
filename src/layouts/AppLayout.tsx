import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";
import Footer from "../components/Footer/Footer";
import AuthProvider from "../providers/AuthProvider";
import { Toolbar } from "@mui/material";
import Partners from "../components/Partners/Partners";
import Providers from "../components/Providers/Providers";
const Hero = React.lazy(() => import('../components/Hero/Hero'))
const Products = React.lazy(() => import('../components/Products/Products'))
const ProductSummary = React.lazy(() => import('../components/ProductSummary/ProductSummary'))

const AppLayout = () => {
    return <AuthProvider>
        <AppHeader />
        <Toolbar />
        <Hero />
        <Products />
        <ProductSummary />
        <Partners />
        <Providers />
        <Outlet />
        <Footer />
    </AuthProvider>
}
export default AppLayout;