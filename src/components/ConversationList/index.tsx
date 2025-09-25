import { CardContent, List, ListItem, ListItemText, ListSubheader, Skeleton, Typography } from "@mui/material";
import DarkMode from "../Darkmode";
import React from "react";
import MoreHorizRound from "../../assets/icons/more";

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

                }}
            >
                <Typography fontSize={'0.75rem'} variant="subtitle2">Chats</Typography>
            </ListSubheader>
        }>
            {Array.from({ length: 20 }, (_, i) => (
                <ListItem key={i} secondaryAction={<MoreHorizRound fontSize="inherit" />}>
                    <ListItemText primary={
                        <Typography
                            variant="subtitle2"
                            textOverflow={'ellipsis'}
                            overflow={'hidden'}
                            sx={{
                                maxWidth: { xs: 180, lg: 400 },
                                fontSize: 14,
                                whiteSpace: 'nowrap'
                            }}
                        >{generateRandomMessage()}</Typography>

                    } />
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