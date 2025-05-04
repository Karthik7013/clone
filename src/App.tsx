import React, { useEffect } from 'react'
import { BrowserRouter, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';

//============ MUI IMPORTS ==============>
import { Container, CssBaseline, LinearProgress, Toolbar } from '@mui/material';

//============ REDUX IMPORTS ==============>
import { useDispatch, useSelector } from 'react-redux';

//============ PROJECT IMPORTS ==============>
import { allRouter } from "./allRoute"
import CustomizePallete from './Framework/components/CustomizePallete';
import CustomThemeProvider from './theme/CustomThemeProvider';
import { AppDispatch, RootState } from './redux/store';
import { CompareQuotes, MessageBox, PageNotFound } from './Framework/components';
import AuthProvider from './Framework/components/AuthProvider';
import Header from './Framework/components/Header';
import ChatBot from './Framework/components/ChatBot';
import Footer from './Framework/components/Footer';
import Home from './Home';
import Login from './crm/customer/pages/Login';
import SideDrawer from './crm/common/SideDrawer';
import CrmLayout from './crm/layout/CrmLayout';


// customer pages
import CustomerHome from './crm/customer/pages/Home';
import ProtectedRoutes from './ProtectedRoute';
import MyPolicies from './crm/customer/pages/MyPolicies';
import MyClaims from './crm/customer/pages/MyClaims';
import RegisterClaims from './crm/customer/pages/RegisterClaims';
import Settings from './crm/customer/pages/Settings';
import HelpLine from './crm/customer/pages/HelpLine';
import { FailedPage, LoanLandingPage, LoanQuotesPage, ThankYouPage } from './loan/pages';


const App = () => {
    const islogin = useSelector((state: RootState) => state.auth.isLogin);
    const role = useSelector((state: RootState) => state.auth.role);
    const dispatch: AppDispatch = useDispatch();


    return (
        <CustomThemeProvider>
            <CssBaseline />
            <React.Suspense fallback={<LinearProgress />} >
                <BrowserRouter
                    future={{
                        v7_relativeSplatPath: true,
                        v7_startTransition: true, // 👈 Add this line
                    }}
                >
                    <Routes>
                        <Route path='customer' element={<Outlet />}>
                            <Route index={!islogin} element={<Login />} />
                            <Route path='' element={<CrmLayout sideBar={<SideDrawer />} />}>
                                <Route index element={<ProtectedRoutes role="customer"
                                    fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                                    requiredPermission={1000}>
                                    <CustomerHome />
                                </ProtectedRoutes>} />

                                <Route path='policies' element={<ProtectedRoutes role="customer"
                                    fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                                    requiredPermission={1000}>
                                    <MyPolicies />
                                </ProtectedRoutes>} />

                                <Route path="claims" element={<ProtectedRoutes role="customer"
                                    fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                                    requiredPermission={1000}>
                                    <MyClaims />
                                </ProtectedRoutes>} />

                                <Route path="register" element={<ProtectedRoutes role="customer"
                                    fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                                    requiredPermission={1000}>
                                    <RegisterClaims />
                                </ProtectedRoutes>} />

                                <Route path="settings" element={<ProtectedRoutes role="customer"
                                    fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                                    requiredPermission={1000}>
                                    <Settings />
                                </ProtectedRoutes>} />

                                <Route path="helpLine" element={<ProtectedRoutes role="customer"
                                    fallback={<MessageBox type="warning" message="You do not have the required permissions." />}
                                    requiredPermission={1000}>
                                    <HelpLine />
                                </ProtectedRoutes>} />
                            </Route>
                        </Route>
                        <Route path='agent' element={<Outlet />}>

                        </Route>
                        <Route path='employee' element={<Outlet />}>

                        </Route>
                        <Route path='/' element={
                            <>
                                <Header />
                                <Toolbar />
                                <Outlet />
                                <ChatBot />
                                <Footer />
                            </>
                        }>
                            <Route index element={<Home />} />
                            <Route path='loan' element={<Outlet />}>
                                <Route index element={<LoanLandingPage />} />
                                <Route path='quotes' element={<Outlet />}>
                                    <Route index element={<LoanQuotesPage />}></Route>
                                    <Route path='compare/:id' element={<CompareQuotes />}></Route>
                                    <Route path='success' element={<ThankYouPage />}></Route>
                                    <Route path='FailedPage' element={<FailedPage />}></Route>
                                </Route>
                            </Route>
                        </Route>
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </React.Suspense>
            <CustomizePallete />
        </CustomThemeProvider >
    )
}

export default App;
