import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { ReactNode } from "react"
import React from "react"
import MessageBox from "./Framework/components/MessageBox"
type prop = {
    children: ReactNode,
    role: 'customer' | 'agent' | 'employee',
    requiredPermission: number
}
const ProtectedRoutes = (props: prop) => {
    console.log(props.role === 'customer')
    const role = useSelector((state: RootState) => state.auth.role);
    let permissions = useSelector((state: RootState) => state.auth.profile?.sideProps);
    const newpermissions = [1000, 1001, 1002, 1003, 1004]
    const hasPermission = newpermissions.includes(props.requiredPermission);
    return (props.role === role && hasPermission) ? props.children : <MessageBox type="warning">
        Access Denied for this role or insufficient permissions
    </MessageBox>
}

export default ProtectedRoutes;