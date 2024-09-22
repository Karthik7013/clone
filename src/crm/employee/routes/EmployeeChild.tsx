import React from "react"
const AccessManagement = React.lazy(() => import("../pages/AccessManagement"));
const AdminService = React.lazy(() => import("../pages/AdminService"));
const BussinessAnalytics = React.lazy(() => import("../pages/BussinessAnalytics"));
const EmployeeManagement = React.lazy(() => import("../pages/EmployeeManagement"));
const EmployeeProfile = React.lazy(() => import("../pages/EmployeeProfile"));
const ProductsSale = React.lazy(() => import("../pages/ProductsSale"));
const RevenueService = React.lazy(() => import("../pages/RevenueService"));
const SalesService = React.lazy(() => import("../pages/SalesService"));
const Settings = React.lazy(() => import("../pages/Settings"));
const IncomeService = React.lazy(() => import("../pages/IcomeService"));
const PageNotFound = React.lazy(() => import("../../../Framework/components/PageNotFound"));

const componentFor = {
    'analytics': <BussinessAnalytics />,
    'service': <AdminService />,
    'revenue': <RevenueService />,
    'sales': <SalesService />,
    'income': <IncomeService />,
    'employee-management': <EmployeeManagement />,
    'products': <ProductsSale />,
    'settings': <Settings />,
    'profile': <EmployeeProfile />,
    'access-management': <AccessManagement />
}
const getEmployeeRoutes = (profile) => {
    const employeeSideNav = profile.sideProps.map((navItem, _) => {
        return { path: _ ? navItem.path : '', element: componentFor[navItem.path], index: !_ }
    })
    return [...employeeSideNav, { path: '*', element: <PageNotFound /> }];
    const employeSideNav = profile.sideProps;
    console.log(employeSideNav, 'see here')
    switch (profile.role) {
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
                    path: 'profile/:id',
                    element: <EmployeeProfile />
                },
                {
                    path: 'settings',
                    element: <>HR Settings</>
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