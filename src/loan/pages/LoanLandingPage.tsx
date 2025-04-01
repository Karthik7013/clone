// import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
// import React, { useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import OtpModal from '../../Framework/components/OtpModal';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../redux/store';
// import { handleOtpModal } from '../../redux/slice/uiSlice';
// import { Controller, SubmitHandler, useForm } from 'react-hook-form';
// import { sendOtp } from '../../redux/slice/loanSlice';

// interface LoanFormData {
//     mobile: string;
//     loanAmount: number,
//     loanTerm: number,
//     loanType: number,
//     borrowerAge: number,
//     healthCondition: string,
//     employmentStatus: string,
//     coverageType: string,
//     premiumPaymentOption: string
// }

// const LoanLandingPage = () => {
//     const { handleSubmit, formState: { errors }, control } = useForm<LoanFormData>({
//         defaultValues: {
//             mobile: '7013140693',
//             loanAmount: 7000,
//             loanTerm: 2,
//             premiumPaymentOption: 'annually'
//         }
//     });
//     const dispatch: AppDispatch = useDispatch();
//     const otpModal = useSelector((state: RootState) => state.ui.otpModal);
//     const toggleOtpModal = useCallback((state: boolean) => dispatch(handleOtpModal(state)), [dispatch]);
//     const shiftOtpToggleSwitch = useSelector((state: RootState) => state.loan.otpModal)

//     const handleFormSubmit: SubmitHandler<LoanFormData> = (data) => {
//         console.log(data);

//         dispatch(sendOtp(data.mobile))
//         toggleOtpModal(true);
//     };

//     return (
//         <Box component={Container}>
//             <Typography>Loan Home</Typography>
//             <Link to="/loan/quotes">Get Quotes</Link>

//             <Box component='form' mt={3} onSubmit={handleSubmit(handleFormSubmit)}>
//                 <Grid container rowSpacing={2} columnSpacing={2}>
//                     <Grid item xs={12} md={4}>
//                         <Controller
//                             defaultValue=""
//                             name="mobile"
//                             control={control}
//                             rules={{
//                                 required: 'Mobile number is required',
//                                 minLength: {
//                                     value: 10,
//                                     message: 'Mobile number must be exactly 10 digits',
//                                 },
//                                 maxLength: {
//                                     value: 10,
//                                     message: 'Mobile number must be exactly 10 digits',
//                                 },
//                                 pattern: {
//                                     value: /^\d{10}$/, // Ensures exactly 10 numeric characters
//                                     message: 'Only numbers are allowed',
//                                 },
//                             }}
//                             render={({ field }) => (
//                                 <TextField
//                                     {...field}
//                                     fullWidth
//                                     error={!!errors?.mobile}
//                                     helperText={errors?.mobile?.message}
//                                     label="Mobile Number"
//                                     variant="outlined"
//                                     inputProps={{
//                                         maxLength: 10,
//                                         inputMode: 'numeric',
//                                     }}
//                                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                                         const value = e.target.value;
//                                         if (/^\d*$/.test(value) && value.length <= 10) {
//                                             field.onChange(value);
//                                         }
//                                     }}
//                                 />
//                             )}
//                         />
//                     </Grid>

//                     <Grid item xs={12} md={4}>
//                         <TextField
//                             fullWidth
//                             label="Loan Amount"
//                             name="loanAmount"
//                             type="number"
//                             required
//                         />
//                     </Grid>

//                     {/* Loan Term */}
//                     <Grid item xs={12} md={4}>
//                         <TextField
//                             fullWidth
//                             label="Loan Term (in years)"
//                             name="loanTerm"
//                             type="number"
//                             required
//                         />
//                     </Grid>

//                     {/* Loan Type */}
//                     <Grid item xs={12} md={4}>
//                         <FormControl fullWidth>
//                             <InputLabel>Loan Type</InputLabel>
//                             <Select
//                                 name="loanType"

//                                 required
//                             >
//                                 <MenuItem value="mortgage">Mortgage</MenuItem>
//                                 <MenuItem value="personal">Personal Loan</MenuItem>
//                                 <MenuItem value="auto">Auto Loan</MenuItem>
//                                 <MenuItem value="business">Business Loan</MenuItem>
//                             </Select>
//                         </FormControl>
//                     </Grid>

//                     {/* Borrower's Age */}
//                     <Grid item xs={12} md={4}>
//                         <TextField
//                             fullWidth
//                             label="Borrower's Age"
//                             name="borrowerAge"
//                             type="number"

//                             required
//                         />
//                     </Grid>

//                     {/* Health Condition */}
//                     <Grid item xs={12} md={4}>
//                         <FormControl fullWidth>
//                             <InputLabel>Health Condition</InputLabel>
//                             <Select
//                                 name="healthCondition"

//                                 required
//                             >
//                                 <MenuItem value="standard">Standard Health</MenuItem>
//                                 <MenuItem value="pre-existing">Pre-existing Condition</MenuItem>
//                             </Select>
//                         </FormControl>
//                     </Grid>

//                     {/* Employment Status */}
//                     <Grid item xs={12} md={4}>
//                         <FormControl fullWidth>
//                             <InputLabel>Employment Status</InputLabel>
//                             <Select
//                                 name="employmentStatus"

//                                 required
//                             >
//                                 <MenuItem value="employed">Employed</MenuItem>
//                                 <MenuItem value="self-employed">Self-employed</MenuItem>
//                                 <MenuItem value="unemployed">Unemployed</MenuItem>
//                             </Select>
//                         </FormControl>
//                     </Grid>

//                     {/* Coverage Type */}
//                     <Grid item xs={12} md={4}>
//                         <FormControl fullWidth>
//                             <InputLabel>Coverage Type</InputLabel>
//                             <Select
//                                 name="coverageType"

//                                 required
//                             >
//                                 <MenuItem value="full">Full Coverage</MenuItem>
//                                 <MenuItem value="partial">Partial Coverage</MenuItem>
//                             </Select>
//                         </FormControl>
//                     </Grid>

//                     {/* Premium Payment Option */}
//                     <Grid item xs={12} md={4}>
//                         <FormControl fullWidth>
//                             <InputLabel>Premium Payment Option</InputLabel>
//                             <Select
//                                 name="premiumPaymentOption"

//                                 required
//                             >
//                                 <MenuItem value="monthly">Monthly</MenuItem>
//                                 <MenuItem value="annually">Annually</MenuItem>
//                                 <MenuItem value="lump-sum">Lump Sum</MenuItem>
//                             </Select>
//                         </FormControl>
//                     </Grid>

//                     {/* Submit Button */}
//                     <Grid item xs={12}>
//                         <Button
//                             fullWidth
//                             variant="contained"
//                             color="primary"
//                             type="submit"
//                         >
//                             Get Quote
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </Box>
//             <OtpModal open={otpModal} setOpen={toggleOtpModal} />
//         </Box>
//     );
// };

// export default LoanLandingPage;
import {
    Box,
    Button,
    CardMedia,
    CircularProgress,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { useCallback, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import OtpModal from '../../Framework/components/OtpModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { closeOtpModal, resetSendOtpAlert,resetVerifyOtpAlert, sendOtp } from '../../redux/slice/loanSlice';
import axios from 'axios';
import AlertBox from '../../Framework/components/AlertBox';
import LoanLandingLogo from "../../assets/Manage money-cuate.svg"
import { MessageBox } from '../../Framework/components';
interface LoanFormData {
    mobile: string;
    loanAmount: number;
    loanTerm: number;
    loanType: string;
    borrowerAge: number;
    healthCondition: string;
    employmentStatus: string;
    coverageType: string;
    premiumPaymentOption: string;
}

const LoanLandingPage = () => {
    const sendOtpLoading = useSelector((state: RootState) => state.loan.sendOtp.loading)
    const sendOtpAlert = useSelector((state: RootState) => state.loan.sendOtp.alert)
    const dispatch: AppDispatch = useDispatch();
    const otpModal = useSelector((state: RootState) => state.loan.otpModal); // otp modal state
    const handleOtpModalClose = useCallback(() => dispatch(closeOtpModal()), []) // close otp modal



    const [searchParams] = useSearchParams();
    const quoteID = searchParams.get('quoteID');
    const { handleSubmit, formState: { errors }, control } = useForm<LoanFormData>({
        defaultValues: {
            mobile: '7013140693',
            loanAmount: 7000,
            loanTerm: 2,
            loanType: 'mortgage',
            borrowerAge: 0,
            healthCondition: 'standard',
            employmentStatus: 'employed',
            coverageType: 'full',
            premiumPaymentOption: 'annually',
        },
    });
    // closeSuccessOtp

    const getRequestBody = async () => {
        try {
            const response = await axios.get('www.google.com');
            console.log(response.data)
        } catch (error) {

        } finally {

        }
    }
    useEffect(() => {
        if (quoteID) getRequestBody()
    }, [quoteID]);


    const handleFormSubmit: SubmitHandler<LoanFormData> = (data) => {
        console.log('Form Submitted:', data);
        /**
         * call send otp
         * call verify otp
         * if(verify === success) => call quote api
         */
        dispatch(sendOtp({
            email: "karthiktumala143@gmail.com",
            method: 'SEND',
            name: "Karthik Tumala",
            phone: "",
            referBy: null,
            refered_by_agent: null,
            refered_by_employee: null
        }));
        // toggleOtpModal(true);
    };

    return (
        <Box component={Container}>
            <Typography variant="h4">Loan Home</Typography>
            <Link to="/loan/quotes">Get Quotes</Link>
            <Grid container rowSpacing={2}>
                <Grid item xs={12} md={6}>
                    <Box height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        {/* <CardMedia
                            component="img"
                            alt="green iguana"
                            width={"10px"}
                            height={500}
                            image={LoanLandingLogo}
                        /> */}
                        <CardMedia
                            sx={{ height: 400, width: 400 }}
                            image={LoanLandingLogo}
                            title="green iguana"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="form" mt={3} onSubmit={handleSubmit(handleFormSubmit)}>
                        <Grid container rowSpacing={2} columnSpacing={2}>
                            {/* Mobile Number */}
                            <Grid item xs={12} md={4}>
                                <Controller
                                    name="mobile"
                                    control={control}
                                    rules={{
                                        required: 'Mobile number is required',
                                        pattern: {
                                            value: /^\d{10}$/,
                                            message: 'Mobile number must be 10 digits',
                                        },
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!errors?.mobile}
                                            helperText={errors?.mobile?.message}
                                            label="Mobile Number"
                                            inputProps={{ maxLength: 10 }}
                                        />
                                    )}
                                />
                            </Grid>

                            {/* Loan Amount */}
                            <Grid item xs={12} md={6}>
                                <Controller
                                    name="loanAmount"
                                    control={control}
                                    rules={{ required: 'Loan amount is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Loan Amount"
                                            type="number"
                                            error={!!errors?.loanAmount}
                                            helperText={errors?.loanAmount?.message}
                                        />
                                    )}
                                />
                            </Grid>

                            {/* Loan Term */}
                            <Grid item xs={12} md={6}>
                                <Controller
                                    name="loanTerm"
                                    control={control}
                                    rules={{ required: 'Loan term is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Loan Term (in years)"
                                            type="number"
                                            error={!!errors?.loanTerm}
                                            helperText={errors?.loanTerm?.message}
                                        />
                                    )}
                                />
                            </Grid>

                            {/* Loan Type */}
                            <Grid item xs={12} md={6}>
                                <Controller
                                    name="loanType"
                                    control={control}
                                    rules={{ required: 'Loan type is required' }}
                                    render={({ field }) => (
                                        <FormControl fullWidth error={!!errors?.loanType}>
                                            <InputLabel>Loan Type</InputLabel>
                                            <Select {...field} label="Loan Type">
                                                <MenuItem value="mortgage">Mortgage</MenuItem>
                                                <MenuItem value="personal">Personal Loan</MenuItem>
                                                <MenuItem value="auto">Auto Loan</MenuItem>
                                                <MenuItem value="business">Business Loan</MenuItem>
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                            </Grid>

                            {/* Borrower's Age */}
                            <Grid item xs={12} md={6}>
                                <Controller
                                    name="borrowerAge"
                                    control={control}
                                    rules={{ required: 'Age is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Borrower's Age"
                                            type="number"
                                            error={!!errors?.borrowerAge}
                                            helperText={errors?.borrowerAge?.message}
                                        />
                                    )}
                                />
                            </Grid>

                            {/* Health Condition */}
                            <Grid item xs={12} md={6}>
                                <Controller
                                    name="healthCondition"
                                    control={control}
                                    rules={{ required: 'Health condition is required' }}
                                    render={({ field }) => (
                                        <FormControl fullWidth error={!!errors?.healthCondition}>
                                            <InputLabel>Health Condition</InputLabel>
                                            <Select {...field} label="Health Condition">
                                                <MenuItem value="standard">Standard Health</MenuItem>
                                                <MenuItem value="pre-existing">Pre-existing Condition</MenuItem>
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                            </Grid>

                            {/* Employment Status */}
                            <Grid item xs={12} md={4}>
                                <Controller
                                    name="employmentStatus"
                                    control={control}
                                    rules={{ required: 'Employment status is required' }}
                                    render={({ field }) => (
                                        <FormControl fullWidth error={!!errors?.employmentStatus}>
                                            <InputLabel>Employment Status</InputLabel>
                                            <Select {...field} label="Employment Status">
                                                <MenuItem value="employed">Employed</MenuItem>
                                                <MenuItem value="self-employed">Self-employed</MenuItem>
                                                <MenuItem value="unemployed">Unemployed</MenuItem>
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                            </Grid>

                            {/* Coverage Type */}
                            <Grid item xs={12} md={6}>
                                <Controller
                                    name="coverageType"
                                    control={control}
                                    rules={{ required: 'Coverage type is required' }}
                                    render={({ field }) => (
                                        <FormControl fullWidth error={!!errors?.coverageType}>
                                            <InputLabel>Coverage Type</InputLabel>
                                            <Select {...field} label="Coverage Type">
                                                <MenuItem value="full">Full Coverage</MenuItem>
                                                <MenuItem value="partial">Partial Coverage</MenuItem>
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                            </Grid>

                            {/* Premium Payment Option */}
                            <Grid item xs={12} md={4}>
                                <Controller
                                    name="premiumPaymentOption"
                                    control={control}
                                    rules={{ required: 'Payment option is required' }}
                                    render={({ field }) => (
                                        <FormControl fullWidth error={!!errors?.premiumPaymentOption}>
                                            <InputLabel>Premium Payment Option</InputLabel>
                                            <Select {...field} label="Premium Payment Option">
                                                <MenuItem value="monthly">Monthly</MenuItem>
                                                <MenuItem value="annually">Annually</MenuItem>
                                                <MenuItem value="lump-sum">Lump Sum</MenuItem>
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                            </Grid>

                            {/* Submit Button */}
                            <Grid item xs={12}>
                                <Button disabled={sendOtpLoading} fullWidth variant="contained" color="primary" type="submit">
                                    {sendOtpLoading && <CircularProgress color='inherit' sx={{ mr: 2 }} size='20px' />}  Get Quote
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                {/* <Grid item xs={12}>
                    <MessageBox type='info' variant='filled' message='Get Instant Loan in 2min'></MessageBox>
                </Grid> */}
            </Grid>


            <AlertBox alert={sendOtpAlert} onClose={resetSendOtpAlert} />
            {/* OTP Modal */}
            <OtpModal open={otpModal} setClose={handleOtpModalClose} />
        </Box>
    );
};

export default LoanLandingPage;
