import React from "react"
import AccessManagement from "../pages/AccessManagement"
import AdminService from "../pages/AdminService"
import BussinessAnalytics from "../pages/BussinessAnalytics"
import EmployeeManagement from "../pages/EmployeeManagement"
import EmployeeProfile from "../pages/EmployeeProfile"
import ProductsSale from "../pages/ProductsSale"
import RevenueService from "../pages/RevenueService"
import SalesService from "../pages/SalesService"
import Settings from "../pages/Settings"
import IncomeService from "../pages/IcomeService"
import PageNotFound from "../../../Framework/components/PageNotFound"

const getEmployeeRoutes = (role: string) => {
    switch (role) {
        case 'ceo':
            return [
                {
                    index: true,
                    element: <BussinessAnalytics />
                },
                {
                    path: 'service',
                    element: <AdminService />
                },
                {
                    path: 'revenue',
                    element: <RevenueService />
                },
                {
                    path: 'sales',
                    element: <SalesService />
                },
                {
                    path: 'income',
                    element: <IncomeService />
                },
                {
                    path: 'employee-management',
                    element: <EmployeeManagement />
                },
                {
                    path: 'products',
                    element: <ProductsSale />
                },
                {
                    path: 'settings',
                    element: <Settings />
                },
                {
                    path: 'profile/:id',
                    element: <EmployeeProfile />
                },
                {
                    path: 'access-management',
                    element: <AccessManagement />
                }
            ]
        case 'hr':
            return [
                {
                    index: true,
                    element: <EmployeeManagement />
                },
                {
                    path: 'access-management',
                    element: <AccessManagement />
                },
                {
                    path: 'employee/:id',
                    element: <>Employee Profile Page with id:xxx123</>
                }
            ]
        case 'accountant':
            return [
                {
                    index: true,
                    element: <>Accounts</>
                }
            ]
        case 'telecallers':
            return [
                {
                    index: true,
                    element: <>telecallers</>
                }
            ]
        default:
            return [
                {
                    index: true,
                    element: <PageNotFound />
                }
            ]
    }
}





export default getEmployeeRoutes;