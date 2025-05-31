import axios from 'axios'

axios.defaults.withCredentials = true;
type props = {
    children: React.ReactNode
}
const AuthProvider = (props: props) => {
    return props.children
}
export default AuthProvider;