import { alpha, Box, ButtonGroup, CardContent, Chip, Collapse, Container, IconButton, Stack, Theme, Tooltip, Typography, useTheme } from "@mui/material"
import Card from "../ui/Card";
import ArrowUp from '../../assets/icons/arrow-up';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Upload from "../Upload";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useRef, useState } from "react";
import { BotSubmitType } from "../../types/app-types";
import { sendMessageStream } from "../../features/chatbot/chatbotApi";
import File from "../../assets/icons/file";
import Cancel from "../../assets/icons/circle-x";
import StyledCard from "../ui/Card";
import LanguageIcon from '@mui/icons-material/Language';
import ScienceIcon from '@mui/icons-material/Science';

import StopRoundedIcon from '@mui/icons-material/StopRounded';
const Prompt = () => {
    const [webSearch, setWebsearch] = useState(true)
    const [reSearch, setResearch] = useState(true)
    const dispatch: AppDispatch = useDispatch();
    const muiTheme = useTheme();
    // const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    const contentRef = useRef<HTMLDivElement>(null);
    const { isLoading } = useSelector((state: RootState) => state.chat);
    const { handleSubmit, control, watch, setValue, reset } = useForm<BotSubmitType>({
        defaultValues: {
            t: '',
            file: undefined
        }
    })
    const handleInput = () => {
        const text = contentRef.current?.textContent || '';
        setValue('t', text, { shouldValidate: true });
    };
    const handleFocus = () => {
        if (contentRef.current?.textContent === 'Ask anything.') {
            contentRef.current.textContent = '';
        }
    };
    const onHandleSubmit: SubmitHandler<BotSubmitType> = async (data) => {
        try {
            console.log(data);
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

    const file = watch('file');
    return <Container component='form' onSubmit={handleSubmit(onHandleSubmit)} maxWidth="md" sx={{
        position: 'sticky', bottom: 10
    }}>
        <Card sx={{
            boxShadow: `0px -16px 16px 0px ${muiTheme.palette.mode === 'dark' ? '#121212' : 'white'}, 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)`
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 1,
                '&:last-child': { // Targeting the last child
                    paddingBottom: 1 // Remove bottom padding specifically
                },
                boxShadow: `inset 
                0px 16px 16px 0px ${muiTheme.palette.mode === 'dark' ? '#292929ff' : 'white'},
                0px 0px 0px 0px rgb(0 0 0 / 0%),
                0px 0px 0px 0px rgb(0 0 0 / 0%)`
            }}>
                <Collapse in={Boolean(file)} orientation='vertical'>
                    {file &&
                        <StyledCard sx={{ maxWidth: '200px', height: 50, display: 'flex', alignItems: 'center',borderRadius:"12px", position: 'relative', px: 1, gap: 1 }}>
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
                                    padding: '12px 16px',
                                    color: "text.disabled",
                                    minHeight: 48,
                                    maxHeight: 350,
                                    outline: 'none',
                                    whiteSpace: 'pre-wrap',
                                    overflowY: "auto",
                                    overflowX: 'hidden',
                                    scrollbarColor:
                                        muiTheme.palette.mode === "dark"
                                            ? `${muiTheme.palette.grey[900]} ${muiTheme.palette.background.default}`
                                            : `${muiTheme.palette.grey[400]} ${muiTheme.palette.background.default}`,
                                    scrollbarWidth: "thin"
                                }}
                                suppressContentEditableWarning
                            >
                                Ask anything.
                            </Box>
                        )}
                    />
                    <Stack direction='row' alignItems={'flex-end'} justifyContent={'space-between'}>
                        <ButtonGroup sx={{ gap: 2 }}>
                            <Tooltip title="Think before responding to solve the resoning problems">

                                <Chip onClick={() => setResearch((prev) => !prev)} color={reSearch ? "primary" : "default"} icon={<ScienceIcon fontSize="small" />} clickable variant="outlined" label="Research" />
                            </Tooltip>
                            <Tooltip title="Search in web when necessary">

                                <Chip onClick={() => setWebsearch((prev) => !prev)} color={webSearch ? "primary" : "default"} icon={<LanguageIcon fontSize="small" />} clickable variant="outlined" label="Search" />
                            </Tooltip>

                        </ButtonGroup>
                        <ButtonGroup>
                            <Upload setValue={setValue} />
                            <IconButton
                                type='submit'
                                disabled={isLoading}
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
                                {isLoading ? (
                                    <StopRoundedIcon color="inherit" fontSize="inherit" />
                                ) : (
                                    <ArrowUp color="inherit" fontSize='inherit' />
                                )}
                            </IconButton>
                        </ButtonGroup>
                    </Stack>
                </Box>
            </CardContent>
        </Card>

    </Container >
}
export default Prompt;