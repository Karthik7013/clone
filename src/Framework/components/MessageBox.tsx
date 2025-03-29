import {
    Alert,
    IconButton,
    styled,
    Typography
} from '@mui/material';
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
    action?: () => void,
    variant?: "filled" | "outlined" | "standard"
}

const MessageBox = ({
    type,
    children,
    message,
    action,
    variant = 'filled' 
}: messageBoxProps) => {

    const iconMapping = {
        error: <CancelRoundedIcon />,
        warning: <WarningRoundedIcon />,
        info: <InfoRoundedIcon />,
        success: <CheckCircleRoundedIcon />,
    };

    const StyledAlert = styled(Alert)(() => ({}));

    return (
        <StyledAlert
            action={action && (
                <IconButton color="inherit" onClick={action} size="small">
                    <CloseRoundedIcon fontSize="inherit" />
                </IconButton>
            )}
            iconMapping={iconMapping}
            variant={variant}
            severity={type}
        >
            <Typography variant="subtitle2">{message}</Typography>
        </StyledAlert>
    );
};

export default MessageBox;
