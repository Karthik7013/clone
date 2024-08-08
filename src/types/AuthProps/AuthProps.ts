import { alertProps } from "../UiProps/uiProps";
type navProps = {
    title: string,
    path: string,
    icon: string
}

type authProps = {
    loading: boolean,
    alert: alertProps,
    isLogin: boolean,
    token: string | null,
    profile: null | profileProps
}


type profileProps = {
    joinDate: string,
    access?: string[],
    type: 'employee' | 'customer' | 'posp' | undefined,
    role?: 'ceo' | 'hr' | 'accountant' | 'telecallers' | 'agent' | undefined,
    firstname: string,
    lastname: string,
    dob: string,
    gender: 'Male' | 'Female',
    empId?: string,
    custId?: string,
    pospId?: string,
    sideProps: navProps[],
    menuProps: navProps[],
    department?: 'backend' | 'sales' | 'operation'
}

export type { authProps, profileProps, navProps }
