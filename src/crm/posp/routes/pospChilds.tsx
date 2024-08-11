import React from 'react'
import Dashboard from '../pages/Dashboard';
import Bookings from '../pages/Bookings';
import AddPolicy from '../pages/AddPolicy';
import Claims from '../pages/Claims';
import Settings from '../pages/Settings';
import Helpline from '../../common/Helpline';
import Examination from '../pages/Examination';
import StudyMaterial from '../pages/StudyMaterial';
import HelpLine from '../../customer/pages/HelpLine';


const getPospRoutes = (exam: boolean) => {
    if (exam) {
        return [
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
        ]
    }
    else {
        return [
            {
                index: true,
                element: <Examination />
            },
            {
                path: 'study-material',
                element: <StudyMaterial />
            },
            {
                path: 'help',
                element: <HelpLine />
            },

        ]
    }
}

export default getPospRoutes;