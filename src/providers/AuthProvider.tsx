import React from "react";

type props = {
    children: React.ReactNode
}
const AuthProvider = (props: props) => {
    return <>{props.children}</>
}
export default AuthProvider;