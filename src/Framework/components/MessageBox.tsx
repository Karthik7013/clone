import { Alert, alpha, Box, Button, CardActionArea, IconButton, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
type messageBoxProps = {
    type: 'error' | 'info' | 'success' | 'warning',
    children?: React.ReactNode,
    message?: string,
    action?: () => void
}

const MessageBox = (props: messageBoxProps) => {
    const iconMapping = {
        error: <CancelRoundedIcon />,
        warning: <WarningRoundedIcon />,
        info: <InfoRoundedIcon />,
        success: <CheckCircleRoundedIcon />,
    };

    const StyledAlert = styled(Alert)(({ theme }) => ({
        width: '100%',
        background: props.type && alpha(theme.palette[props.type].main, 0.1),
        borderLeft: `6px solid`,
        borderLeftColor: props.type && theme.palette[props.type].main
    }))
    return (
        <StyledAlert action={props.action && <IconButton color='inherit' onClick={props.action} size='small'><CloseRoundedIcon /></IconButton>} iconMapping={iconMapping} variant='outlined' severity={props.type}>
            <Typography variant='subtitle2'>{props.message}</Typography>
        </StyledAlert>
    )
}

export default MessageBox