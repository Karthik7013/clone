import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Stack } from "@mui/material";
import Button from "../ui/Button/Button";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    console.log(user);
    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
    };
    return <div>
        {!isAuthenticated ? (
            <Button onClick={() => loginWithRedirect()} startIcon={<LoginRoundedIcon />}>
                Signin
            </Button>
        ) : (
            <Stack direction="row">
                <Avatar src={user?.picture} alt="pic" />
                <Button
                    onClick={handleLogout}
                    startIcon={<LoginRoundedIcon />}>
                    Signin
                </Button>
            </Stack>
        )}
    </div >
};
export default LoginButton;