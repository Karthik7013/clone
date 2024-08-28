import { Avatar, Box, Chip, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Skeleton, Stack, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from "@mui/material";
import { navProps } from '../../types/AuthProps/AuthProps';
import React from 'react';
import theme from '../../theme/theme';

import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
type props = {
    items: navProps[] | undefined
}

const SideDrawer = (props: props) => {
    return (<Box>
        <Toolbar>


            <ListItem disablePadding>
                <ListItemIcon>
                    <Avatar sx={{ mr: 1, width: 38, height: 38 }} src={'/brand.ico'} />
                </ListItemIcon>
                <ListItemText primary={<MuiLink component={Link} to="/">
                    <Typography color="text.primary">Namelix</Typography>
                </MuiLink>} />


            </ListItem>

        </Toolbar>



        <List component={Stack} divider={<Divider />} sx={{ px: 1 }}>
            {props.items ? <>
                {props.items.map((item, index: number) => (
                    <MuiLink component={Link} to={item.path} key={index}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton disableRipple>
                                <ListItemIcon>
                                    <Icon>{item.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                                {index === 1 && <ListItemSecondaryAction><Chip color='warning' label="+3" size='small' /></ListItemSecondaryAction>}
                            </ListItemButton>
                        </ListItem>
                    </MuiLink>
                ))}
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
        <Typography flexWrap='wrap' color='text.secondary' variant='subtitle2' textAlign='center' mt={1}><Chip icon={<InfoRoundedIcon fontSize='small' />} label="Version v.1" size='small'></Chip></Typography>

    </Box>
    )
}




export default SideDrawer;















