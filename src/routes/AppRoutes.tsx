import { Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import PageNotFound from "../components/PageNotFound";

const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<AppLayout />} />
        <Route path='*' element={<PageNotFound />} />

    </Routes>
}
export default AppRoutes;