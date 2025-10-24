import { CardContent, List, ListItem, ListItemButton, ListItemText, ListSubheader, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import MoreHorizRound from "../../assets/icons/more";
import { useGetUserChatListMutation } from "../../features/chatbot/chatbotApi";

const ConversationList = () => {
    const [handleM, { isLoading, data }] = useGetUserChatListMutation();

    useEffect(() => {
        handleM({});
    }, [handleM])

    return <CardContent sx={{ py: 0, width: "100%" }}>
        <List sx={{ width: "100%" }} dense disablePadding subheader={
            <ListSubheader
                sx={{
                    position: "sticky",

                }}
            >
                <Typography fontSize={'0.75rem'} variant="subtitle2">Chats</Typography>
            </ListSubheader>
        }>
            {data && data.data.map((props: {
                title: string, cid: string
            }) => (
                <ListItemButton disableTouchRipple disableGutters>


                    <ListItem key={props.cid} secondaryAction={<MoreHorizRound fontSize="inherit" />}>
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
                            >{props.title}</Typography>
                        } />
                    </ListItem>
                </ListItemButton>
            ))}
            {isLoading && (


                <div>
                    <ListItem >
                        <ListItemText primary={<Skeleton animation='wave' variant="text" />} />
                    </ListItem>
                    <ListItem >
                        <ListItemText primary={<Skeleton animation='wave' variant="text" />} />
                    </ListItem>
                    <ListItem >
                        <ListItemText primary={<Skeleton animation='wave' variant="text" />} />
                    </ListItem>
                </div>)}
        </List>
    </CardContent>
}
export default React.memo(ConversationList);