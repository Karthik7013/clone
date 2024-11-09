import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { ReactNode } from "react"
import React from "react"
import MessageBox from "./Framework/components/MessageBox"
type prop = {
    children: ReactNode,
    role: 'customer' | 'agent' | 'employee',
    requiredPermission: number,
    fallback?: ReactNode
}
const ProtectedRoutes = (props: prop) => {
    const role = useSelector((state: RootState) => state.auth.role);
    let permissions = useSelector((state: RootState) => state.auth.authData?.permissions) || [];
    console.log(permissions, 'permissions')
    permissions = []
    const hasPermission = permissions.includes(props.requiredPermission);
    if (!(props.role === role && hasPermission)) {
        return <>{props.children}</>;
    } else {
        return <>{props.fallback || <MessageBox type="warning" message="You do not have the required permissions." />}</>;
    }
}

export default ProtectedRoutes;