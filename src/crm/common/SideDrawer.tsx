import { Avatar, Box, Button, Card, CardContent, Chip, Collapse, Divider, Icon, LinearProgress, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import React from 'react';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useTheme } from '@mui/material';
import ProtectedRoutes from '../../ProtectedRoute';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const SideDrawer = () => {
    const currentPath = useLocation().pathname.split('/').splice(-1);
    const theme = useTheme();
    const loading = useSelector((state: RootState) => state.auth.loading);
    const authData = useSelector((state: RootState) => state.auth.authData);
    const desktopOpen: boolean = useSelector((state: RootState) => state.ui.isDesktop);

    return (<Box>
        <Toolbar sx={{ display: { xs: 'block', md: 'none' } }}>
            <ListItem disablePadding sx={{ mt: 4, display: { xs: 'flex', md: 'none' } }}>
                <ListItemIcon>
                    <Avatar sx={{ mr: 1, width: 38, height: 38 }} src={'/brand.ico'} />
                </ListItemIcon>
                <ListItemText primary={<Typography color="text.primary">Namelix</Typography>} />
            </ListItem>
        </Toolbar>

        {loading ? null :
            <List component={Stack} sx={{ px: 1, width: '100%' }}>


                {/* 
                ---------------- customer ----------------------
                */}
                <ProtectedRoutes role="customer" requiredPermission={1000}>
                    <ListItem disablePadding
                    // secondaryAction={
                    //     <Chip variant="outlined" label="new" size="small" color="primary" />
                    // }
                    >
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('dashboard') ? theme.palette.primary.main : 'inherit' }}
                            disableRipple
                            component={Link}
                            to=""
                        >
                            <ListItemIcon>
                                <Icon fontSize="small">dashboard</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant="body2" noWrap>{'Dashboard'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>

                </ProtectedRoutes>
                <ProtectedRoutes role='customer' requiredPermission={1001}>

                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('policies') ? theme.palette.primary.main : 'inherit' }}
                            component={Link}
                            to="policies"
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>receipt_long</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'My Policies'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>

                </ProtectedRoutes>
                <ProtectedRoutes role='customer' requiredPermission={1002}>

                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('claims') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'claims'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>verified_user</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Policy Claims'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>

                </ProtectedRoutes>
                <ProtectedRoutes role='customer' requiredPermission={1003}>

                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('register') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'register'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>assignment_add</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Register Claim'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>

                </ProtectedRoutes>
                <ProtectedRoutes role='customer' requiredPermission={1004}>

                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('settings') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'settings'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>settings</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Settings'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>

                </ProtectedRoutes>
                <ProtectedRoutes role='customer' requiredPermission={1005}>

                    <ListItem disablePadding
                    // secondaryAction={
                    //     <Chip variant='outlined' label="3" size="small" color="success" />
                    // }
                    >
                        <ListItemButton

                            sx={{ bgcolor: currentPath.includes('helpline') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'helpline'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>support</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Help'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>

                {/* 
                --------------------- agent ------------------
                 */}
                <ProtectedRoutes role='agent' requiredPermission={2000}>
                    <ListItem disablePadding
                    // secondaryAction={
                    //     <Chip label="new" size="small" color="success" />
                    // }
                    >
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('dashboard') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={''}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>app_registration</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Overview'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                <ProtectedRoutes role='agent' requiredPermission={2001}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('bookings') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'bookings'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>post_add</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Bookings'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                <ProtectedRoutes role='agent' requiredPermission={2003}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('add-policy') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'add-policy'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>assignment_add</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Add Policy'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                <ProtectedRoutes role='agent' requiredPermission={2003}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('claims') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'claims'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>receipt_long</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Policy Claims'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                <ProtectedRoutes role='agent' requiredPermission={2004}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('settings') ? theme.palette.primary.main : 'inherit' }}

                            component={Link} to={'settings'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>settings</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Settings'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                <ProtectedRoutes role='agent' requiredPermission={2005}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('help') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'help'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>support</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Helpline'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                <ProtectedRoutes role='agent' requiredPermission={2006}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('examination') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'examination'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>checklist_rtl</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Examination'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                <ProtectedRoutes role='agent' requiredPermission={2007}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('study-material') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'study-material'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>local_library</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Study Material'}</Typography>} />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                {/* 
                --------------- employee ------------------------------
                 */}
                <ProtectedRoutes role='employee' requiredPermission={'21c01c0a'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link} to={''}
                            sx={{ bgcolor: currentPath.includes('dashboard') ? theme.palette.primary.main : 'inherit' }}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>dashboard</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Dashboard'}</Typography>} />
                            </Collapse>
                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                <ProtectedRoutes role='employee' requiredPermission={'09b8583a'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('service') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'service'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>manage_accounts</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={
                                    <Typography variant='body2' noWrap>{'Service'}</Typography>
                                } />
                            </Collapse>

                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                <ProtectedRoutes role='employee' requiredPermission={'3dc29c59'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('revenue') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'revenue'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>currency_rupee_circle</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Revenue'}</Typography>} />
                            </Collapse>
                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>

                <ProtectedRoutes role='employee' requiredPermission={'f1940075'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('claims') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'claims'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>payments</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Claims'}</Typography>} />
                            </Collapse>
                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>

                <ProtectedRoutes role='employee' requiredPermission={'dc48f569'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('income') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'income'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>currency_exchange</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Income'}</Typography>} />
                            </Collapse>
                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>

                <ProtectedRoutes role='employee' requiredPermission={'7b8d75a2'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('employee-management') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'employee-management'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>admin_panel_settings</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Employee Management'}</Typography>} />
                            </Collapse>
                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>

                <ProtectedRoutes role='employee' requiredPermission={'123535eb'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('customer-management') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'customer-management'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>manage_accounts</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Customer Management'}</Typography>} />
                            </Collapse>
                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>

                <ProtectedRoutes role='employee' requiredPermission={'3306c28c'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('agent-management') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'agent-management'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>assignment_ind</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Agent Management'}</Typography>} />
                            </Collapse>
                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>

                <ProtectedRoutes role='employee' requiredPermission={'3686ad02'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('products') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'products'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>category</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Products'}</Typography>} />
                            </Collapse>
                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>

                <ProtectedRoutes role='employee' requiredPermission={'4be3e5fb'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('settings') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'settings'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>settings</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography variant='body2' noWrap>{'Settings'}</Typography>} />
                            </Collapse>
                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>

                <ProtectedRoutes role='employee' requiredPermission={'4e971f7b'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('access-management') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'access-management'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>checklist_rtl</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography color='inherit' variant='body2' noWrap>{'Access Management'}</Typography>} />
                            </Collapse>
                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                <ProtectedRoutes role='employee' requiredPermission={'d9d21ae8'}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{ bgcolor: currentPath.includes('error-management') ? theme.palette.primary.main : 'inherit' }}
                            component={Link} to={'error-management'}
                            disableRipple>
                            <ListItemIcon>
                                <Icon fontSize='small'>error</Icon>
                            </ListItemIcon>
                            <Collapse orientation="horizontal" in={!desktopOpen}>
                                <ListItemText primary={<Typography color='inherit' variant='body2' noWrap>{'Error Logs'}</Typography>} />
                            </Collapse>
                        </ListItemButton>
                    </ListItem>
                </ProtectedRoutes>
                <Divider />
            </List>
        }

        <Stack gap={1} px={1}>
            {/* <Card>
                <CardContent>
                    <Stack direction='row' alignItems='center'>
                        <ListItemIcon>
                            <AutoAwesomeRoundedIcon color='warning' fontSize='small' />
                        </ListItemIcon>
                        <Collapse orientation="horizontal" in={!desktopOpen}>
                            <ListItemText primary={<Typography fontWeight={600} variant='subtitle2' component="h1">Trail ends in 6 days !</Typography>} />
                        </Collapse>
                    </Stack>

                    <Collapse orientation="horizontal" in={!desktopOpen}>
                        <Box mb={1}>
                            <Typography variant='caption' fontSize='12px'>You are on a free premium trail plain on monthly billing</Typography>
                        </Box>
                    </Collapse>
                    <Collapse orientation="horizontal" in={!desktopOpen}>
                        <Button fullWidth variant='contained'>View more details</Button>
                    </Collapse>
                </CardContent>
            </Card> */}
            {/* <Card>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src='https://avatar.iran.liara.run/public' alt="" />
                    </ListItemAvatar>
                    <Collapse orientation="horizontal" in={!desktopOpen}>
                        <ListItemText primary={<Typography variant='subtitle2'>{authData?.firstname + " " + authData?.lastname}</Typography>} secondary={<Typography noWrap={false} variant='caption'>{authData?.email}</Typography>} />
                    </Collapse>
                </ListItem>
            </Card> */}
        </Stack>

        {/* <Box sx={{
            pb: theme.spacing(2)
        }}>
            <Typography flexWrap='wrap' color='text.secondary' variant='subtitle2' textAlign='center' mt={1}>
                <Chip color='warning' icon={<InfoRoundedIcon fontSize='small' />} label="Version v.1" size='small' />
            </Typography>
        </Box> */}
    </Box>
    )
}
export default React.memo(SideDrawer);