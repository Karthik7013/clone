import { Outlet, Route } from "react-router-dom"
import VehicleHome from "../pages/VehicleHome"
import VehicleQuotes from "../pages/VehicleQuotes"
import VehicleProposal from "../pages/VehicleProposal"
import VehiclePayment from "../pages/VehiclePayment"
import LoanQuotesPage from "../../loan/pages/LoanQuotesPage"

const VehicleRoutes = () => {
    return (
        <Route path='motor' element={<Outlet />}>
            <Route index element={<VehicleHome />} />
            <Route path='quotes' element={<LoanQuotesPage />} />
            <Route path='proposal' element={<VehicleProposal />} />
            <Route path='payment' element={<VehiclePayment />} />
        </Route>
    )
}

export default VehicleRoutes