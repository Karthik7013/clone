import { Box, CircularProgress, LinearProgress, Modal, Typography } from '@mui/material'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
const LoadingModal = () => {
    const borderRadius = useSelector((state: RootState) => state.ui.borderRadius)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: borderRadius,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center'
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