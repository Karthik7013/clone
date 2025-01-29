import { Avatar, Badge, Box, Button, Card, CardContent, Chip, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Popover, Stack, Typography } from "@mui/material";
import React from "react";
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomScrollbarBox from "./ScrollComponent";
const Notification: React.FC = (): React.JSX.Element => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return <>
        <IconButton sx={{ mr: 2 }} aria-describedby={id} onClick={handleClick}>
            <Badge badgeContent={5} variant="dot">
                <NotificationsRoundedIcon color="inherit" />
            </Badge>
        </IconButton>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            elevation={1}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',     // The vertical position of the popover relative to the anchor
                horizontal: 'center', // The horizontal position of the popover relative to the anchor
            }}
            sx={{ mt: 1 }}  // Apply some margin-top to push the popover down
        >
            <Card sx={{ width: "300px" }}>
                <CardContent component={Stack} direction={'row'}>
                    <Box>
                        <Typography>Notification</Typography>

                    </Box>
                    <Box flexGrow={1} />
                    <Box>
                        <Chip clickable size="small" label={<Typography fontSize={'0.7em'} variant="caption">Mark all read</Typography>} />
                    </Box>
                </CardContent>
                <Divider />
                <CustomScrollbarBox component={List} sx={{ pb: 1, maxHeight: 400, overflow: 'auto' }}>

                    {[1, 2, 3, 4].map((notification) => {
                        return <ListItem divider alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://avatar.iran.liara.run/public" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography variant="caption">John Doe</Typography>}
                                secondary={
                                    <React.Fragment>
                                        <Typography

                                            variant="caption"
                                        >
                                            — I'll be in your neighborhood doing errands this…
                                        </Typography>

                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    })}

                </CustomScrollbarBox>
            </Card>

        </Popover>
    </>
}
export default Notification;