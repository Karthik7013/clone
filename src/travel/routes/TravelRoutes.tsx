import { Outlet, Route } from 'react-router-dom'
import TravelHome from '../pages/TravelHome'
import TravelQuotes from '../pages/TravelQuotes'
import TravelProposalDetails from '../pages/TravelProposalDetails'
import TravelPayment from '../pages/TravelPayment'
import LoanQuotesPage from '../../loan/pages/LoanQuotesPage'
import CompareQuotes from '../../Framework/components/CompareQuotes'

const TravelRoutes = () => {
    return (
        <Route path='travel' element={<Outlet />}>
            <Route index element={<TravelHome />} />
            <Route path='quotes' element={<Outlet />}>
                <Route index element={<LoanQuotesPage />} />
                <Route path="compare/:id" element={<CompareQuotes />} />
            </Route>
            <Route path='proposal' element={<TravelProposalDetails />} />
            <Route path='payment' element={<TravelPayment />} />
        </Route>
    )
}

export default TravelRoutes