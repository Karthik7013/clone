
import React, { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Bookings = lazy(() => import('../pages/Bookings'));
const AddPolicy = lazy(() => import('../pages/AddPolicy'));
const Claims = lazy(() => import('../pages/Claims'));
const Settings = lazy(() => import('../pages/Settings'));
const Helpline = lazy(() => import('../../common/Helpline'));
const Examination = lazy(() => import('../pages/Examination'));
const StudyMaterial = lazy(() => import('../pages/StudyMaterial'));
const PageNotFound = lazy(() => import('../../../Framework/components/PageNotFound'));


const componentFor = {
    "overview": <Dashboard />,
    "bookings": <Bookings />,
    "add-policy": <AddPolicy />,
    "claims": <Claims />,
    "settings": <Settings />,
    "help": <Helpline />,
    "study-material": <StudyMaterial />,
    "examination": <Examination />,
}

const getPospRoutes = (profile) => {
    const sidebarNav = profile.sideProps;
    const pospSideNav = sidebarNav.map((navItem, _) => {
        return { path: _ ? navItem.path : '', element: componentFor[navItem.path], index: !_ }
    })
    return [...pospSideNav, { path: '*', element: <PageNotFound /> }]
}

export default getPospRoutes;