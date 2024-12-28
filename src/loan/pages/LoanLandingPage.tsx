import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import OtpModal from '../../Framework/components/OtpModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { handleOtpModal } from '../../redux/slice/uiSlice';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { sendOtp } from '../../redux/slice/loanSlice';

interface LoanFormData {
    mobile: string;
}

const LoanLandingPage = () => {
    const { handleSubmit, formState: { errors }, control } = useForm<LoanFormData>();
    const dispatch: AppDispatch = useDispatch();
    const otpModal = useSelector((state: RootState) => state.ui.otpModal);
    const toggleOtpModal = useCallback((state: boolean) => dispatch(handleOtpModal(state)), [dispatch]);
    const shiftOtpToggleSwitch = useSelector((state: RootState) => state.loan.otpModal)

    const handleFormSubmit: SubmitHandler<LoanFormData> = (data) => {
        console.log(data);

        dispatch(sendOtp(data.mobile))
        toggleOtpModal(true);
    };

    return (
        <Box component={Container}>
            <Typography>Loan Home</Typography>
            <Link to="/loan/quotes">Get Quotes</Link>

            <Box component='form' mt={3} onSubmit={handleSubmit(handleFormSubmit)}>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12} md={4}>
                        <Controller
                            defaultValue=""
                            name="mobile"
                            control={control}
                            rules={{
                                required: 'Mobile number is required',
                                minLength: {
                                    value: 10,
                                    message: 'Mobile number must be exactly 10 digits',
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'Mobile number must be exactly 10 digits',
                                },
                                pattern: {
                                    value: /^\d{10}$/, // Ensures exactly 10 numeric characters
                                    message: 'Only numbers are allowed',
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    error={!!errors?.mobile}
                                    helperText={errors?.mobile?.message}
                                    label="Mobile Number"
                                    variant="outlined"
                                    inputProps={{
                                        maxLength: 10,
                                        inputMode: 'numeric',
                                    }}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        const value = e.target.value;
                                        if (/^\d*$/.test(value) && value.length <= 10) {
                                            field.onChange(value);
                                        }
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" type='submit'>
                            GET QUOTE
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <OtpModal open={otpModal} setOpen={toggleOtpModal} />
        </Box>
    );
};

export default LoanLandingPage;
