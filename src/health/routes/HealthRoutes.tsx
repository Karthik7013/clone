import { Outlet, Route } from 'react-router-dom'
import HealthHome from '../pages/HealthHome'
import HealthQuotes from '../pages/HealthQuotes'
import HealthProposal from '../pages/HealthProposal'
import HealthPayment from '../pages/HealthPayment'
import LoanQuotesPage from '../../loan/pages/LoanQuotesPage'
import { Compare } from '@mui/icons-material';


const HealthRoutes = () => {
    return (
        <Route path='health' element={<Outlet />}>
            <Route index element={<HealthHome />} />
            <Route path='quotes' element={<Outlet />}>
                <Route index element={<LoanQuotesPage />} />
                <Route path="compare/:id" element={<Compare />} />
            </Route>
            <Route path='proposal' element={<HealthProposal />} />
            <Route path='payment' element={<HealthPayment />} />
        </Route>
    )
}

export default HealthRoutes