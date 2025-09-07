import { Box, Card, CardActionArea, CardContent, Divider, IconButton, ListItem, Toolbar, Typography, useTheme } from "@mui/material";
import ReactMarkdown from "../MarkdownRender";
import Copy from "../../assets/icons/copy";
import Download from "../../assets/icons/download";
import Headphone from "../../assets/icons/headphone";

const Conversation = ({ candidate, response }: { candidate: 'user' | 'assistant', response: string }) => {
    const muiTheme = useTheme();
    const mode = muiTheme.palette.mode;
    return (
        <ListItem sx={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'

        }}>
            {(candidate === 'assistant') &&
                <Box component={CardContent} sx={{ width: '100%' }}>

                    <ReactMarkdown>
                        {
                            response
                        }
                    </ReactMarkdown>
                    <Toolbar disableGutters sx={{ columnGap: 1 }}>
                        <IconButton size='small'>
                            <Copy fontSize='inherit' /></IconButton>
                        <IconButton size='small'>
                            <Headphone fontSize='inherit' />
                        </IconButton>
                        <IconButton size='small'>
                            <Download fontSize='inherit' />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                </Box>}
            {(candidate === 'user') &&
                <CardActionArea sx={{ cursor: 'initial', width: 'fit-content', overflow: 'auto' }}>
                    <Card elevation={0} sx={{ p: '18px 16px', bgcolor: muiTheme.palette.primary[mode], borderRadius: muiTheme.shape.borderRadius }}>
                        <Typography noWrap={false} variant='subtitle2'
                            sx={{
                                fontSize: 14,
                                whiteSpace: 'pre-wrap'
                            }}
                        >{response}</Typography>
                    </Card>
                </CardActionArea>
            }
        </ListItem>
    )
}
export default Conversation;