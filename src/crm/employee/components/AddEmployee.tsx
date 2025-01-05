import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

type addEmployeeProps = {
    open: boolean,
    handleClose: () => void
}
const AddEmployee = (props: addEmployeeProps) => {
    return <Dialog fullWidth maxWidth="md" open={props.open}>
        <DialogTitle>Add Employee</DialogTitle>
        <IconButton
            aria-label="close"
            onClick={props.handleClose}
            sx={(theme) => ({
                position: 'absolute',
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
            })}
        >
            <CloseIcon />
        </IconButton>
        <DialogContent dividers>
            <Typography variant="subtitle2" gutterBottom>Personal details</Typography>
            <Grid container columnSpacing={2} rowSpacing={2}>
                <Grid item xs={12} md={4}><TextField fullWidth /></Grid>
                <Grid item xs={12} md={4}><TextField fullWidth /></Grid>
                <Grid item xs={12} md={4}><TextField fullWidth /></Grid>
                <Grid item xs={12} md={4}><TextField fullWidth /></Grid>
                <Grid item xs={12} md={4}><TextField fullWidth /></Grid>
                <Grid item xs={12} md={4}><TextField fullWidth /></Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="error" autoFocus onClick={props.handleClose}>
                Cancel
            </Button>
            <Box flex={1} />
            <Button variant="contained" autoFocus onClick={props.handleClose}>
                Save changes
            </Button>

        </DialogActions>
    </Dialog>
}

export default AddEmployee;