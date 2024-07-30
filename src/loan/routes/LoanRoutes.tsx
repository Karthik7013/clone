import { Link, Outlet, Route } from 'react-router-dom'
import LoanLandingPage from '../pages/LoanLandingPage'
import LoanQuotesPage from '../pages/LoanQuotesPage'
import LoanPaymentPage from '../pages/LoanPaymentPage'
import CompareQuotes from '../../Framework/components/CompareQuotes'

const LoanRoutes = () => {
    return (
        <Route path='loan' element={<Outlet />}>
            <Route index element={<LoanLandingPage />} />
            <Route path='quotes' element={<Outlet />}>
                <Route index element={<LoanQuotesPage />} />
                <Route path="compare/:id" element={<CompareQuotes />} />
            </Route>
            <Route path='payment' element={<LoanPaymentPage />} />
        </Route>
    )
}

export default LoanRoutes