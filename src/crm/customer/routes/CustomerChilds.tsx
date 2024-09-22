import React, { lazy, Suspense } from 'react';

const MyPolicies = lazy(() => import("../pages/MyPolicies"));
const MyClaims = lazy(() => import("../pages/MyClaims"));
const RegisterClaims = lazy(() => import("../pages/RegisterClaims"));
const Settings = lazy(() => import("../pages/Settings"));
const HelpLine = lazy(() => import("../pages/HelpLine"));
const Home = lazy(() => import("../pages/Home"));
const PageNotFound = lazy(() => import("../../../Framework/components/PageNotFound"));

const componentFor = {
    'home': <Home />,
    'policies': <MyPolicies />,
    'claims': <MyClaims />,
    'register-claims': <RegisterClaims />,
    'settings': <Settings />,
    'help': <HelpLine />
}

const getCustomerRoutes = (profile) => {
    const customerSideNav = profile.sideProps.map((navItem, _) => {
        return { path: _ ? navItem.path : '', element: componentFor[navItem.path], index: !_ }
    })
    return [...customerSideNav, { path: '*', element: <PageNotFound /> }];
}
export default getCustomerRoutes;