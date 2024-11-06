import React, { lazy, Suspense } from 'react';

const MyPolicies = lazy(() => import("../pages/MyPolicies"));
const MyClaims = lazy(() => import("../pages/MyClaims"));
const RegisterClaims = lazy(() => import("../pages/RegisterClaims"));
const Settings = lazy(() => import("../pages/Settings"));
const HelpLine = lazy(() => import("../pages/HelpLine"));
const Home = lazy(() => import("../pages/Home"));
const PageNotFound = lazy(() => import("../../../Framework/components/PageNotFound"));


export {Home as CustomerHome,PageNotFound,HelpLine,Settings,RegisterClaims,MyClaims,MyPolicies}