import React, { useState, useRef, InputHTMLAttributes } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, CardMedia, CircularProgress, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import otpBanner from "../../assets/otp-banner.svg"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { resetVerifyOtpAlert, verifyOtp } from '../../redux/slice/loanSlice';
import AlertBox from './AlertBox';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
type otpModalProps = {
    open: boolean,
    setClose: () => void
}



const OtpModal = (props: otpModalProps) => {
    const verifyLoading = useSelector((state: RootState) => state.loan.verifyOtp.loading);
    const verifyAlert = useSelector((state: RootState) => state.loan.verifyOtp.alert);
    const dispatch: AppDispatch = useDispatch();
    const [otpValues, setOtpValues] = useState(["", "", "", ""]);
    const otp = Array.from({ length: 4 }, () => useRef<HTMLInputElement | null>(null));
    const { open, setClose } = props;
    const handleClose = () => setClose();
    const closeErrorAlert = () => dispatch(resetVerifyOtpAlert());



    const verifyOtpSubmit = () => {
        const otp = Number(otpValues.join(''));
        const body: {
            otp: number,
            method: "VERIFY"
        } = {
            otp: otp,
            method: "VERIFY"
        }
        dispatch(verifyOtp(body))
        
    }
    const handleFocus = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Ensure only numeric input
        if (!/^\d$/.test(value)) {
            event.target.value = "";
            return;
        }
        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);
        // Move focus to the next input field
        if (index < otp.length - 1) {
            otp[index + 1].current?.focus();
        }
    }

    return (
        <Dialog
            maxWidth="xl"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            sx={{
                cursor: verifyLoading ? 'not-allowed' : "default"
            }}
        >
            <Grid container>
                <Grid item xs={12} lg={6}>
                    <DialogContent sx={{ width: '100%', alignItems: 'flex-end' }}>
                        <Box>
                            <Typography variant='h5'>
                                Verify your Account
                            </Typography>
                            <Typography variant='caption'>Enter the verification code send to your phone</Typography>
                        </Box>
                        <Grid container mt={3} columnSpacing={2} maxWidth={'300px'}>
                            {otp.map((digit, index) => (
                                <Grid item xs={3} key={index}>
                                    <TextField
                                        id={`otp-input-${index}`}

                                        inputProps={{
                                            maxLength: 1,
                                            style: { textAlign: 'center' },
                                            pattern: '[0-9]*',
                                            inputMode: 'numeric',
                                        }}
                                        inputRef={(el) => (otp[index].current = el)}
                                        onChange={handleFocus(index)}
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            fontSize: '1.5rem',
                                        }}
                                    />
                                </Grid>

                            ))}
                            {/* </Box> */}
                        </Grid>
                        <Stack mt={4} rowGap={1}>
                            <Button disabled={verifyLoading} variant='contained' fullWidth onClick={verifyOtpSubmit}>{verifyLoading && <CircularProgress sx={{ mr: 2 }} size={16} />} Submit</Button>
                            <Button variant='outlined' fullWidth onClick={handleClose}>Resend</Button>
                            <Typography color={'error'} variant='caption' textAlign={'center'}>3:54 sec </Typography>
                        </Stack>
                    </DialogContent>
                </Grid>
                <Grid item xs={false} lg={6} display={{ xs: 'none', md: 'block' }}>
                    <Box padding={4} position={'relative'}>
                        <CardMedia height={'100%'} width={'100%'} component={'img'} image={otpBanner} alt="banner" />
                        <IconButton onClick={handleClose} size='small' sx={{ position: 'absolute', right: 10, top: 10 }}>
                            <CloseRoundedIcon />
                        </IconButton>
                    </Box>

                </Grid>
                <AlertBox alert={verifyAlert} onClose={closeErrorAlert} />
            </Grid>

        </Dialog>

    )
}

export default OtpModal