import React from 'react'
import { BrowserRouter, Navigate, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'
import Footer from './Framework/components/Footer'
import { ThemeProvider, Toolbar } from '@mui/material'
import Header from './Framework/components/Header'
import Home from './Home';
import theme from './theme/theme';
import EmployeeLogin from './crm/employee/pages/EmployeeLogin';
import Login from './crm/common/Login';
import Register from './crm/common/Register';
import { useDispatch, useSelector } from 'react-redux';

// Product Route Files
import TravelRoutes from './travel/routes/TravelRoutes';
import HealthRoutes from './health/routes/HealthRoutes';
import LoanRoutes from './loan/routes/LoanRoutes';
import VehicleRoutes from './vehicle/routes/VehicleRoutes';

// Dashboard Route Files
import EmployeeRoutes from './crm/employee/routes/EmployeeRoutes';
import CustomerRoutes from './crm/customer/routes/CustomerRoutes';
import PospRoutes from './crm/posp/routes/PospRoutes';
import PageNotFound from './Framework/components/PageNotFound';
import { RootProps } from './types/RootProps';
import { closeAlert } from './redux/slice/authSlice';
import AlertBox from './Framework/components/AlertBox';
import { allRouter } from "./allRoute"

const App = () => {
    console.log('app render...');
    const dispatch = useDispatch();
    const dark = useSelector((state: RootProps) => state.ui.dark);
    const type = useSelector((state: RootProps) => state.auth.profile?.type);
    const alert = useSelector((state: RootProps) => state.auth.alert);
    const handleClose = () => dispatch(closeAlert());


    const RootLayout = () => {
        return <>
            <Header />
            <Toolbar />
            <Outlet />
            <Footer />
        </>
    }

    return (
        <ThemeProvider theme={theme({ dark, borderRadius: 5 })}>
            <AlertBox alert={alert} onClose={handleClose} />

            <RouterProvider router={allRouter(type)}></RouterProvider>
            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RootLayout />}>
                        <Route index element={<Home />} />
                        {LoanRoutes()}
                        {VehicleRoutes()}
                        {TravelRoutes()}
                        {HealthRoutes()}
                    </Route>
                    <Route path="/signin" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/employee/login" element={<EmployeeLogin />} />

                    {type === 'employee' && <Route path="/employee/dashboard" element={<Outlet />}>
                        {EmployeeRoutes()}
                    </Route>}

                    {type === 'customer' && <Route path='/customer/dashboard' element={<Outlet />}>
                        {CustomerRoutes()}
                    </Route>}

                    {type === 'posp' && <Route path='/posp/dashboard' element={<Outlet />}>
                        {PospRoutes()}
                    </Route>}

                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter> */}
        </ThemeProvider >
    )
}

export default App