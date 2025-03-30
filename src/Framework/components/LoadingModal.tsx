import { Box, CircularProgress, LinearProgress, Modal, Typography, useTheme } from '@mui/material'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
const LoadingModal = () => {
    const theme = useTheme()
    const borderRadius = useSelector((state: RootState) => state.ui.borderRadius)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        // bgcolor: 'background.paper',
        p: 2,
        // borderRadius: borderRadius,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        // color: theme.palette.background.default
    };
    return (
        <Modal open={true}>
            <Box sx={style}>
                <CircularProgress color='inherit' size='1.5rem' />
            </Box>
        </Modal>
    )
}

export default LoadingModal