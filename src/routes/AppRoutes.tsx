import react, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";
import { useAuth0 } from "@auth0/auth0-react";
const AppLayout = react.lazy(async () => await import('../layouts/AppLayout'))
const AppRoutes = () => {
    const { isLoading } = useAuth0();
    if (isLoading) return <Loader />
    return <Suspense fallback={<Loader />}>
        <BrowserRouter future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true
        }}
        >
            <Routes>
                <Route path='/' element={<AppLayout />} />
                <Route path='/auth' element={<>Signin - Signup</>} />
                <Route path='*' element={<>not -found</>} />
            </Routes>
        </BrowserRouter>
    </Suspense>
}
export default AppRoutes;