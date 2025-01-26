import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { closeCreatePermissionAlert, createPermission } from "../../../redux/slice/dashboardSlice";
import AlertBox from "../../../Framework/components/AlertBox";

interface IFormInput {
    permission_name: string,
    permission_description: string
}

const CreatePermission = () => {
    const alert = useSelector((state: RootState) => state.dashboard.create_permission.alert);
    const dispatch: AppDispatch = useDispatch()
    const loading = useSelector((state: RootState) => state.dashboard.create_permission.loading)
    const { control, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
    const onSubmit = (data: IFormInput) => {
        dispatch(createPermission(data));
        reset()
    }
    const handleCloseAlert = () => dispatch(closeCreatePermissionAlert())

    return <Box component='form'>
        <AlertBox alert={alert} onClose={handleCloseAlert} />
        <Box component={Card}>
            <Grid container columnSpacing={2} rowGap={0} component={CardContent}>
                <Grid item xs={12}>
                    <Typography variant="h6">Create Permission</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="permission_name"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Permission Name is required",
                            minLength: { value: 3, message: "Permission Name must be at least 3 characters long" },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                placeholder="PAGENAME_FEATURE_NAME_XXX"
                                label="Permission Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!errors.permission_name}
                                helperText={errors.permission_name ? errors.permission_name.message : ""}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="permission_description"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Description is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Description"
                                variant="outlined"
                                fullWidth
                                multiline
                                minRows={4}
                                maxRows={6}
                                margin="normal"
                                error={!!errors.permission_description}
                                helperText={errors.permission_description ? errors.permission_description.message : ""}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        disabled={loading}
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit(onSubmit)} fullWidth
                        sx={{ marginTop: 2 }}
                    >
                        Create Permission
                    </Button>
                </Grid>
            </Grid>
        </Box>
    </Box >
}

export default CreatePermission;

