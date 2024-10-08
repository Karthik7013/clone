import { Avatar, Box, Chip, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Skeleton, Stack, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Link as MuiLink } from "@mui/material";
import { navProps } from '../../types/AuthProps/AuthProps';
import React from 'react';

import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useTheme } from '@mui/material';
type props = {
    items: navProps[] | undefined
}

const SideDrawer = (props: props) => {
    const theme = useTheme()
    const { pathname } = useLocation();

    return (<Box sx={{ height: '100%' }}>
        <List component={Stack} divider={<Divider />} sx={{ px: 1 }}>
            {props.items ? <>
                {props.items.map((item, index: number) => {
                    return (

                        <MuiLink component={Link} to={index ? item.path : '/dashboard'} key={index}>
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    disableRipple>
                                    <ListItemIcon>
                                        <Icon>{item.icon}</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography variant='body2' noWrap>{item.title}</Typography>} />
                                    {index === 1 && <ListItemSecondaryAction><Chip color='warning' label="+3" size='small' /></ListItemSecondaryAction>}
                                </ListItemButton>
                            </ListItem>
                        </MuiLink>

                    )
                })}
            </> :
                <>
                    {[1, 2, 3, 4, 5, 6].map((number: number) => <ListItem key={number} disablePadding>
                        <ListItemButton disableRipple>
                            <ListItemIcon>
                                <Skeleton width={25} height={40} />
                            </ListItemIcon>
                            <ListItemText primary={<Skeleton width={100} />} />
                        </ListItemButton>
                    </ListItem>)}
                </>
            }
        </List>

        <Box sx={{
            bgcolor: theme.palette.background.paper, paddingBottom: theme.spacing(1)
        }}>

            <Typography flexWrap='wrap' color='text.secondary' variant='subtitle2' textAlign='center' mt={1}>
                <Chip icon={<InfoRoundedIcon fontSize='small' />} label="Version v.1" size='small' />
            </Typography>
        </Box>

    </Box>
    )
}




export default SideDrawer;















