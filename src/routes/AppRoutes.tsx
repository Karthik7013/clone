import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
// import TestLayout from "../layouts/TestLayout";

const AppRoutes = () => {
    return <BrowserRouter future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
    }}
    >
        <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route path='*' element={<>not -found </>} />
            <Route path='/test' element={<>not -found </>} />
        </Routes>
    </BrowserRouter>
}
export default AppRoutes;