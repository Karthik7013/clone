import react from "react"
import { Route, Routes } from "react-router-dom";
const AppLayout = react.lazy(async () => await import('../layouts/AppLayout'))
const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<AppLayout />} />
        <Route path='/auth' element={<>Signin - Signup</>} />
        <Route path='*' element={<>not -found</>} />
    </Routes>
}
export default AppRoutes;