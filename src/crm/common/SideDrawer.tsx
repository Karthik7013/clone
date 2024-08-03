import { Avatar, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { navProps } from '../../types/AuthProps/AuthProps';
import React from 'react';
// type navProps = {
//     title: string,
//     path: string,
//     icon: string
// }

type props = {
    items: navProps[]
}

const SideDrawer = (props: props) => {
    const items = props.items;
    return (<div>

        <Toolbar >
            <Avatar sx={{ mr: 1, width: 38, height: 38 }} src={'/brand.ico'} /><Typography variant="body1">Namelix</Typography>
        </Toolbar>
        <Divider />
        {/* <Toolbar /> */}
        <List component={Stack} divider={<Divider />}>
            {items.map((item, index: number) => (
                <Link to={item.path} key={index}>
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon>{item.icon}</Icon>

                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>

    </div>
    )
}




export default SideDrawer;















