import { CardContent, List, ListItem, ListItemText, ListSubheader, Skeleton, Typography } from "@mui/material";
import DarkMode from "../Darkmode";
import React from "react";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const generateRandomMessage = () => {
    const subjects = ['Meeting', 'Hi', 'File', 'Call', 'Done', 'Help', 'Later'];
    const verbs = ['sent', 'done', 'ready', 'coming', 'here', 'updated'];
    const nouns = ['now', 'today', 'soon', 'tomorrow', 'attached'];
    return `${subjects[Math.floor(Math.random() * subjects.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}!`;
};
const ConversationList = () => {
    return <CardContent sx={{ py: 0 }}>
        <List dense disablePadding subheader={
            <ListSubheader
                sx={{
                    position: "sticky",
                    top: -1,
                    bgcolor: "background.paper",
                    pl: 2
                }}
            >
                <Typography fontSize={'0.75rem'} variant="subtitle2">Chats</Typography>
            </ListSubheader>
        }>
            {Array.from({ length: 20 }, (_, i) => (
                <ListItem key={i} secondaryAction={<MoreHorizRoundedIcon />}>
                    <ListItemText primary={generateRandomMessage()} />
                </ListItem>
            ))}
            <ListItem >
                <ListItemText primary={<Skeleton animation='wave' variant="text" />} />
            </ListItem>
            <DarkMode />
        </List>
    </CardContent>
}
export default React.memo(ConversationList);