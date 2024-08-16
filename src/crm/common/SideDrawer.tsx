import { Avatar, Box, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { navProps } from '../../types/AuthProps/AuthProps';
import React from 'react';

type props = {
    items: navProps[]
}

const SideDrawer = (props: props) => {
    const items = props.items;
    return (<Box>
        <Toolbar>
            <Avatar sx={{ mr: 1, width: 38, height: 38 }} src={'/brand.ico'} />
            <Typography href={'/'} component={'a'} variant="body1">
                Namelix</Typography>
        </Toolbar>
        <Divider />
        {/* <Toolbar /> */}
        <List component={Stack} divider={<Divider />}>
            {items.map((item, index: number) => (
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
        </List>

    </Box>
    )
}




export default SideDrawer;















