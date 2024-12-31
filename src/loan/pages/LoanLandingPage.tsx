import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
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
                <Grid container rowSpacing={2} columnSpacing={2}>
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
                                    fullWidth
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

                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            label="Loan Amount"
                            name="loanAmount"
                            type="number"
                            required
                        />
                    </Grid>

                    {/* Loan Term */}
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            label="Loan Term (in years)"
                            name="loanTerm"
                            type="number"

                            required
                        />
                    </Grid>

                    {/* Loan Type */}
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel>Loan Type</InputLabel>
                            <Select
                                name="loanType"

                                required
                            >
                                <MenuItem value="mortgage">Mortgage</MenuItem>
                                <MenuItem value="personal">Personal Loan</MenuItem>
                                <MenuItem value="auto">Auto Loan</MenuItem>
                                <MenuItem value="business">Business Loan</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Borrower's Age */}
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            label="Borrower's Age"
                            name="borrowerAge"
                            type="number"

                            required
                        />
                    </Grid>

                    {/* Health Condition */}
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel>Health Condition</InputLabel>
                            <Select
                                name="healthCondition"

                                required
                            >
                                <MenuItem value="standard">Standard Health</MenuItem>
                                <MenuItem value="pre-existing">Pre-existing Condition</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Employment Status */}
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel>Employment Status</InputLabel>
                            <Select
                                name="employmentStatus"

                                required
                            >
                                <MenuItem value="employed">Employed</MenuItem>
                                <MenuItem value="self-employed">Self-employed</MenuItem>
                                <MenuItem value="unemployed">Unemployed</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Coverage Type */}
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel>Coverage Type</InputLabel>
                            <Select
                                name="coverageType"

                                required
                            >
                                <MenuItem value="full">Full Coverage</MenuItem>
                                <MenuItem value="partial">Partial Coverage</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Premium Payment Option */}
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel>Premium Payment Option</InputLabel>
                            <Select
                                name="premiumPaymentOption"

                                required
                            >
                                <MenuItem value="monthly">Monthly</MenuItem>
                                <MenuItem value="annually">Annually</MenuItem>
                                <MenuItem value="lump-sum">Lump Sum</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Get Quote
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <OtpModal open={otpModal} setOpen={toggleOtpModal} />
        </Box>
    );
};

export default LoanLandingPage;
