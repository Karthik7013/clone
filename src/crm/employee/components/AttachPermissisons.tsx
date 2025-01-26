
import { Box, ButtonGroup, Card, Checkbox, Chip, CircularProgress, Divider, LinearProgress, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfoIcon from '@mui/icons-material/Info';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import { AppDispatch, RootState } from "../../../redux/store";
import { getEmployeePermissions } from "../../../redux/slice/dashboardSlice";
import CustomScrollbarBox from "../../../Framework/components/ScrollComponent";
import axios from "axios";
import { EmployeeResources } from "../../../service/api";
import { popPermission, pushPermission } from "../../../redux/slice/authSlice";
interface permissionProps {
    permission_name: string,
    permission_id: string,
    permission_description: string
}





const AttachPermissions = () => {
    const profile = useSelector((state: RootState) => state.auth.authData);
    const employee_role_id = profile.employee_role_id
    const myPermissions = profile?.permissions;
    const permissions = useSelector((state: RootState) => state.dashboard.employee_permissions.data);
    const loadingPermissions = useSelector((state: RootState) => state.dashboard.employee_permissions.loading);
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        if (!permissions.length) dispatch(getEmployeePermissions())
    }, []);
    const reloadPermissions = () => dispatch(getEmployeePermissions());


    const Permission = (permission: permissionProps) => {
        const [loading, setLoading] = useState(false);
        const addPermission = async (payload: {
            employee_role_id: number,
            permission_id: string
        }) => {
            try {
                setLoading(true)
                const res = await EmployeeResources.post('/attach-permissions', payload);
                if (res.status === 200) {
                    dispatch(pushPermission(payload.permission_id))
                }
            } catch (error) {
                console.log('failed to add');
            } finally {
                setLoading(false)
            }
        }
        const removePermission = async (payload: {
            employee_role_id: number,
            permission_id: string
        }) => {
            try {
                setLoading(true)
                const res = await EmployeeResources.post('/remove-permissions', payload);
                // if (res.status === 200) {
                //     dispatch(popPermission(payload.permission_id))
                // }
            } catch (error) {
                console.log('failed to add');
            } finally {
                setLoading(false)
            }
        }


        const handlePermission = (event: React.ChangeEvent<HTMLInputElement>) => {
            const check: boolean = event.target.checked;
            // dispatch 
            if (check) {
                addPermission({
                    employee_role_id: employee_role_id,
                    permission_id: permission.permission_id
                })
            } else {
                removePermission({
                    employee_role_id: employee_role_id,
                    permission_id: permission.permission_id
                })
            }
        }
        return <ListItem divider key={permission.permission_id} secondaryAction={loading ? <CircularProgress size={20} /> : <Checkbox
            onChange={handlePermission}
            defaultChecked={myPermissions.includes(permission.permission_id)} title={`ID : ${permission.permission_id}`} />}>
            <ListItemText
                primary={permission.permission_name}
                secondary={<Typography color='text.secondary' variant="caption" component={Stack} flexDirection='row' alignItems='center'><InfoIcon fontSize="inherit" sx={{ mr: 1 }} />{permission.permission_description}</Typography>}
            />
        </ListItem>
    }

    return <Card>
        <ListItem secondaryAction={
            <ButtonGroup sx={{ alignItems: 'center' }}>
                <Chip size="small" color="info" variant="outlined" onClick={reloadPermissions} icon={<CachedRoundedIcon fontSize="inherit" />} clickable sx={{ mr: 2 }} label="reload" />
                <TextField placeholder="Search" size="small" />
            </ButtonGroup>
        }>
            <ListItemText primary={<Typography variant="subtitle2">Employee Permissions</Typography>} secondary={<Typography variant="caption" color='text.secondary'>Add or Manage your Employee Permissions</Typography>} />
        </ListItem>
        {loadingPermissions && <LinearProgress />}
        <Divider />
        <CustomScrollbarBox component={List} sx={{ maxHeight: 500 }}>
            {
                permissions.map((permission: permissionProps, _: number) => {
                    return <Permission key={_} permission_description={permission.permission_description} permission_id={permission.permission_id} permission_name={permission.permission_name} />
                })
            }
        </CustomScrollbarBox>
    </Card>
}

export default AttachPermissions;