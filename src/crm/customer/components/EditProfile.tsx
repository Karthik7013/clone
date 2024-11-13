import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";
import { AppDispatch, RootState } from "../../../redux/store";
import { handleEditProfile } from "../../../redux/slice/uiSlice";
import { useTheme } from "@mui/material";
const EditProfile = () => {
    const dispatch: AppDispatch = useDispatch();
    const theme = useTheme()
    const open = useSelector((state: RootState) => state.ui.customerEditProfile);
    const handleClose = () => dispatch(handleEditProfile());
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: theme.shadows[4],
        p: 4,
        borderRadius:theme.shape.borderRadius
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                
            </Box>
        </Modal>
    )
}

export default EditProfile