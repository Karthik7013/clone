import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAgentProfile, getCustomerProfile, getEmployeeProfile } from "../../redux/slice/authSlice";
import { AppDispatch, RootState } from "../../redux/store";

interface authProps {
    children: React.ReactNode
}

const AuthProvider = (props: authProps) => {
    const dispatch: AppDispatch = useDispatch();
    const role = useSelector((state: RootState) => state.auth.role);
    useEffect(() => {
        switch (role) {
            case 'customer':
                dispatch(getCustomerProfile({}));
                break;
            case 'agent':
                dispatch(getAgentProfile({}));
                break;
            case 'employee':
                dispatch(getEmployeeProfile({}));
                break;
            default:
                break;
        }
    }, [role]);
    return props.children
}
export default AuthProvider;