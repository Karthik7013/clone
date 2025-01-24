import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material"
import { Controller, useForm } from "react-hook-form"

interface IFormInput {
    role_name: string;
    role_description: string;
    department: string;
    level: number;
}

const CreateRole = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        console.log(data)
        
    }

    return (
        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
            <Box component={Card}>
                <Grid container columnSpacing={2} rowGap={0} component={CardContent}>
                    <Grid item xs={12}>
                        <Typography variant="h6">Create Role</Typography>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Controller
                            name="role_name"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Role Name is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Role Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.role_name}
                                    helperText={errors.role_name ? errors.role_name.message : ''}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Controller
                            name="department"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Department is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Department"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.department}
                                    helperText={errors.department ? errors.department.message : ''}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Controller
                            name="level"
                            control={control}
                            defaultValue={0} // Set default number value
                            rules={{ required: 'Level is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Level"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type="number"
                                    error={!!errors.level}
                                    helperText={errors.level ? errors.level.message : ''}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            name="role_description"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Description is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    multiline
                                    maxRows={10}
                                    minRows={4}
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.role_description}
                                    helperText={errors.role_description ? errors.role_description.message : ''}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ marginTop: 2 }}
                        >
                            Create Role
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default CreateRole;
