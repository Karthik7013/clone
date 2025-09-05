import { sendMessageStream } from '../features/chatbot/chatbotApi';
import React, { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import { Box, CardActionArea, CardContent, Collapse, Container, Divider, List, ListItem, Paper, Stack, Table, useMediaQuery, useTheme, Link as MuiLink, CardMedia, Toolbar, TypographyProps, ButtonGroup, Drawer } from '@mui/material';
// custom components
import Card from "../components/ui/Card"
import Typography from "../components/ui/Typography"
// import Avatar from "../components/ui/Avatar"
import Button from "../components/ui/Button"
import IconButton from "../components/ui/IconButton"
// import TextField from "../components/ui/InputField"

import { useDispatch, useSelector } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';


import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';

import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
// import BiotechRoundedIcon from '@mui/icons-material/BiotechRounded';
// import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
// custom icons
import AudioLines from '../assets/icons/audio-lines';
// import GeminiIcon from '../assets/icons/GeminiIcon';
import ArrowUp from '../assets/icons/arrow-up';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

import { AppDispatch, RootState } from '../store/store';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import Markdown from 'react-markdown';
import Upload from '../components/Upload';
import Header from '../components/Header';
import Scrollbar from '../components/Scrollbar/Scrollbar';
import Hero from '../components/Hero';
import { ArrowDownwardRounded } from '@mui/icons-material';
import Sidebar from '../components/Sidebar';

export type file = {
    filename: string,
    size_formatted: string,
    url: string,
    thumb_url: string,
    delete_url: string
}

export interface BotSubmitType {
    t: string,
    file?: file | undefined
}

type CodeProps = ComponentPropsWithoutRef<"code"> & {
    inline?: boolean;
};

const AppLayout = () => {
    const [mobileDrawer, setMobileDrawer] = useState(false);
    const [collapse, setCollapse] = useState(true);
    const handleCollpase = () => setCollapse((prev) => !prev)
    const handleDrawer = () => setMobileDrawer((prev) => !prev);
    const dispatch: AppDispatch = useDispatch();
    const muiTheme = useTheme();
    const mode = muiTheme.palette.mode;
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    const contentRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const borderRadius = useSelector((state: RootState) => state.themeReducer.borderRadius)
    const { handleSubmit, control, watch, setValue, reset } = useForm<BotSubmitType>({
        defaultValues: {
            t: '',
            file: undefined
        }
    })
    const { messages, isLoading } = useSelector((state: RootState) => state.chat);

    const file = watch('file');
    const t = watch('t');

    const onHandleSubmit: SubmitHandler<BotSubmitType> = async (data) => {
        try {
            if (contentRef.current) {
                contentRef.current.textContent = '';
            }
            setValue('t', '', { shouldValidate: false });
            setValue('file', undefined, { shouldValidate: false });
            dispatch(sendMessageStream(data));
        } catch (err) {
            console.log(err)
        }
    };


    useEffect(() => {
        // Remove old theme if exists
        const existingLink = document.getElementById("hljs-theme") as HTMLLinkElement;
        if (existingLink) {
            existingLink.remove();
        }

        // Create new theme link
        const link = document.createElement("link");
        link.id = "hljs-theme";
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href =
            muiTheme.palette.mode === "dark"
                ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tomorrow-night-bright.min.css"
                : "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css";
        document.head.appendChild(link);
    }, [muiTheme.palette.mode]);

    const scrollToBottom = () => {
        if (messagesEndRef?.current?.scrollIntoView) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleInput = () => {
        const text = contentRef.current?.textContent || '';
        setValue('t', text, { shouldValidate: true });
    };
    const handleFocus = () => {
        if (contentRef.current?.textContent === 'Ask anything.') {
            contentRef.current.textContent = '';
        }
    };

    const CodeBlock = ({ inline, className, children, ...props }: CodeProps) => {
        const [copied, setCopied] = useState(false);
        const code = React.Children.toArray(children)
            .map((child) => typeof child === 'string' ? child : '')

        // Extract language (null-safe)
        const match = /language-(\w+)/.exec(className || "");
        const language = match?.[1] ?? "text";

        const handleCopy = () => {
            console.log(code);
            // navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        };
        if (language === 'text' && !inline) return <code style={{
            backgroundColor: muiTheme.palette.primary[mode], padding: '0.2em 0.5em', borderRadius: '4px'
        }} className={className} {...props}>{children}</code>

        return <div className={`code-block-wrapper ${className}`} >
            <div className="code-block-header"
                style={{
                    backgroundColor: muiTheme.palette.divider,
                    position: 'sticky',
                    top: 0
                }}>
                <Typography sx={{
                    color: muiTheme.palette.text.disabled
                }} as='span'>{language}</Typography>
                <Box>
                    <Button color='inherit' onClick={handleCopy} startIcon={copied ? <CheckRoundedIcon /> : <ContentCopyRoundedIcon />} size='small'>{copied ? "Copied!" : "Copy"}</Button>
                    <Button color='inherit' startIcon={<FileDownloadRoundedIcon />} size='small'>Download</Button>
                </Box>
            </div>
            <code className={className} {...props}>{children}</code>
        </div>
    };

    const TableBlock = ({ children, ...props }: CodeProps) => {
        return (
            <Box sx={{ overflowX: "auto", my: 2 }}>
                <Table
                    elevation={1}
                    component={Paper}
                    {...props}
                    sx={{
                        borderCollapse: "collapse",
                        width: "100%",
                        overflow: 'hidden',
                        borderRadius: '0.5em',
                        border: `1px solid ${muiTheme.palette.divider}`,
                        "& th, & td": {
                            border: `1px solid ${muiTheme.palette.divider}`,
                            padding: "8px",
                            textAlign: "left",
                        },
                        "& th": {
                            backgroundColor: muiTheme.palette.divider
                        },
                    }}
                >
                    {children}
                </Table>
            </Box>
        );
    };
    const QuoteBlock = ({ children, ...props }: CodeProps) => {
        return <Box sx={{
            borderLeft: `4px solid ${muiTheme.palette.primary[mode]}`,
            padding: '1rem',
            pb: 1,
            fontStyle: 'italic',
            margin: '1em 0'
        }
        } {...props}> {children}</Box >
    }

    const HrBlock = () => <Divider sx={{ my: 1 }} />;
    const LinkBlock = (props: CodeProps) => (
        <MuiLink target="_blank" rel="noopener noreferrer" {...props} />
    );
    const ListBlock = (props: CodeProps) => (
        <List dense disablePadding
            sx={{
                listStyleType: "disc",
                pl: 0,
                "& li": { display: "list-item" },
                paddingLeft: '1.25rem',
                paddingBottom: '0.75rem'
            }}
            {...props}
        />
    );

    const OrderedListBlock = (props: CodeProps) => (
        <List dense disablePadding
            component="ol"
            sx={{
                listStyleType: "decimal",
                pl: 0,
                "& li": { display: "list-item" },
                paddingLeft: '1.25rem',
                paddingBottom: '0.75rem'
            }}
            {...props}
        />
    );

    const ListItemBlock = (props: CodeProps) => <ListItem {...props} />;
    const ImageBlock = (props: CodeProps) => {
        return (
            <CardMedia
                component="img"
                sx={{ borderRadius: 2, my: 2, maxHeight: 400, objectFit: "contain" }}
                {...props}
            />
        )
    };
    const VideoBlock = (props: CodeProps) => (
        <CardMedia
            component="video"
            sx={{ borderRadius: borderRadius, my: 2, objectFit: "contain" }}
            {...props}
        />
    );
    const AudioBlock = (props: CodeProps) => {
        return <CardMedia component='audio' {...props}></CardMedia>
    }
    const HeadingBlock = (level: number) => {
        const variantMap: Record<number, TypographyProps['variant']> = {
            1: "h4",
            2: "h5",
            3: "h6",
            4: "subtitle1",
            5: "subtitle2",
            6: "body1",
        };
        return (props: CodeProps) => (
            <Typography gutterBottom variant={variantMap[level]} {...props} />
        );
    };
    const ParagraphBlock = (props: CodeProps) => (
        <Typography paragraph variant="body1" {...props} />
    );

    const Conversation = ({ candidate, response }: { candidate: 'user' | 'assistant', response: string }) => {
        return (
            <ListItem sx={{
                display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'
                , padding: isMobile ? 0 : "initial"
            }}>
                {(candidate === 'assistant') &&
                    <Box sx={{
                        overflowY: 'auto',
                        width: '100%'
                    }}>
                        <CardContent>
                            <Box className="chat-bot-readme">
                                <Markdown
                                    components={{
                                        code: CodeBlock,
                                        table: TableBlock,
                                        hr: HrBlock,
                                        a: LinkBlock,
                                        ul: ListBlock,
                                        ol: OrderedListBlock,
                                        li: ListItemBlock,
                                        img: ImageBlock,
                                        video: VideoBlock,
                                        audio: AudioBlock,
                                        // Headings
                                        h1: HeadingBlock(1),
                                        h2: HeadingBlock(2),
                                        h3: HeadingBlock(3),
                                        h4: HeadingBlock(4),
                                        h5: HeadingBlock(5),
                                        h6: HeadingBlock(6),
                                        // Text
                                        p: ParagraphBlock,
                                        blockquote: QuoteBlock
                                    }}
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                                >{response}</Markdown>

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
                            </Box>
                        </CardContent>
                    </Box>}
                {(candidate === 'user') &&
                    <CardActionArea sx={{ cursor: 'initial', maxWidth: '320px', width: 'fit-content' }}>
                        <Card elevation={5} sx={{ p: 1.5, bgcolor: muiTheme.palette.primary[mode] }}>
                            <Typography noWrap={false} variant='caption'
                                sx={{
                                    whiteSpace: 'pre-wrap'
                                }}
                            >{response}</Typography>
                        </Card>
                    </CardActionArea>
                }
            </ListItem >
        )
    }

    return (
        <Stack component='form' onSubmit={handleSubmit(onHandleSubmit)} direction={'row'} sx={{ height: '100dvh', width: '100%' }}>
            <Collapse orientation='horizontal' in={!isMobile && collapse} unmountOnExit>
                <Sidebar />
            </Collapse>
            <Drawer anchor='left' onClose={handleDrawer} open={isMobile && mobileDrawer}>
                <Sidebar />
            </Drawer>
            <Stack sx={{ height: '100%', width: '100%' }}>
                <Header closeMobileDrawer={handleDrawer} closeDesktopDrawer={handleCollpase} />
                <Stack sx={{ overflowY: 'auto', flexGrow: 1, justifyContent: 'center' }}>
                    <Scrollbar sx={{
                        flexGrow: !messages.length ? 0 : 1, transition: 'flex .2s linear'
                    }}>
                        <Container maxWidth="md" sx={{
                            flexGrow: 1
                        }}>
                            {!messages.length ?
                                <Hero /> :
                                <List sx={{ display: 'flex', gap: 2, flexDirection: 'column', py: 2, height: '100%' }}>
                                    {messages.map((message, _) => {
                                        return <Conversation key={_} candidate={message.type} response={message.message} />
                                    })}
                                    <Box ref={messagesEndRef} />
                                </List>
                            }
                        </Container>
                    </Scrollbar>
                    <Container maxWidth="md" sx={{ position: 'sticky', bgcolor: 'background.default', left: 0, bottom: 0, zIndex: 99 }}>
                        <Box position={'relative'}>
                            <IconButton onClick={scrollToBottom} size='small' sx={{
                                position: 'absolute', right: 0, top: -50,
                                bgcolor: muiTheme.palette.primary[mode]
                            }}>
                                <ArrowDownwardRounded />
                            </IconButton>
                        </Box>
                        <Card elevation={0} sx={{ borderRadius: 3, boxShadow: `0px -16px 16px 0px ${muiTheme.palette.mode === 'dark' ? '#121212' : 'white'}, 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)` }}>
                            <CardContent sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 1,
                                '&:last-child': { // Targeting the last child
                                    paddingBottom: 1 // Remove bottom padding specifically
                                }
                            }}>
                                <Collapse in={Boolean(file)} orientation='vertical'>
                                    {file &&
                                        <Card sx={{ maxWidth: 'fit-content', height: 56, borderRadius: 2, display: 'flex', alignItems: 'center', bgcolor: muiTheme.palette.action.selected, position: 'relative' }}>
                                            <Box height={36} minWidth={36} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={2} overflow={'hidden'}>
                                                <DescriptionRoundedIcon color='success' />
                                            </Box>
                                            <Stack alignItems={'center'} direction={'row'} flexGrow={1} padding={1} pl={0}>
                                                <Box
                                                    flexGrow={1} display={'flex'} flexDirection={'column'}>
                                                    <Typography variant='caption' sx={{
                                                        display: "inline-block",   // or "block"
                                                        maxWidth: 100,             // 👈 adjust based on your layout
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                    }}>{file.filename}</Typography>
                                                    <Typography variant='caption'>{file.size_formatted}</Typography>
                                                </Box>
                                                <Box onClick={() => reset({
                                                    file: undefined
                                                })}>
                                                    <CancelRoundedIcon fontSize='small' color='error' sx={{ cursor: 'pointer', mt: 1 }} />
                                                </Box>
                                            </Stack>

                                        </Card>
                                    }
                                </Collapse>
                                <Box>
                                    <Controller
                                        name="t"
                                        control={control}
                                        rules={{
                                            validate: value => {
                                                const trimmedValue = value?.trim();
                                                return trimmedValue && trimmedValue !== 'Ask anything.' || 'Ask Something!';
                                            }
                                        }}
                                        render={() => (
                                            <Box
                                                component="div"
                                                ref={contentRef}
                                                contentEditable
                                                onInput={handleInput}
                                                onFocus={handleFocus}
                                                sx={{
                                                    padding: '12px',
                                                    borderRadius: 1,
                                                    minHeight: 48,
                                                    maxHeight: 150,
                                                    outline: 'none',
                                                    overflow: 'auto',
                                                    whiteSpace: 'pre-wrap',
                                                }}
                                                suppressContentEditableWarning
                                            >
                                                Ask anything.
                                            </Box>
                                        )}
                                    />
                                    <Stack direction='row' alignItems={'center'} justifyContent={'space-between'}>
                                        <ButtonGroup>
                                            <Upload setValue={setValue} />
                                        </ButtonGroup>

                                        <Box>{(t === '' && !isLoading) ? <IconButton color='primary'>
                                            <AudioLines />
                                        </IconButton> :
                                            <IconButton
                                                sx={{ borderRadius }}

                                                type='submit'
                                                disabled={isLoading}
                                            >
                                                {isLoading ? (
                                                    <StopCircleRoundedIcon color='action' />
                                                ) : (
                                                    <ArrowUp />
                                                )}
                                            </IconButton>}</Box>
                                    </Stack>
                                </Box>
                            </CardContent>
                        </Card>
                        <Box sx={{ textAlign: 'center', bgcolor: 'background.paper' }}>
                            <Typography variant='caption' color='text.secondary' >Gemini can make mistakes. Read the policies</Typography>
                        </Box>
                    </Container>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default React.memo(AppLayout);
