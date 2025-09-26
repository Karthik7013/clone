import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

const AppRoutes = () => {
    return <BrowserRouter future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
    }}
    >
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="chat/:id" element={<>chat container by id</>} />
            </Route>
            <Route path='*' element={<>not -found </>} />
        </Routes>
    </BrowserRouter>
}
export default AppRoutes;