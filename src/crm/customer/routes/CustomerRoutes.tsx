import { Route } from 'react-router-dom'
import CrmLayout from '../../layout/CrmLayout'
import MyPolicies from '../pages/MyPolicies'
import MyClaims from '../pages/MyClaims'
import RegisterClaims from '../pages/RegisterClaims'
import Settings from '../pages/Settings'
import Helpline from '../../common/Helpline'

const CustomerRoutes = () => {
    return (
        <Route path="/customer/dashboard" element={<CrmLayout />}>
            <Route index element={<>Customer Home Page</>} />
            <Route path='policies' element={<MyPolicies />} />
            <Route path='claims' element={<MyClaims />} />
            <Route path='register-claims' element={<RegisterClaims />} />
            <Route path='settings' element={<Settings />} />
            <Route path='help' element={<Helpline />} />
        </Route>
    )
}

export default CustomerRoutes