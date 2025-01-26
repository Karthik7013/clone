import { Box, Card, CardContent, CardMedia, CircularProgress, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { closeAlert, loginEmployee } from '../../../redux/slice/authSlice';
import { useForm, Controller } from 'react-hook-form'; // import react-hook-form
import loginPanel from "/login-panel.svg";
import logo from "/logo.jpg";
import AlertBox from '../../../Framework/components/AlertBox';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="/">
                NameLix 360° Insurance
            </Link>
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
interface LoginProps {
    mobile: string,
    otp: string
}
const EmployeeLogin = () => {
    const dispatch: AppDispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.auth.loading);
    const alert = useSelector((state: RootState) => state.auth.alert);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginProps>({
        defaultValues: {
            mobile: '',
            otp: '',
        },
    });

    const onSubmit = (data: LoginProps) => {
        const { mobile } = data;
        dispatch(loginEmployee({ phone: mobile }));
    };
    const handleCloseAlert = () => dispatch(closeAlert());

    return (
        <Box>
            <AlertBox variant='outlined' alert={alert} onClose={handleCloseAlert} />
            <Grid container component="main" sx={{ height: "100dvh" }}>
                <Grid
                    component={Stack}
                    item
                    alignItems='center'
                    xs={false}
                    lg={7}
                    sx={{ padding: 16 }}>
                    <CardMedia component='img' src={loginPanel} alt="alt" />
                </Grid>
                <Grid item xs={12} lg={5} component={Stack} alignItems='center' justifyContent={'center'}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            px: 5,
                        }}
                    >
                        <Card elevation={10}>
                            <CardContent component={Stack} alignItems="center" my={5}>
                                <Card elevation={0}>
                                    <CardMedia component="img" height={60} image={logo} alt="company logo" />
                                </Card>
                                <Typography component="h1" variant="h5">
                                    Employee Sign in
                                </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3, px: 5 }}>
                                    <Controller
                                        name="mobile"
                                        control={control}
                                        rules={{
                                            required: 'Mobile number is required',
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: 'Invalid phone number',
                                            },
                                        }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="mobile"
                                                label="Mobile Number"
                                                name="mobile"
                                                autoComplete="mobile"
                                                autoFocus
                                                error={!!errors.mobile}
                                                helperText={errors.mobile?.message}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="otp"
                                        control={control}
                                        rules={{
                                            required: 'OTP is required',
                                        }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                // disabled
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="otp"
                                                name="otp"
                                                autoComplete="otp"
                                                autoFocus
                                                type="password"
                                                label="Enter OTP"
                                                error={!!errors.otp}
                                                helperText={errors.otp?.message}
                                            />
                                        )}
                                    />

                                    <Button
                                        disabled={isLoading}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        {isLoading ? <CircularProgress size={24} /> : 'Login'}
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link to="#">Forgot password?</Link>
                                        </Grid>
                                    </Grid>
                                    <Copyright sx={{ mt: 5 }} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default EmployeeLogin;
