import React, { useEffect, useState } from "react";
import axios from 'axios'

axios.defaults.withCredentials = true;
type props = {
    children: React.ReactNode
}
const AuthProvider = (props: props) => {
    const [step1, setStep1] = useState(false)
    const setCache = async () => {
        const res = await axios.get('https://namelix.koyeb.app/setCookie');
        alert(JSON.stringify(res.data));
        setStep1(true)
    }
    const getCache = async () => {
        const res = await axios.get('https://namelix.koyeb.app/getCookie');
        console.log(res.data)
    }
    useEffect(() => {
        setCache();

    }, [])
    useEffect(() => {
        if (step1) {
            getCache()
        }
    }, [step1])
    return <>{props.children}</>
}
export default AuthProvider;
