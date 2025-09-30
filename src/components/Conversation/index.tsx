import { Box, Card, CardActionArea, Divider, IconButton, ListItem, Stack, Toolbar, Typography, useTheme } from "@mui/material";
import ReactMarkdown from "../MarkdownRender";
import Copy from "../../assets/icons/copy";
import Download from "../../assets/icons/download";
import Headphone from "../../assets/icons/headphone";
import FileCard from "../FileCard";
import { copyText } from "../../utils/copyText";
import { useState } from "react";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';


const Conversation = ({ candidate, response, filedata }: { candidate: 'user' | 'assistant', response: string, filedata?: unknown }) => {
    const [copy, setCopy] = useState(false);
    const muiTheme = useTheme();
    const mode = muiTheme.palette.mode;
    const handleCopy = (text: string) => () => {
        setCopy(true)
        copyText(text);
        setTimeout(() => setCopy(false), 1000)
    }
    return (
        <ListItem sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
        }}>
            {(candidate === 'assistant') &&
                <Box sx={{ width: '100%' }}>

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
                <Stack gap={2} alignItems={'flex-end'}>
                    {Boolean(filedata) && <FileCard filename="Untitled.mp3" size_formatted="1024" />}
                    <CardActionArea sx={{ cursor: 'initial', width: 'fit-content', overflow: 'auto' }}>
                        <Card elevation={0} sx={{ p: '18px 16px', bgcolor: muiTheme.palette.primary[mode] }}>
                            <Typography noWrap={false} variant='subtitle2'
                                sx={{
                                    fontSize: 14,
                                    whiteSpace: 'pre-wrap',
                                    color: 'white'
                                }}
                            >{response}</Typography>
                        </Card>
                    </CardActionArea>
                    <Box>
                        <IconButton onClick={handleCopy(response)} size='small'>
                            {!copy ? <Copy fontSize='inherit' /> : <CheckRoundedIcon fontSize='inherit' />}
                        </IconButton>

                    </Box>
                </Stack>
            }
        </ListItem>
    )
}
export default Conversation;