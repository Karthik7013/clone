import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import React, { lazy } from "react";

const EmployeeLogin = lazy(()=> import('../pages/EmployeeLogin'));

export const employeeRoutes = ()=>{
    const islogin = useSelector((state: RootState) => state.auth.isLogin);
    const role = useSelector((state: RootState) => state.auth.role);
    return ({
        path: 'employee',
        element: <Outlet />,
        children: [
            {
                path: '/employee',
                element: <Navigate to={(islogin && role === 'employee') ? 'dashboard' : 'signin'} />
            },
            {
                path: 'signin',
                element: (islogin && role === 'employee') ? <Navigate to='/employee/dashboard' /> : <EmployeeLogin />
            }
        ]
    })
}