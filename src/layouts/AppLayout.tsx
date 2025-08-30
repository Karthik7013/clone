import { sendMessageStream } from '../features/chatbot/chatbotApi';
import React, { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import { Alert, Box, CardActionArea, CardContent, Collapse, Container, List, ListItem, Snackbar, Stack, useMediaQuery, useTheme } from '@mui/material';
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

import { AppDispatch, RootState } from '../store/store';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import Markdown from 'react-markdown';
import Upload from '../components/Upload';
import Header from '../components/Header';
import Scrollbar from '../components/Scrollbar/Scrollbar';
import Hero from '../components/Hero';

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
    const dispatch: AppDispatch = useDispatch();
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
    const contentRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const borderRadius = useSelector((state: RootState) => state.themeReducer.borderRadius)
    const { handleSubmit, control, watch, setValue, reset } = useForm<BotSubmitType>({
        defaultValues: {
            t: '',
            file: undefined
        }
    })
    const { messages, isLoading, error } = useSelector((state: RootState) => state.chat);


    const file = watch('file');
    const t = watch('t');


    const onHandleSubmit: SubmitHandler<BotSubmitType> = async (data) => {
        try {
            if (contentRef.current) {
                contentRef.current.textContent = '';
            }
            setValue('t', '', { shouldValidate: false });
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
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
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
            .map((child) => (typeof child === "string" ? child : ""))
            .join("")
            .replace(/\n$/, "");

        // Extract language (null-safe)
        const match = /language-(\w+)/.exec(className || "");
        const language = match?.[1] ?? "text";

        const handleCopy = () => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        };
        if (language === 'text' && !inline) return <code style={{
            backgroundColor: muiTheme.palette.divider, padding: '0.2em 0.5em', borderRadius: '4px'
        }} className={className} {...props}>{children}</code>

        return <div className={`code-block-wrapper ${className}`} >
            <div className="code-block-header"
                style={{
                    backgroundColor: muiTheme.palette.divider
                }}>
                <Typography sx={{
                    color: muiTheme.palette.text.disabled
                }} as='span'>{language}</Typography>
                <Box>
                    <Button onClick={handleCopy} startIcon={copied ? <CheckRoundedIcon /> : <ContentCopyRoundedIcon />} size='small'>{copied ? "Copied!" : "Copy"}</Button>
                    <Button startIcon={<FileDownloadRoundedIcon />} size='small'>Download</Button>
                </Box>
            </div>
            <code className={className} {...props}>{children}</code>
        </div>
    };



    const Conversation = ({ candidate, response }: { candidate: 'user' | 'assistant', response: string }) => {
        return (
            <ListItem sx={{
                display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'
                , padding: isMobile ? 0 : "initial"
            }}>
                {!(candidate === 'user') &&
                    <Box sx={{
                        borderRadius, overflowY: 'auto',
                        width: '100%'
                    }}>
                        <CardContent>

                            <Box className="chat-bot-readme">
                                <Markdown
                                    components={{
                                        code: CodeBlock
                                    }}
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                                >{response}</Markdown>
                            </Box>
                        </CardContent>
                    </Box>}
                {(candidate === 'user') &&

                    <CardActionArea sx={{ cursor: 'initial', maxWidth: '320px', width: 'fit-content' }}>
                        <Card elevation={0} sx={{ p: 1.5 }}>
                            <Typography noWrap={false} variant='body2'
                                sx={{
                                    whiteSpace: 'pre-wrap', // This preserves line breaks
                                    wordWrap: 'break-word'
                                }}
                            >{response}</Typography>
                        </Card>
                    </CardActionArea>
                }
            </ListItem>
        )
    }


    return (
        <Scrollbar
            component='form' onSubmit={handleSubmit(onHandleSubmit)} sx={{ height: '100dvh', position: 'relative', overflowY: 'auto', display: 'flex', flexDirection: "column" }}>
            <Header />
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <Snackbar sx={{ position: 'absolute' }} open={Boolean(error)}
                    // onClose={handleClose}
                    autoHideDuration={2000} anchorOrigin={{
                        horizontal: 'center',
                        vertical: 'top'
                    }}>
                    <Alert action={
                        <Button size="small"
                            // onClick={handleClose}
                            color="inherit">
                            Close
                        </Button>
                    } severity='error' variant='filled' sx={{ maxWidth: 'fit-content', margin: 'auto', borderRadius: '1em' }}>{error?.message}</Alert>
                </Snackbar>
            </Box>
            <Container maxWidth="md" sx={{
                flexGrow: 1
            }}>
                {/* <List sx={{ display: 'flex', gap: 2, flexDirection: 'column', py: 2 }}>
                    {
                        messages.map((message, index) => {
                            return <div key={index}>
                                <strong>{message.type}:</strong> {message.message}
                            </div>
                        })
                    }
                    <Box ref={messagesEndRef} />
                </List> */}
                {!messages.length ?
                    <Hero /> :
                    <List sx={{ display: 'flex', gap: 2, flexDirection: 'column', py: 2 }}>
                        {messages.map((message, _) => {
                            return <Conversation key={_} candidate={message.type} response={message.message} />
                        })}
                        <Box ref={messagesEndRef} />
                    </List>}
            </Container>
            {/* <Container maxWidth="md" sx={{ position: 'sticky', left: 0, bottom: 0, zIndex: 99 }}>
                <Card elevation={0} sx={{ borderRadius: 5, boxShadow: `0px -16px 16px 0px ${muiTheme.palette.mode === 'dark' ? '#121212' : 'white'}, 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)` }}>
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 1,
                        '&:last-child': { // Targeting the last child
                            paddingBottom: 1 // Remove bottom padding specifically
                        }
                    }}>
                        <Collapse in={Boolean(file)} orientation='vertical'>
                            {file && <Card sx={{ maxWidth: 'fit-content', mb: 2, bgcolor: 'divider', height: 56, borderRadius: 3, display: 'flex', alignItems: 'center', boxSizing: 'border-box', position: 'relative' }}>
                                <Box height={56} minWidth={56} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={2} overflow={'hidden'}>

                                    {file.thumb_url ? <img width={'100%'} height={'100%'} src={file.thumb_url} alt={':('} />
                                        : <DescriptionRoundedIcon />}
                                </Box>
                                <Stack direction={'row'} gap={1} flexGrow={1} padding={1}>
                                    <Box
                                        flexGrow={1} display={'flex'} flexDirection={'column'}>
                                        <Typography sx={{
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

                            </Card>}
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
                                            maxHeight: 300,
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
                            <Stack direction='row' alignItems={'center'} gap={1}>
                                <Box>
                                    <Upload setValue={setValue} />
                                </Box>
                                <Box flexGrow={1}>

                                </Box>
                                <Box>

                                    <IconButton
                                        sx={{ borderRadius }}

                                        type='submit'
                                    >
                                        <ArrowUp />
                                    </IconButton>
                                </Box>
                            </Stack>
                        </Box>
                    </CardContent>
                </Card>
                <Box sx={{ textAlign: 'center', bgcolor: 'background.paper' }}>
                    <Typography variant='caption' color='text.secondary' >Gemini can make mistakes.read the policies</Typography>
                </Box>
            </Container> */}



            <Container maxWidth="md" sx={{ position: 'sticky', left: 0, bottom: 0, zIndex: 99 }}>
                <Card elevation={0} sx={{ borderRadius: 5, boxShadow: `0px -16px 16px 0px ${muiTheme.palette.mode === 'dark' ? '#121212' : 'white'}, 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)` }}>
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 1,
                        '&:last-child': { // Targeting the last child
                            paddingBottom: 1 // Remove bottom padding specifically
                        }
                    }}>
                        <Collapse in={Boolean(file)} orientation='vertical'>
                            {file && <Card sx={{ maxWidth: 'fit-content', mb: 2, bgcolor: 'divider', height: 56, borderRadius: 3, display: 'flex', alignItems: 'center', boxSizing: 'border-box', position: 'relative' }}>
                                <Box height={56} minWidth={56} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={2} overflow={'hidden'}>

                                    {file.thumb_url ? <img width={'100%'} height={'100%'} src={file.thumb_url} alt={':('} />
                                        : <DescriptionRoundedIcon />}
                                </Box>
                                <Stack direction={'row'} gap={1} flexGrow={1} padding={1}>
                                    <Box
                                        flexGrow={1} display={'flex'} flexDirection={'column'}>
                                        <Typography sx={{
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

                            </Card>}
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
                                            maxHeight: 300,
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
                            <Stack direction='row' alignItems={'center'} gap={1}>
                                <Box>
                                    <Upload setValue={setValue} />
                                </Box>
                                <Box flexGrow={1}>

                                </Box>
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
                    <Typography variant='caption' color='text.secondary' >Gemini can make mistakes.read the policies</Typography>
                </Box>
            </Container>
        </Scrollbar>
    )
}

export default React.memo(AppLayout);
