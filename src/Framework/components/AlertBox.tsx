import React from 'react';
import { Alert, Slide, SlideProps, Snackbar } from '@mui/material'
import { useDispatch } from 'react-redux';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { alpha, styled } from '@mui/material/styles';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { type UnknownAction } from 'redux';


type alertProps = {
    state: boolean,
    message: string,
    type: 'error' | 'success' | 'info' | 'warning' | undefined
}
type props = {
    alert: alertProps,
    onClose: () => UnknownAction
}

const AlertBox = ({ alert, onClose }: props) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(onClose())
    }

    function SlideTransition(props: SlideProps) {
        return <Slide {...props} direction="up" />;
    }

    const CustomAlert = styled(Alert)(({ theme }) => ({
        borderRadius: '0.4rem',
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        backgroundColor: alert.type && alpha(theme.palette[alert.type].main, 0.05),
        borderWidth: '1px',
        borderLeft: '4px solid',
        borderLeftColor: alert.type && theme.palette[alert.type].main
    }));

    const AlertIcon = (type: 'info' | 'error' | 'warning' | 'success' | undefined) => {
        switch (type) {
            case 'success':
                return <CheckCircleRoundedIcon />;
            case 'info':
                return <InfoRoundedIcon />;
            case 'error':
                return <CancelRoundedIcon />
            case 'warning':
                return <WarningRoundedIcon />
            default:
                return <CheckCircleRoundedIcon />;
        }
    }


    return (
        <Snackbar open={alert.state}
            TransitionComponent={SlideTransition}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}

        >
            <CustomAlert variant='outlined' icon={AlertIcon(alert.type)} severity={alert.type}>{alert.message}</CustomAlert>
        </Snackbar>
    )
}

export default AlertBox