import React, { useEffect } from "react";
import axios from 'axios'
type props = {
    children: React.ReactNode
}
const AuthProvider = (props: props) => {
    const setCache = async () => {
        const res = await axios.get('https://namelix.koyeb.app/setCookie');
        alert(JSON.stringify(res.data))
    }
    useEffect(() => {
        setCache()
    }, [])
    return <>{props.children}</>
}
export default AuthProvider;