import { Box, CircularProgress, Modal, Typography } from '@mui/material'

const LoadingModal = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: '1em',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center'
    };
    return (

        <Modal open={true}>

            <Box sx={style}>
                <CircularProgress size='1.5rem' />
                <Typography >Please Wait...</Typography>
            </Box>
        </Modal>
    )
}

export default LoadingModal