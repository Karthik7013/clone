import { Alert, alpha, styled } from '@mui/material';
import React from 'react';

type messageBoxProps = {
    type: 'error' | 'info' | 'success' | 'warning',
    children: React.ReactNode
}

const MessageBox = (props: messageBoxProps) => {
    const StyledAlert = styled(Alert)(({ theme }) => ({
        width: '100%',
        background: props.type && alpha(theme.palette[props.type].main, 0.1),
        borderLeft: `6px solid`,
        borderLeftColor: props.type && theme.palette[props.type].main
    }))
    return (
        <StyledAlert variant='outlined' severity={props.type}>
            {props.children}
        </StyledAlert>
    )
}

export default MessageBox