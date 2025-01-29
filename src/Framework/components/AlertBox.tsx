import React from 'react';
import { Alert, Button, CardActionArea, IconButton, Slide, SlideProps, Snackbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useDispatch } from 'react-redux';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { alpha, styled } from '@mui/material/styles';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { type UnknownAction } from 'redux';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';


type alertProps = {
    state: boolean,
    message: string,
    type: 'error' | 'success' | 'info' | 'warning' | undefined
}
type props = {
    alert: alertProps,
    onClose: () => UnknownAction,
    variant?: "filled" | "outlined" | "standard"
}

const AlertBox = ({ alert, onClose, variant = "outlined" }: props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('md'));
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(onClose())
    }

    function SlideTransition(props: SlideProps) {
        return <Slide {...props} direction="left" />;
    }

    const CustomAlert = styled(Alert)(({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        // boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        backgroundColor: alert.type && alpha(theme.palette[alert.type].main, 0.1),
        borderLeft: '4px solid',
        borderLeftColor: alert.type && theme.palette[alert.type].main,
        fontWeight: 'bolder'
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
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: isMobile ? 'right' : 'center' }}
        >
            <CustomAlert action={<IconButton color='inherit' onClick={handleClose} size='small'><ClearRoundedIcon fontSize='inherit' /></IconButton>} variant={variant} icon={AlertIcon(alert.type)} severity={alert.type}>
                <Typography variant='caption'>{alert.message}</Typography>
            </CustomAlert>
        </Snackbar>
    )
}

export default React.memo(AlertBox);