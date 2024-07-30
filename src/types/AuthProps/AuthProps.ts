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
    type: 'employee' | 'posp' | 'customer',
    role: string,
    firstname: string,
    lastname: string,
    dob: string,
    gender: 'Male' | 'Female',
    empId?: string,
    custId?: string,
    pospId?: string,
    sideProps: navProps[]
}

export type { authProps, profileProps, navProps }
