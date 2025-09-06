import { Box, Card, CardActionArea, CardContent, Divider, IconButton, ListItem, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import ReactMarkdown from "../MarkdownRender";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

const Conversation = ({ candidate, response }: { candidate: 'user' | 'assistant', response: string }) => {
    const muiTheme = useTheme();
    const mode = muiTheme.palette.mode;
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    return (
        <ListItem sx={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'
            , padding: isMobile ? 0 : "initial"
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
                            <ContentCopyIcon fontSize='inherit' /></IconButton>
                        <IconButton size='small'>
                            <HeadphonesRoundedIcon fontSize='inherit' />
                        </IconButton>
                        <IconButton size='small'>
                            <ShareRoundedIcon fontSize='inherit' />
                        </IconButton>
                        <IconButton size='small'>
                            <DownloadRoundedIcon fontSize='inherit' />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                </Box>}
            {(candidate === 'user') &&
                <CardActionArea sx={{ cursor: 'initial', maxWidth: '320px', width: 'fit-content' }}>
                    <Card elevation={0} sx={{ p:'18px 16px', bgcolor: muiTheme.palette.primary[mode], borderRadius: muiTheme.shape.borderRadius, borderTopRightRadius: 0 }}>
                        <Typography noWrap={false} variant='subtitle2'
                            sx={{
                                fontSize:12,
                                whiteSpace: 'pre-wrap'
                            }}
                        >{response}</Typography>
                    </Card>
                </CardActionArea>
            }
        </ListItem >
    )
}
export default Conversation;