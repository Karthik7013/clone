import { Box, CircularProgress, Typography, Link as MuiLink, Stack, Card, CardContent } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';

import LoginAvatar from "../../../assets/user-profile.svg";
import AgentAvatar from '../../../assets/agent-svgrepo-com.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { loginCustomer, closeAlert } from '../../../redux/slice/authSlice';
import { useForm } from "react-hook-form";
import { loginAgent } from '../../../redux/slice/authSlice';
import AlertBox from '../../../Framework/components/AlertBox';
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="/">
                NameLix 360° Insurance
            </Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>();
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.auth.loading);
    const isLogin = useSelector((state: RootState) => state.auth.isLogin);
    const alert = useSelector((state: RootState) => state.auth.alert);
    const closeAlertHandle = () => dispatch(closeAlert())






    interface FormInput {
        phone: string,
        password: string
    }


    const onSubmit = (data: FormInput) => {
        const { phone } = data;
        console.log({ phone })
        dispatch(loginAgent({ phone }))
    };
    return (
        <Box position='relative'>
            <AlertBox alert={alert} onClose={closeAlertHandle} />
            <Box height={'100dvh'} overflow={'hidden'} >
                <Container component={Stack} alignItems='center' maxWidth="xs">
                    <Box
                        flexGrow={1}
                        component={Card}
                        elevation={2}
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <CardContent>
                            <Avatar src={AgentAvatar} sx={{ width: 70, height: 70, m: 'auto' }}>

                            </Avatar>
                            <Typography component="h1" textAlign='center' variant="h5">
                                Sign in <br />  Agent
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    label="Phone Number"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    {...register('phone', {
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^\d{10}$/,
                                            message: 'Phone number must be 10 digits',
                                        },
                                    })}
                                    inputMode='numeric'
                                    error={!!errors.phone}
                                // helperText={errors.phoneNumber ? errors.phoneNumber.message : ''}
                                />
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type="password"
                                    {...register('password', { required: 'Password is required' })}
                                    error={!!errors.password}
                                // helperText={errors.password ? errors.password.message : ''}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    disabled={isLoading}
                                    type='submit'
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    {isLoading ? <CircularProgress size={24} /> : "Login"}
                                </Button>
                                <MuiLink component={Link} to='/agent/signup'>New ? click here to Register </MuiLink>

                            </Box>
                        </CardContent>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="0.88" d="M0,224L1440,128L1440,320L0,320Z"></path>
                </svg>
            </Box>
        </Box>
    )
}

export default Login;