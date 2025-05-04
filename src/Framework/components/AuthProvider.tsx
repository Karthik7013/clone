interface authProps {
    children: React.ReactNode
}

const AuthProvider = (props: authProps) => {
    return props.children
}

export default AuthProvider;