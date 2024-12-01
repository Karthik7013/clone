import { Alert, alpha, Button, CardActionArea, styled } from '@mui/material';
import React from 'react';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
type messageBoxProps = {
    type: 'error' | 'info' | 'success' | 'warning',
    children?: React.ReactNode,
    message?: string
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
        <CardActionArea>
            <StyledAlert iconMapping={iconMapping} variant='outlined' severity={props.type}>
                {props.children}
                {props.message}
            </StyledAlert>
        </CardActionArea>
    )
}

export default MessageBox