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
    authData: any
    // profile: null | customerProfileProps | pospProfileProps | employeeProfileProps,
    role: null | 'customer' | 'employee' | 'agent'
}

// new_
type customerProfileProps = {
    type: 'customer',
    firstname: string,
    lastname: string,
    dob: string,
    gender: 'Male' | 'Female',
    custId: string,
    sideProps: navProps[],
    menuProps: navProps[],
    location: string,
}

type pospProfileProps = {
    joinDate: string,
    firstname: string,
    lastname: string,
    dob: string,
    gender: 'Male' | 'Female',
    pospId: string,
    sideProps: navProps[],
    menuProps: navProps[],
    exam: boolean,
    type: 'posp',
    location: string
}

type employeeProfileProps = {
    joinDate: string,
    access: string[],
    type: 'employee' | 'customer' | 'posp' | undefined,
    role: 'ceo' | 'hr' | 'accountant' | 'telecallers' | 'agent' | undefined,
    firstname: string,
    lastname: string,
    dob: string,
    gender: 'Male' | 'Female',
    empId: string,
    sideProps: navProps[],
    menuProps: navProps[],
    department: 'backend' | 'sales' | 'operation' | 'hiring',
    location: string
}

export type { authProps, navProps, customerProfileProps, pospProfileProps, employeeProfileProps }
