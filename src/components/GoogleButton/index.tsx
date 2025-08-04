import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@mui/material";


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    console.log(user);
    return <div>
        {!isAuthenticated ? (
            <button onClick={() => loginWithRedirect()}>Log In</button>
        ) : (
            <div>
                <img src={user?.picture} alt={user?.name} />
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
                <Avatar src={user?.picture} alt="pic" />
                {/* <button onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                </button> */}
            </div>
        )}
    </div>
};
export default LoginButton;