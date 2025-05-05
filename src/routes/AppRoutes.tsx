import { Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<AppLayout />} />
    </Routes>
}
export default AppRoutes;