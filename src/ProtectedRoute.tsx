import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { ReactNode } from "react"
import { LinearProgress } from "@mui/material"
type prop = {
    children: ReactNode,
    role: 'customer' | 'agent' | 'employee',
    requiredPermission: string | number,
    fallback?: ReactNode
}
const ProtectedRoutes = (props: prop) => {
    const loading = useSelector((state: RootState) => state.auth.loading);
    const role = useSelector((state: RootState) => state.auth.role);
    let permissions = useSelector((state: RootState) => state.auth.authData?.permissions) || [];
    const hasPermission = permissions.includes(props.requiredPermission);

    // return <>{props.children}</>;

    if ((props.role === role && hasPermission)) {
        return <>{props.children}</>;
    } else {
        if (loading) {
            return <LinearProgress />
        } else {
            return <>
                {props.fallback}
            </>;
        }

    }
}

export default ProtectedRoutes;