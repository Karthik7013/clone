import { Box, CircularProgress, Typography, Link as MuiLink } from '@mui/material'
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
    const alert:any = useSelector((state: RootState) => state.auth.alert);
    const closeAlertHandle = () => dispatch(closeAlert())






    interface FormInput {
        phone: string,
        password:string
    }


    const onSubmit = (data:FormInput) => {
        const { phone } = data;
        console.log({ phone })
        dispatch(loginAgent({ phone }))
    };
    return (
        <Box className="container">
            <AlertBox alert={alert} onClose={closeAlertHandle} />
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar src={AgentAvatar} sx={{ width: 70, height: 70, m: 1 }}>

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

                    {/*     <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
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
                        <Link to="/">posp/customer dashboard</Link>
                        <Grid container>
                            <Grid item xs>
                                <Link to="#">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                   */}

                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </Box>
    )
}

export default Login;










