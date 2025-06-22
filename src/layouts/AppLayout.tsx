import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";
import Footer from "../components/Footer/Footer";
import AuthProvider from "../providers/AuthProvider";
import { Button, Container, Dialog, Toolbar } from "@mui/material";
import Partners from "../components/Partners/Partners";
import Providers from "../components/Providers/Providers";
const Hero = React.lazy(() => import('../components/Hero/Hero'))
const Products = React.lazy(() => import('../components/Products/Products'))
const ProductSummary = React.lazy(() => import('../components/ProductSummary/ProductSummary'));
import Chatbot from '../components/Chatbot';
import Upload from "../components/Upload";

const AppLayout = () => {
    const [state, setState] = useState<boolean>(false);
    const handleState = () => setState((prev) => !prev);
    return <AuthProvider>
        <AppHeader />
        <Toolbar />
        <Hero />
        <Products />
        <ProductSummary />
        <Partners />
        <Providers />
        <Outlet />
        <Upload />
        <Button variant="outlined" onClick={handleState}>Ask Anything</Button>
        {
            state && <Dialog
                fullScreen
                open={true}>
                <Container maxWidth={'md'} sx={{ minHeight: '100dvh', padding: 0 }}>
                    <Chatbot />
                </Container>
            </Dialog>
        }

        <Footer />
    </AuthProvider >
}
export default AppLayout;