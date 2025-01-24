import { Box, ButtonGroup, Card, Checkbox, Chip, Divider, IconButton, LinearProgress, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getEmployeePermissions } from "../../redux/slice/dashboardSlice";
import InfoIcon from '@mui/icons-material/Info';
import CreatePermission from "../../crm/employee/components/CreatePermission";
import CreateRole from "../../crm/employee/components/CreateRole";
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
interface permissionProps {
    permission_name: string,
    permission_id: string,
    permission_description: string
}

const ProductSummary = () => {
    const profile = useSelector((state: RootState) => state.auth.authData);
    const myPermissions = profile?.permissions;
    const permissions = useSelector((state: RootState) => state.dashboard.employee_permissions.data);
    const loadingPermissions = useSelector((state: RootState) => state.dashboard.employee_permissions.loading);
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        if (!permissions.length) dispatch(getEmployeePermissions())
    }, []);
    const reloadPermissions = () => dispatch(getEmployeePermissions());

    return <Box sx={{ pt: 2 }} component='form'>
        <Card>
            <ListItem secondaryAction={
                <ButtonGroup sx={{ alignItems: 'center' }}>
                    <Chip color="info" variant="outlined" onClick={reloadPermissions} icon={<CachedRoundedIcon fontSize="small" />} clickable sx={{ mr: 2 }} label="reload" />
                    <TextField placeholder="Search" size="small" />
                </ButtonGroup>
            }>
                <ListItemText primary={<Typography variant="subtitle2">Employee Permissions</Typography>} secondary={<Typography variant="caption" color='text.secondary'>Add or Manage your Employee Permissions</Typography>} />
            </ListItem>
            <Divider />
            <List disablePadding dense sx={{ maxHeight: 500, overflow: 'auto' }}>
                {loadingPermissions && <LinearProgress />}
                {
                    permissions.map((permission: permissionProps) => {
                        return <ListItem divider key={permission.permission_id} secondaryAction={<Checkbox defaultChecked={myPermissions.includes(permission.permission_id)} title="read" />}>
                            <ListItemText
                                primary={permission.permission_name}
                                secondary={<Typography color='text.secondary' variant="caption" component={Stack} flexDirection='row' alignItems='center'><InfoIcon fontSize="inherit" sx={{ mr: 1 }} />{permission.permission_description}</Typography>}
                            />
                        </ListItem>
                    })
                }
            </List>
        </Card>
        <Stack rowGap={2} mt={2}>
            <CreatePermission />
            <CreateRole />
        </Stack>
    </Box>
}



export default ProductSummary