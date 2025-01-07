import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormHelperText, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { ProductSummary } from "../../../Framework/components";
import { useForm, Controller } from "react-hook-form";

// Define types for the form data
type FormData = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    dob: string;
    gender: string;
    address: string;
    state: string;
    city: string;
    pincode: string;
    country: string;
    salary: string;
    department: string;
    role: string;
    joinDate: string;
    status: string;
    reporting: string;
};

type addEmployeeProps = {
    open: boolean,
    handleClose: () => void
}

const AddEmployee = (props: addEmployeeProps) => {
    const { handleSubmit, control, formState: { errors }, watch } = useForm<FormData>();
    const department = watch('department');
    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <Dialog fullWidth maxWidth="md" open={props.open} component='form' onSubmit={handleSubmit(onSubmit)}>
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
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: "First Name is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="First Name" error={!!errors.firstName} helperText={errors.firstName?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="lastName"
                            control={control}
                            rules={{ required: "Last Name is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="Last Name" error={!!errors.lastName} helperText={errors.lastName?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="phone"
                            control={control}
                            rules={{ required: "Phone is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="Phone" error={!!errors.phone} helperText={errors.phone?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: "Email is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="Email" error={!!errors.email} helperText={errors.email?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="dob"
                            control={control}
                            rules={{ required: "DOB is required" }}
                            render={({ field }) => <TextField InputLabelProps={{ shrink: true }} {...field} type="date" size="small" fullWidth label="DOB" error={!!errors.dob} helperText={errors.dob?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="gender"
                            control={control}
                            rules={{ required: "Gender is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="Gender" error={!!errors.gender} helperText={errors.gender?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="address"
                            control={control}
                            rules={{ required: "Address is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="Address" error={!!errors.address} helperText={errors.address?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="state"
                            control={control}
                            rules={{ required: "State is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="State" error={!!errors.state} helperText={errors.state?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="city"
                            control={control}
                            rules={{ required: "City is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="City" error={!!errors.city} helperText={errors.city?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="pincode"
                            control={control}
                            rules={{ required: "Pincode is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="Pincode" error={!!errors.pincode} helperText={errors.pincode?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="country"
                            control={control}
                            rules={{ required: "Country is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="Country" error={!!errors.country} helperText={errors.country?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="salary"
                            control={control}
                            rules={{ required: "Salary is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="Salary" error={!!errors.salary} helperText={errors.salary?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="department"
                            defaultValue=""
                            control={control}
                            rules={{ required: "Department is required" }}
                            render={({ field }) => (
                                <FormControl fullWidth size="small" error={!!errors.department}>
                                    <InputLabel>Department</InputLabel>
                                    <Select {...field} label="Department">
                                        <MenuItem value="" disabled><em>Select Department</em></MenuItem>
                                        <MenuItem value="administrative">Administrative department</MenuItem>
                                        <MenuItem value="sales">Sales Department</MenuItem>
                                        <MenuItem value="hr">HR Department</MenuItem>
                                        <MenuItem value="it">IT Department</MenuItem>
                                        <MenuItem value="claims">Claims Department</MenuItem>
                                    </Select>
                                    <FormHelperText>{errors.department?.message}</FormHelperText>
                                </FormControl>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="role"
                            defaultValue=""
                            control={control}
                            rules={{ required: "Role is required" }}
                            render={({ field }) => (
                                <FormControl fullWidth size="small" error={!!errors.role}>
                                    <InputLabel>Role</InputLabel>
                                    <Select {...field} label="Role">
                                        <MenuItem value="" disabled><em>Select Role</em></MenuItem>
                                        <MenuItem value="administrative">CEO (ADMIN)</MenuItem>
                                        <MenuItem value="sales">PO</MenuItem>
                                        <MenuItem value="hr">HR Manager</MenuItem>
                                        <MenuItem value="it">IT Manager</MenuItem>
                                        <MenuItem value="claims">Claims Manager</MenuItem>
                                        <MenuItem value="claims">Sales Manager</MenuItem>
                                    </Select>
                                    <FormHelperText>{errors.role?.message}</FormHelperText>
                                </FormControl>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="reporting"
                            control={control}
                            rules={{ required: "Reporting is required" }}
                            render={({ field }) => <TextField {...field} size="small" fullWidth label="Reporting" error={!!errors.reporting} helperText={errors.reporting?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="joinDate"
                            control={control}
                            rules={{ required: "Join Date is required" }}
                            render={({ field }) => <TextField InputLabelProps={{ shrink: true }} {...field} type="date" size="small" fullWidth label="Join Date" error={!!errors.joinDate} helperText={errors.joinDate?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            name="status"
                            defaultValue="active"
                            control={control}
                            rules={{ required: "Status is required" }}
                            render={({ field }) => (
                                <FormControl fullWidth size="small" error={!!errors.status}>
                                    <InputLabel>Status</InputLabel>
                                    <Select {...field} label="Status">
                                        <MenuItem value="active">Active</MenuItem>
                                        <MenuItem value="inactive">Inactive</MenuItem>
                                    </Select>
                                    <FormHelperText>{errors.status?.message}</FormHelperText>
                                </FormControl>
                            )}
                        />
                    </Grid>
                </Grid>
                {/* <ProductSummary /> */}
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="error" autoFocus onClick={props.handleClose}>
                    Cancel
                </Button>
                <Box flex={1} />
                <Button variant="contained" type="submit" autoFocus>
                    Save changes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddEmployee;
