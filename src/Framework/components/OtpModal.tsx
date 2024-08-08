import React, { Dispatch, SetStateAction } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, CardMedia, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import otpBanner from "../../assets/otp-banner.svg"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
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
    setOpen: (value: boolean) => void
}
const OtpModal = (props: otpModalProps) => {
    const { open, setOpen } = props;
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (


        <Dialog
            maxWidth="xl"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
        >
            <Grid container>
                <Grid item xs={12} lg={6}>
                    <DialogContent sx={{ width: '100%', alignItems: 'flex-end' }}>
                        <Box>
                            <Typography variant='h6'>
                                Verify your Account
                            </Typography>
                            <Typography variant='caption'>Enter the verification code send to your phone</Typography>
                        </Box>
                        <Grid container mt={3} columnSpacing={2} maxWidth={'300px'}>
                            {[1, 2, 3, 4].map((e: number) => <Grid key={e} item xs={3}>
                                <TextField ></TextField></Grid>)}
                        </Grid>
                        <Stack mt={4} rowGap={1}>
                            <Button variant='contained' fullWidth onClick={handleClose}>Submit</Button>
                            <Button variant='outlined' fullWidth onClick={handleClose}>Resend</Button>
                            <Typography color={'error'} variant='caption' textAlign={'center'}>3:54 sec </Typography>
                        </Stack>
                    </DialogContent>
                </Grid>
                <Grid item xs={false} lg={6} >
                    <Box padding={3} position={'relative'}>
                        <CardMedia height={'100%'} width={'100%'} component={'img'} image={otpBanner} alt="banner" />
                        <IconButton onClick={handleClose} size='small' sx={{ position: 'absolute', right: 10, top: 10 }}>
                            <CloseRoundedIcon />
                        </IconButton>
                    </Box>

                </Grid>
            </Grid>

        </Dialog>

    )
}

export default OtpModal