import { Avatar, Box, Chip, Divider, Icon, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Skeleton, Stack, TextField, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Link as MuiLink } from "@mui/material";
import { navProps } from '../../types/AuthProps/AuthProps';
import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useTheme } from '@mui/material';
type props = {
    items: navProps[] | undefined
}

const SideDrawer = (props: props) => {
    const theme = useTheme()
    console.log(theme.mixins.toolbar.minHeight);
    const { pathname } = useLocation();
    console.log(pathname, 'pathname')

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
        <List component={Stack} sx={{ px: 1 }}>
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
            <ListItem>
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
                    }}
                />
            </ListItem>

            <MuiLink component={Link} to={''}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>dashboard</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Dashboard'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink>
            <MuiLink component={Link} to={'policies'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>receipt_long</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'My Policies'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink>
            <MuiLink component={Link} to={'claims'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>verified_user</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Policy Claims'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink>
            <MuiLink component={Link} to={'register'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>assignment_add</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Register Claim'}</Typography>} />
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
            </MuiLink>
            <MuiLink component={Link} to={'helpline'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>support</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Help'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink>
            <Divider />
            {/* <MuiLink component={Link} to={'settings'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>settings</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Overview'}</Typography>} />
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
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Bookings'}</Typography>} />
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
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Add Policy'}</Typography>} />
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
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Policy Claims'}</Typography>} />
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
            </MuiLink>
            <MuiLink component={Link} to={'settings'}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple>
                        <ListItemIcon>
                            <Icon fontSize='small'>settings</Icon>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2' noWrap>{'Helpline'}</Typography>} />
                    </ListItemButton>
                </ListItem>
            </MuiLink> */}
            <>
                {[1].map((number: number) => <ListItem key={number} disablePadding>
                    <ListItemButton disableRipple>
                        <ListItemIcon>
                            <Skeleton width={25} height={40} />
                        </ListItemIcon>
                        <ListItemText primary={<Skeleton width={100} />} />
                    </ListItemButton>
                </ListItem>)}
            </>
        </List>
        <Box sx={{
            pb: theme.spacing(2)
        }}>
            <Typography flexWrap='wrap' color='text.secondary' variant='subtitle2' textAlign='center' mt={1}>
                <Chip icon={<InfoRoundedIcon fontSize='small' />} label="Version v.1" size='small' />
            </Typography>
        </Box>
    </Box>
    )
}




export default SideDrawer;















