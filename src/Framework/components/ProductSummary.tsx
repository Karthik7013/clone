import { Box, Button, Card, CardActionArea, CardActions, CardContent, Checkbox, Container, Divider, Grid, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getEmployeePermissions, getEmployeeRoles } from "../../redux/slice/dashboardSlice";
import InfoIcon from '@mui/icons-material/Info';
import { Info } from "@mui/icons-material";
interface IFormInput {
    role_name: string;
    role_description: string;
    department: string;
    level: number
}

const ProductSummary = () => {
    const permissions = useSelector((state: RootState) => state.dashboard.employee_permissions.data);
    const loadingPermissions = useSelector((state: RootState) => state.dashboard.employee_permissions.loading);
    const dispatch: AppDispatch = useDispatch()
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }


    useEffect(() => {
        console.log(permissions)
    }, [])

    useEffect(() => {
        if (!permissions.length) dispatch(getEmployeePermissions())
    },)




    return <Box sx={{ pt: 2 }} component='form'>
        <Card>
            <ListItem secondaryAction={<TextField placeholder="Search" size="small"  />}>
                <ListItemText primary={<Typography variant="subtitle2">Employee Permissions</Typography>} secondary={<Typography variant="caption" color='text.secondary'>Add or Manage your Employee Permissions</Typography>} />
            </ListItem>
            <Divider />
            <List disablePadding dense sx={{maxHeight:500,overflow:'auto'}}>
                {loadingPermissions && <LinearProgress />}
                {
                    permissions.map((permission) => {
                        return <ListItem divider key={permission.permission_id} secondaryAction={<Checkbox title="read" />}>
                            <ListItemText
                                primary={permission.permission_name}
                                secondary={<Typography color='text.secondary' variant="caption" component={Stack} flexDirection='row' alignItems='center'><InfoIcon fontSize="inherit" sx={{ mr: 1 }} />{permission.permission_description}</Typography>}
                            />
                        </ListItem>
                    })
                }


            </List>






            </Card>
            </Box>}
            // <Box component={Card}>
            //     <Grid container columnSpacing={2} rowGap={0} component={CardContent}>
            //         <Grid item xs={12}>
            //             <Typography variant="h6">Create Role</Typography>
            //         </Grid>
            //         <Grid item xs={12} md={3}>
            //             <Controller
            //                 name="role_name"
            //                 control={control}
            //                 defaultValue=""
            //                 rules={{ required: 'Role Name is required' }}
            //                 render={({ field }) => (
            //                     <TextField
            //                         {...field}
            //                         label="Role Name"
            //                         variant="outlined"
            //                         fullWidth
            //                         margin="normal"
            //                         error={!!errors.role_name}
            //                         helperText={errors.role_name ? errors.role_name.message : ''}
            //                     />
            //                 )}
            //             />
            //         </Grid>
            //         <Grid item xs={12} md={3}>
            //             <Controller
            //                 name="department"
            //                 control={control}
            //                 defaultValue=""
            //                 rules={{ required: 'Department is required' }}
            //                 render={({ field }) => (
            //                     <TextField
            //                         {...field}
            //                         label="Department"
            //                         variant="outlined"
            //                         fullWidth
            //                         margin="normal"
            //                         error={!!errors.department}
            //                         helperText={errors.department ? errors.department.message : ''}
            //                     />
            //                 )}
            //             />
            //         </Grid>
            //         <Grid item xs={12} md={3}>
            //             <Controller
            //                 name="level"
            //                 control={control}
            //                 defaultValue={0}  // Set default number value
            //                 rules={{
            //                     required: 'Level is required',

            //                 }}
            //                 render={({ field }) => (
            //                     <TextField
            //                         {...field}
            //                         label="Level"
            //                         variant="outlined"
            //                         fullWidth
            //                         margin="normal"
            //                         type="number"
            //                         error={!!errors.level}
            //                         helperText={errors.level ? errors.level.message : ''}
            //                     />
            //                 )}
            //             />
            //         </Grid>
            //         <Grid item xs={12} >
            //             <Controller
            //                 name="role_description"
            //                 control={control}
            //                 defaultValue=""
            //                 rules={{ required: 'Description is required' }}
            //                 render={({ field }) => (
            //                     <TextField
            //                         multiline
            //                         maxRows={10}
            //                         minRows={4}
            //                         {...field}
            //                         label="Description"
            //                         variant="outlined"
            //                         fullWidth
            //                         margin="normal"
            //                         error={!!errors.role_description}
            //                         helperText={errors.role_description ? errors.role_description.message : ''}
            //                     />
            //                 )}
            //             />
            //         </Grid>


            //         <Grid item xs={12}>
            //             <Button
            //                 variant="contained"
            //                 color="primary"
            //                 onClick={handleSubmit(onSubmit)}
            //                 fullWidth
            //                 sx={{ marginTop: 2 }}
            //             >
            //                 Create Role
            //             </Button>
            //         </Grid>
            //     </Grid>












            // </Box>
            // <Box component={Card}>
            //     <Grid container columnSpacing={2} rowGap={0} component={CardContent}>
            //         <Grid item xs={12}>
            //             <Typography variant="h6">Create Permission</Typography>
            //         </Grid>
            //         <Grid item xs={12} md={3}>
            //             {/* <Controller
            //                 name="role_name"
            //                 control={control}
            //                 defaultValue=""
            //                 rules={{ required: 'Role Name is required' }}
            //                 render={({ field }) => (
            //                     <TextField
            //                         {...field}
            //                         label="Role Name"
            //                         variant="outlined"
            //                         fullWidth
            //                         margin="normal"
            //                         error={!!errors.role_name}
            //                         helperText={errors.role_name ? errors.role_name.message : ''}
            //                     />
            //                 )}
            //             /> */}
            //             <TextField
            //                 label="Permission Name"
            //                 variant="outlined"
            //                 fullWidth
            //                 margin="normal"
            //             />
            //         </Grid>


            //         <Grid item xs={12} >
            //             {/* <Controller
            //                 name="role_description"
            //                 control={control}
            //                 defaultValue=""
            //                 rules={{ required: 'Description is required' }}
            //                 render={({ field }) => (
            //                     <TextField
            //                         multiline
            //                         maxRows={10}
            //                         minRows={4}
            //                         {...field}
            //                         label="Description"
            //                         variant="outlined"
            //                         fullWidth
            //                         margin="normal"
            //                         error={!!errors.role_description}
            //                         helperText={errors.role_description ? errors.role_description.message : ''}
            //                     />
            //                 )}
            //             /> */}
            //             <TextField
            //                 multiline
            //                 maxRows={10}
            //                 minRows={4}
            //                 label="Description"
            //                 variant="outlined"
            //                 fullWidth
            //                 margin="normal"
            //             />
            //         </Grid>


            //         <Grid item xs={12}>
            //             <Button
            //                 variant="contained"
            //                 color="primary"
            //                 fullWidth
            //                 sx={{ marginTop: 2 }}
            //             >
            //                 Create Permission
            //             </Button>
            //         </Grid>
            //     </Grid>












            // </Box>
 

export default ProductSummary