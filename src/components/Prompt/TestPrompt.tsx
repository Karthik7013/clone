import { alpha, Box, ButtonGroup, CardContent, Chip, CircularProgress, Collapse, Container, IconButton, Stack, Theme, Tooltip, Typography, useTheme } from "@mui/material"
import Card from "../ui/Card";
import ArrowUp from '../../assets/icons/arrow-up';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Upload from "../Upload";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useRef, useState } from "react";
import { FormSubmit } from "../../types/app-types";
// import { sendMessageStream } from "../../features/chatbot/chatbotApi";
import File from "../../assets/icons/file";
import Cancel from "../../assets/icons/circle-x";
import StyledCard from "../ui/Card";
import LanguageIcon from '@mui/icons-material/Language';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import Brain from "../../assets/icons/brain";
import ScrollContainer from "../Scrollbar/Scrollbar";
import { createChat } from "../../features/chatbot/chatbotApi";

const Prompt = () => {
    const [webSearch, setWebsearch] = useState(false)
    const [reSearch, setResearch] = useState(false)
    const dispatch: AppDispatch = useDispatch();
    const muiTheme = useTheme();
    const { messages, conversation } = useSelector((state: RootState) => state.chat);
    // const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    const contentRef = useRef<HTMLDivElement>(null);
    const { isLoading, isStreaming } = useSelector((state: RootState) => state.chat);


    const { handleSubmit, control, watch, setValue, reset } = useForm<FormSubmit>({
        defaultValues: {
            chat_id: undefined,
            context: "",
            model: "default",
            query: "",
            temp: false,
            think: false,
            web_search: false,
            file: undefined
        }
    })
    const handleInput = () => {
        const text = contentRef.current?.textContent || '';
        setValue('query', text, { shouldValidate: true });
    };
    const handleFocus = () => {
        if (contentRef.current?.textContent === 'Ask anything.') {
            contentRef.current.textContent = '';
        }
    };
    const onHandleSubmit: SubmitHandler<FormSubmit> = async (data) => {
        try {
            if (contentRef.current) {
                contentRef.current.textContent = '';
            }
            setValue('query', '', { shouldValidate: false });
            setValue('file', undefined, { shouldValidate: false });
            setValue('chat_id', conversation?.id);
            const mockedData = { ...data, chat_id: conversation?.id }
            dispatch(createChat(mockedData));
        } catch (err) {
            console.log(err)
        }
    };

    const file = watch('file');
    const query = watch('query');
    return <Container maxWidth="md" component='form' onSubmit={handleSubmit(onHandleSubmit)} sx={{
        position: 'sticky',
        display: 'flex',
        flexDirection: "column",
        bottom: 0,
        
    }}>
        <Card sx={{
            border: `1.5px solid ${muiTheme.palette.divider}`,
            borderRadius: "1.6em",
            boxShadow: !messages.length ? `0px 0px 80px ${alpha(muiTheme.palette.primary.dark, 0.2)}` : `0px -16px 16px 0px ${muiTheme.palette.mode === 'dark' ? '#121212' : 'white'}, 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)`
        }}>
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
                        <StyledCard sx={{ maxWidth: '200px', height: 50, display: 'flex', alignItems: 'center', borderRadius: "12px", position: 'relative', px: 1, gap: 1 }}>
                            <Box
                                bgcolor={muiTheme.palette.primary[muiTheme.palette.mode]}
                                height={36} minWidth={36} display={'flex'} justifyContent={'center'} alignItems={'center'}
                                borderRadius={'12px'}
                                overflow={'hidden'}>
                                <File fontSize="small" />
                            </Box>
                            <Stack alignItems={'center'} direction={'row'} flexGrow={1} padding={1} pl={0} gap={1}>
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
                                    <Cancel fontSize='small' color='error' sx={{ cursor: 'pointer', mt: 1 }} />
                                </Box>
                            </Stack>

                        </StyledCard>
                    }
                </Collapse>
                <Stack>
                    <Controller
                        name="query"
                        control={control}
                        rules={{
                            validate: value => {
                                const trimmedValue = value?.trim();
                                return trimmedValue && trimmedValue !== 'Ask anything.' || 'Ask Something!';
                            }
                        }}
                        render={() => (
                            <ScrollContainer
                                component="div"
                                ref={contentRef}
                                contentEditable
                                onInput={handleInput}
                                onFocus={handleFocus}
                                sx={{
                                    padding: '1em',
                                    color: "text.disabled",
                                    minHeight: 48,
                                    maxHeight: 350,
                                    outline: 'none',
                                    whiteSpace: 'pre-wrap',
                                    overflowY: "auto",
                                    overflowX: 'hidden',
                                    scrollbarWidth: 'think'
                                }}
                                suppressContentEditableWarning
                            >
                                Ask anything.
                            </ScrollContainer>
                        )}
                    />
                    <Stack direction='row' alignItems={'flex-end'} justifyContent={'space-between'}>
                        <ButtonGroup sx={{ gap: 1 }}>
                            <Tooltip title="Think before responding to solve the resoning problems">
                                <Chip onClick={() => setResearch((prev) => !prev)} color={reSearch ? "primary" : "default"} icon={<Brain sx={{
                                    margin: "0 -6px 0 4px"
                                }} fontSize="small" />} clickable variant="outlined" label="DeepThink" />
                            </Tooltip>
                            <Tooltip title="Search in web when necessary">
                                <Chip onClick={() => setWebsearch((prev) => !prev)} color={webSearch ? "primary" : "default"} icon={<LanguageIcon fontSize="small" />} clickable variant="outlined" label="Search" />
                            </Tooltip>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Upload setValue={setValue} />
                            <IconButton
                                type='submit'
                                disabled={isLoading || query === ''}
                                sx={{
                                    color: (theme: Theme) => theme.palette.common['white'],
                                    background: (theme: Theme) => theme.palette.primary[theme.palette.mode],
                                    '&.Mui-disabled': {
                                        background: (theme: Theme) => alpha(theme.palette.primary[theme.palette.mode], 0.7),
                                        color: (theme: Theme) => alpha(theme.palette.common.white, 0.7)
                                    },
                                    '&: hover': {
                                        backgroundColor: (theme: Theme) => theme.palette.primary[theme.palette.mode]
                                    }
                                }}
                            >
                                {isLoading && (
                                    <CircularProgress color={'inherit'} size={24} />
                                )}
                                {isStreaming && (
                                    <StopRoundedIcon color="inherit" fontSize="inherit" />
                                )}
                                {(!isStreaming && !isLoading) &&
                                    < ArrowUp color="inherit" fontSize='inherit' />
                                }
                            </IconButton>
                        </ButtonGroup>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
        {Boolean(messages.length) && <Typography textAlign={'center'} sx={{
            fontSize: '0.7em',
            fontWeight: 300,
            my: '4px'

        }} color={'text.secondary'}>Ai generated, for reference only.</Typography>}
    </Container >
}
export default Prompt;