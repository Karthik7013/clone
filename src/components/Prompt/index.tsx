import { Box, ButtonGroup, CardContent, Chip, Collapse, Container, IconButton, Stack, Typography, useTheme } from "@mui/material"
import Card from "../ui/Card";
import ArrowUp from '../../assets/icons/arrow-up';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Upload from "../Upload";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useRef } from "react";
import { BotSubmitType } from "../../types/app-types";
import { sendMessageStream } from "../../features/chatbot/chatbotApi";
import File from "../../assets/icons/file";
import Cancel from "../../assets/icons/circle-x";
import StopCircle from "../../assets/icons/stop-circle";
import StyledCard from "../ui/Card";
import LanguageIcon from '@mui/icons-material/Language';
import ScienceIcon from '@mui/icons-material/Science';
const Prompt = () => {
    const dispatch: AppDispatch = useDispatch();
    const muiTheme = useTheme();
    // const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    const contentRef = useRef<HTMLDivElement>(null);
    const borderRadius = useSelector((state: RootState) => state.themeReducer.borderRadius);
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
            borderRadius: muiTheme.shape.borderRadius,
            boxShadow: `0px -16px 16px 0px ${muiTheme.palette.mode === 'dark' ? '#121212' : 'white'}, 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)`
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
                        <StyledCard sx={{ maxWidth: 'fit-content', height: 50, borderRadius: 2, display: 'flex', alignItems: 'center', bgcolor: muiTheme.palette.action.selected, position: 'relative', px: 1.7, gap: 2 }}>
                            <Box
                                bgcolor={muiTheme.palette.primary[muiTheme.palette.mode]}
                                height={36} minWidth={36} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={2} overflow={'hidden'}>
                                <File fontSize="small" />
                            </Box>
                            <Stack alignItems={'center'} direction={'row'} flexGrow={1} padding={1} pl={0} gap={5}>
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
                                    borderRadius,
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
                    <Stack direction='row' alignItems={'center'} justifyContent={'space-between'}>
                        <ButtonGroup sx={{ gap: 2 }}>

                            <Chip color="primary" icon={<LanguageIcon fontSize="small" />} clickable variant="outlined" label="Search" />
                            <Chip color="primary" icon={<ScienceIcon fontSize="small" />} clickable variant="outlined" label="Research" />
                        </ButtonGroup>
                        <ButtonGroup>
                            <Upload setValue={setValue} />
                            <IconButton
                                sx={{ borderRadius }}
                                type='submit'
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <StopCircle fontSize='inherit' />
                                ) : (
                                    <ArrowUp fontSize='inherit' />
                                )}
                            </IconButton>
                        </ButtonGroup>
                    </Stack>
                </Box>
            </CardContent>
        </Card>

    </Container>
}
export default Prompt;