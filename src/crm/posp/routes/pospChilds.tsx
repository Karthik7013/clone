import React from 'react'
import Dashboard from '../pages/Dashboard';
import Bookings from '../pages/Bookings';
import AddPolicy from '../pages/AddPolicy';
import Claims from '../pages/Claims';
import Settings from '../pages/Settings';
import Helpline from '../../common/Helpline';

const getPospRoutes = () => ([
    {
        index: true,
        element: <Dashboard />
    },
    {
        path: 'bookings',
        element: <Bookings />
    },
    {
        path: 'add-policy',
        element: <AddPolicy />
    },
    {
        path: 'claims',
        element: <Claims />
    },
    {
        path: 'settings',
        element: <Settings />
    },
    {
        path: 'help',
        element: <Helpline />
    }
])

export default getPospRoutes;