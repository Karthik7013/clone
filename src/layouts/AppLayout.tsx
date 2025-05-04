import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";
import Footer from "../components/Footer/Footer";
import AuthProvider from "../providers/AuthProvider";
import Hero from "../components/Hero/Hero";
import { Toolbar } from "@mui/material";

const AppLayout = () => {
    return <AuthProvider>
        <AppHeader />
        <Toolbar />
        <Hero />
        <Outlet />
        <Footer />
    </AuthProvider>
}
export default AppLayout;