
import { Route } from 'react-router-dom'
import CrmLayout from '../../layout/CrmLayout'
import Helpline from '../../common/Helpline'
import Bookings from '../pages/Bookings'
import AddPolicy from '../pages/AddPolicy'
import Claims from '../pages/Claims'
import Settings from '../pages/Settings'
import Dashboard from '../pages/Dashboard'

const PospRoutes = () => {
    return (
        <Route path="/posp/dashboard" element={<CrmLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='add-policy' element={<AddPolicy />} />
            <Route path='claims' element={<Claims />} />
            <Route path='settings' element={<Settings />} />
            <Route path='help' element={<Helpline />} />
        </Route>
    )
}

export default PospRoutes