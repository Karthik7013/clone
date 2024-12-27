import { useParams } from "react-router-dom"

const Profile = ()=>{
    const {id} = useParams();
    return <>profile : {id}</>
}
export default Profile;