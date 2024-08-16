import { Avatar, Box, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Skeleton, Stack, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { navProps } from '../../types/AuthProps/AuthProps';
import React from 'react';

type props = {
    items: navProps[] | undefined
}

const SideDrawer = (props: props) => {
    return (<Box>
        <Toolbar>
            <Avatar sx={{ mr: 1, width: 38, height: 38 }} src={'/brand.ico'} />
            <Typography href={'/'} component={'a'} variant="body1">
                Namelix</Typography>
        </Toolbar>
        <Divider />
        <List component={Stack} divider={<Divider />}>
            {props.items ? <>
                {props.items.map((item, index: number) => (
                    <Link to={item.path} key={index}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton disableRipple>
                                <ListItemIcon>
                                    <Icon>{item.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
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

    </Box>
    )
}




export default SideDrawer;















