
import { Route } from 'react-router-dom';
import CrmLayout from '../../layout/CrmLayout';
import { useSelector } from 'react-redux';
import { RootProps } from '../../../types/RootProps';
import PageNotFound from '../../../Framework/components/PageNotFound';
import EmployeeManagement from '../pages/EmployeeManagement';
import BussinessAnalytics from '../pages/BussinessAnalytics';
import AdminService from '../pages/AdminService';
import RevenueService from '../pages/RevenueService';
import SalesService from '../pages/SalesService';
import IncomeService from "../pages/IcomeService"
import ProductsSale from '../pages/ProductsSale';
import Settings from '../pages/Settings';
import AccessManagement from '../pages/AccessManagement';
import EmployeeProfile from '../pages/EmployeeProfile';
const EmployeeRoutes = () => {
    let role = useSelector((state: RootProps) => state.auth.profile.role);
    // role = "accountant"

    const roleBasedRoutes = (role: string) => {
        // roles = [ceo, hr, accountant, telecallers]
        switch (role) {
            case 'ceo':
                return <>
                    <Route index element={<BussinessAnalytics />} />
                    <Route path='service' element={<AdminService />} />
                    <Route path='revenue' element={<RevenueService />} />
                    <Route path='sales' element={<SalesService />} />
                    <Route path='income' element={<IncomeService />} />
                    <Route path='employee-management' element={<EmployeeManagement />} />
                    <Route path='products' element={<ProductsSale />} />
                    <Route path='settings' element={<Settings />} />
                    <Route path='profile' element={<EmployeeProfile />} />
                    <Route path='employee/:id' element={<>Employee Profile Page with id:xxx123</>} />
                    <Route path='access-management' element={<AccessManagement />} />
                </>
            case 'hr':
                return <>
                    <Route index element={<EmployeeManagement />} />
                    <Route path='access-management' element={<>Access Management</>} />
                    <Route path='employee/:id' element={<>Employee with id:xxx123</>} />
                </>
            case 'accountant':
                return <>
                    <Route index element={<>Products</>} />
                </>
            case 'telecallers':

                return <>

                </>
            default:
                return <>
                    <Route index element={<PageNotFound />} />
                </>
        }
    }


    return (
        <Route path="/employee/dashboard" element={<CrmLayout />}>
            {roleBasedRoutes(role)}
        </Route>
    )
}

export default EmployeeRoutes