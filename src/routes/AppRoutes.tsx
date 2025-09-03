import react from "react"
import { Route, Routes } from "react-router-dom";
// import DashboardLayout from "../layouts/DashboardLayout";
const AppLayout = react.lazy(async () => await import('../layouts/AppLayout'))
const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<AppLayout />} />
        {/* <Route path='/' element={<DashboardLayout />} /> */}
        <Route path='/auth' element={<>Signin - Signup</>} />
    </Routes>
}
export default AppRoutes;