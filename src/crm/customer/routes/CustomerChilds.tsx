import React from "react";
import MyPolicies from "../pages/MyPolicies";

import MyClaims from "../pages/MyClaims";
import RegisterClaims from "../pages/RegisterClaims";
import Settings from "../pages/Settings";
import HelpLine from "../pages/HelpLine";
import Home from "../pages/Home";

const getCustomerRoutes = () => ([
    {
        index: true,
        element: <Home />
    },
    {
        path: 'policies',
        element: <MyPolicies />
    },
    {
        path: 'claims',
        element: <MyClaims />
    },
    {
        path: 'register-claims',
        element: <RegisterClaims />
    },
    {
        path: 'settings',
        element: <Settings />
    },
    {
        path: 'help',
        element: <HelpLine />
    }
])
export default getCustomerRoutes;