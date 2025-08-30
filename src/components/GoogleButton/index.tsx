import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, CircularProgress, Stack } from "@mui/material";
import Button from "../ui/Button";
import { Google } from '@mui/icons-material';

const GoogleButton = () => {
    const { loginWithRedirect, isAuthenticated, user, logout, isLoading } = useAuth0();
    console.log(user);
    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
    };
    if (isLoading) {
        return <CircularProgress size={10} />
    }

    return <div>
        {!isAuthenticated ? (
            <Button
                variant="contained"
                onClick={() => loginWithRedirect()} startIcon={<Google />}>
                Signin
            </Button>
        ) : (
            <Stack direction="row">
                <Avatar src={user?.picture} alt="pic" />
                <Button
                    variant="outlined"
                    color="error"
                    onClick={handleLogout}
                    startIcon={<Google />}>
                    Logout
                </Button>
            </Stack>
        )}
    </div >
};
export default GoogleButton;