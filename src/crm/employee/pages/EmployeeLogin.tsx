import { Box, Card, CardMedia, CircularProgress, Stack, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { useDispatch, useSelector } from 'react-redux';
import { RootProps } from '../../../types/RootProps';
import { closeAlert, loginUser } from '../../../redux/slice/authSlice';
// import LoadingModal from '../../../Framework/components/LoadingModal';
import loginPanel from "/login-panel.svg"
import logo from "/logo.jpg";
import { AppDispatch, RootState } from '../../../redux/store';
import AlertBox from '../../../Framework/components/AlertBox';


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const EmployeeLogin = () => {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch();
    const isLoading = useSelector((state: RootProps) => state.auth.loading);
    const isLogin = useSelector((state: RootProps) => state.auth.isLogin);

    React.useEffect(() => {
        if (isLogin) navigate('/dashboard')
    }, [isLogin])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const data = { email: "mani123@gmail.com", password: "1234" }
        const data = { phone: 9876543225 }
        dispatch(loginUser(data));
    }
    return (
        <Box>

            {/* <AlertBox alert={alert} onClose={handleCloseAlert} /> */}
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${loginPanel})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'left',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Stack} justifyContent={'center'}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            px: 5
                        }}
                    >
                        <Card elevation={0}>
                            <CardMedia
                                component="img"
                                height={60}
                                image={logo}
                                alt="company logo"
                            />
                        </Card>



                        <Typography component="h1" variant="h5">
                            Employee Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="mobile"
                                label="Mobile Number"
                                name="mobile"
                                autoComplete="mobile"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="otp"

                                name="otp"
                                autoComplete="otp"
                                autoFocus
                                type="password" label="Enter OTP" />


                            <Button

                                disabled={isLoading}
                                type='submit'
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {isLoading ? <CircularProgress size={24} /> : "Login"}
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="#">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                            {/* <LoadingModal /> */}
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default EmployeeLogin






