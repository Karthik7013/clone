import { Avatar, Badge, Box, Chip, CircularProgress, Divider, Icon, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Skeleton, Stack, TextField, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useTheme } from '@mui/material';
import KeyboardCommandKeyRoundedIcon from '@mui/icons-material/KeyboardCommandKeyRounded';
import ProtectedRoutes from '../../ProtectedRoute';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const SideDrawer = () => {
    const theme = useTheme();
    const activeTab = useSelector((state: RootState) => state.dashboard.activeTab);
    const loading = useSelector((state: RootState) => state.auth.loading);
    return (<Box>
        <Toolbar sx={{ display: { xs: 'block', md: 'none' } }}>
            <ListItem component={Link} to="/" disablePadding sx={{ width: 240 - 10, display: { xs: 'none', md: 'flex' } }}>
                <ListItemIcon>
                    <Avatar sx={{ mr: 1, width: 38, height: 38 }} src={'/brand.ico'} />
                </ListItemIcon>
                <ListItemText primary={
                    <Typography color="text.primary">Namelix</Typography>} />
            </ListItem>
        </Toolbar>
        {loading ? <CircularProgress /> : <List component={Stack} sx={{ px: 1 }}>
            <ListItem disablePadding sx={{ mb: 1 }}>
                <TextField
                    size='small'
                    variant="outlined"
                    fullWidth
                    placeholder='Search'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRoundedIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position='end'>
                                <KeyboardCommandKeyRoundedIcon fontSize='inherit' />
                            </InputAdornment>
                        )
                    }}
                />
            </ListItem>
            <ProtectedRoutes role="customer" requiredPermission={1000}>

                <ListItem disablePadding
                    secondaryAction={
                        <Chip variant="outlined" label="new" size="small" color="primary" />
                    }
                >
                    <ListItemButton
                        disableRipple
                        component={Link}
                        to=""
                    >
                        <ListItemIcon>
                            <Icon fontSize="small">dashboard</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="body2" noWrap>{'Dashboard'}</Typography>} />
                    </ListItemButton>
                </ListItem>

            </ProtectedRoutes>
            <ProtectedRoutes role='customer' requiredPermission={1001}>

                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="policies"
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>receipt_long</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'My Policies'}</Typography>} />
                    </ListItemButton>
                </ListItem>

            </ProtectedRoutes>
            <ProtectedRoutes role='customer' requiredPermission={1002}>

                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'claims'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>verified_user</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Policy Claims'}</Typography>} />
                    </ListItemButton>
                </ListItem>

            </ProtectedRoutes>
            <ProtectedRoutes role='customer' requiredPermission={1003}>

                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'register'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>assignment_add</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Register Claim'}</Typography>} />
                    </ListItemButton>
                </ListItem>

            </ProtectedRoutes>
            <ProtectedRoutes role='customer' requiredPermission={1004}>

                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'settings'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>settings</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Settings'}</Typography>} />
                    </ListItemButton>
                </ListItem>

            </ProtectedRoutes>
            <ProtectedRoutes role='customer' requiredPermission={1005}>

                <ListItem disablePadding
                    secondaryAction={
                        <Chip label="new" size="small" color="success" />
                    }
                >
                    <ListItemButton
                        component={Link} to={'helpline'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>support</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Help'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>


            <ProtectedRoutes role='agent' requiredPermission={2000}>
                <ListItem disablePadding
                    secondaryAction={
                        <Chip label="new" size="small" color="success" />
                    }
                >
                    <ListItemButton
                        component={Link} to={''}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>app_registration</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Overview'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='agent' requiredPermission={2001}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'bookings'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>post_add</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Bookings'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='agent' requiredPermission={2003}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'add-policy'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>assignment_add</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Add Policy'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='agent' requiredPermission={2003}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'claims'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>receipt_long</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Policy Claims'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='agent' requiredPermission={2004}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'settings'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>settings</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Settings'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='agent' requiredPermission={2005}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'help'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>support</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Helpline'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='agent' requiredPermission={2006}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'examination'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>checklist_rtl</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Examination'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='agent' requiredPermission={2006}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'study-material'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>local_library</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Study Material'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>

            <ProtectedRoutes role='employee' requiredPermission={3000}>
                <ListItem disablePadding
                    secondaryAction={
                        <Chip label="new" size="small" color="success" />
                    }
                >
                    <ListItemButton
                        component={Link} to={''}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>dashboard</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Dashboard'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='employee' requiredPermission={3001}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'service'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>manage_accounts</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Service'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='employee' requiredPermission={3002}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'revenue'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>currency_rupee_circle</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Revenue'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='employee' requiredPermission={3003}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'sales'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>app_registration</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Sales'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='employee' requiredPermission={3004}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'income'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>app_registration</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Income'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='employee' requiredPermission={3005}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'employee-management'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>admin_panel_settings</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Employee Management'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='employee' requiredPermission={3006}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'products'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>category</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Products'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='employee' requiredPermission={3007}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'settings'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>settings</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Settings'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>
            <ProtectedRoutes role='employee' requiredPermission={3008}>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link} to={'access-management'}
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>checklist_rtl</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Access Management'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </ProtectedRoutes>



            <Divider />
        </List>}
        <Box sx={{
            pb: theme.spacing(2)
        }}>
            <Typography flexWrap='wrap' color='text.secondary' variant='subtitle2' textAlign='center' mt={1}>
                <Chip color='warning' icon={<InfoRoundedIcon fontSize='small' />} label="Version v.1" size='small' />
            </Typography>
        </Box>
    </Box >
    )
}

// posp

// employee
{/* <MuiLink component={Link} to={'/dashboard'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>dashboard</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Dashboard'}</Typography>} />
                        {<ListItemSecondaryAction><Chip color='warning' label="+3" size='small' /></ListItemSecondaryAction>}
                    </ListItemButton>
                </ListItem>
            </MuiLink>
            <MuiLink component={Link} to={'income'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>currency_rupee_circle</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Income Service'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink>
            <MuiLink component={Link} to={'employee-management'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>admin_panel_settings</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Employee Management'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink>
            <MuiLink component={Link} to={'agent-management'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>assignment_ind</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Agent Management'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink>
            <MuiLink component={Link} to={'customer-management'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>groups</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Customer Management'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink>
            <MuiLink component={Link} to={'access-management'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>checklist_rtl</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Access Management'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink>
            <MuiLink component={Link} to={'products'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>category</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Product Sales'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink>
            <MuiLink component={Link} to={'settings'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>settings</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Settings'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink> */}




export default React.memo(SideDrawer);















