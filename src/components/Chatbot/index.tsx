import React, { useRef, useState } from 'react';
import chat_bot from "../../assets/images/gemini_ai_.svg";
import { Avatar, Box, Card, CardActions, CardContent, CircularProgress, Divider, IconButton, InputAdornment, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Skeleton, Stack, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import CircleIcon from '@mui/icons-material/Circle';
import { useSendMessageMutation } from '../../features/chatbot/chatbotApi';
import { pushMessage } from '../../features/chatbot/chatbotSlice';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import { useUploadFileMutation } from '../../features/upload/uploadApi';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Markdown from 'react-markdown';
type conversationProps = {
    candidate: 'user' | 'bot',
    response: string,
    timeStamp: string
}
interface BotSubmitType {
    t: string
}

const Chatbot = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation()
    const [file, setFile] = useState<File | null>(null)
    const borderRadius = useSelector((state: RootState) => state.themeReducer.borderRadius)
    const dispatch: AppDispatch = useDispatch()
    const { handleSubmit, control, reset } = useForm<BotSubmitType>({
        defaultValues: {
            t: ''
        }
    })
    const conversation = useSelector((state: RootState) => state.chatbotReducer.conversation);
    const [handleSendMessage, { isLoading }] = useSendMessageMutation();

    const onHandleSubmit: SubmitHandler<BotSubmitType> = async (data) => {
        dispatch(pushMessage({
            canditate: 'user',
            t: data.t
        }));
        reset();
        try {
            const result = await handleSendMessage(data).unwrap();
            dispatch(pushMessage({
                canditate: 'bot',
                t: result.data.response,
                timeStamp: result.data.timeStamp
            }));
        } catch (err) {
            console.log(err)
        }
    };



    const Conversation = ({ candidate, response }: conversationProps) => {

        return <ListItem alignItems="flex-start">
            <Stack direction='row' width='100%' gap={1} mb={2}>
                <Card sx={{
                    borderRadius, overflowY: 'auto', width: '100%',

                }}>
                    <CardContent>
                        <Box sx={{ display: 'inline-flex', position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress variant='indeterminate' />
                            {!(candidate === 'user') && <Avatar sx={{ width: '26px', height: '26px', position: 'absolute' }} src={chat_bot} alt="Remy Sharp" />}
                        </Box>
                        <Markdown>{response}</Markdown>
                    </CardContent>
                </Card>
            </Stack>
        </ListItem>
    }

    const ChatLoader = () => <ListItem alignItems="flex-start">
        <Card sx={{ padding: '10px', borderRadius: '10px', overflowY: 'auto', width: '100%' }}>
            {<Avatar sx={{ width: '26px', height: '26px' }} src={chat_bot} alt="Remy Sharp" />}
            <Box position='relative'>
                <Stack>
                    <Skeleton animation="wave" width={'25%'} />
                    <Skeleton animation="wave" width={'50%'} />
                    <Skeleton animation="wave" width={'70%'} />
                </Stack>
            </Box>
        </Card>

    </ListItem>


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {

            setFile(event.target.files[0]);
            console.log(event.target.files[0]);
        }
    }
    const handleUpload = async () => {
        if (!file) return alert("Please select a file.");
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await uploadFile(formData).unwrap();
            alert(`File uploaded: ${response}`);
            setFile(null);
        } catch (err) {
            alert('Upload failed');
            console.error(err);
        } finally {
            if (fileInputRef.current?.value) {
                fileInputRef.current.value = '';
            }
        }
    };

    return (
        <Stack height={"100%"} position={'relative'}>
            {/* header */}
            <Box position={'sticky'} top={0} left={0}>
                <CardContent>
                    <ListItem disableGutters disablePadding
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <OpenInNewRoundedIcon />
                            </IconButton>
                        }
                    >
                        <ListItemIcon>
                            <Avatar src={chat_bot} sx={{ width: '42px', height: '42px', mr: 2 }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={<Typography variant='body2'>Groot AI</Typography>}
                            secondary={<Typography variant='caption'><CircleIcon fontSize='inherit' sx={{ mr: 1 }} color='success' />Online</Typography>}
                        />
                    </ListItem>
                </CardContent>
                <Divider />
            </Box>
            {/* body */}
            <Box flexGrow={1} overflow={'auto'} sx={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
            }}>
                {!conversation.length && <Box height={'100%'} display='flex' alignItems='center' flexDirection='column' justifyContent='space-between'>
                    <Stack gap={2} justifyContent={'center'} width={'100%'} flexGrow={1} >
                        <Typography variant='h4' fontWeight={600} textAlign='center'>Hi sara<br /> how can i help you today ?</Typography>
                        <Typography variant='caption' fontWeight={600} textAlign='center'>caption</Typography>
                    </Stack>
                    <Toolbar sx={{ justifyItems: 'flex-start', gap: 2, flexWrap: 'wrap' }}>
                    </Toolbar>
                </Box>}


                <List disablePadding>
                    {conversation.map((content, _) => {
                        return <Conversation key={_} candidate={content.candidate} response={content.response} timeStamp={content.timeStamp} />
                    })}
                    {isLoading && <ChatLoader />}
                </List>
            </Box>
            {/* footer */}
            <Box position={'sticky'} bottom={0} left={0} component='form' onSubmit={handleSubmit(onHandleSubmit)}>
                <Box component={Card} sx={{ borderRadius }}>
                    <CardContent>
                        <CardActions sx={{ position: 'sticky', bottom: 0, zIndex: 9999 }}>
                            {/* <Avatar src='https://avatar.iran.liara.run/public' sx={{ width: '32px', height: '32px' }} /> */}
                            <Controller
                                name="t"
                                control={control}
                                rules={{ required: 'Ask Something !' }}
                                render={({ field }) => (
                                    <TextField
                                        sx={{
                                            flex: 1,
                                            '& .MuiInputBase-root': {
                                                border: 'none',
                                            },
                                            '& .MuiInput-root:before, & .MuiInput-root:after': {
                                                display: 'none', // removes default underline from 'standard' variant
                                            },
                                        }}
                                        placeholder='Ask anything'
                                        multiline
                                        size='small'
                                        maxRows={4}
                                        variant="standard"
                                        value={field.value}
                                        onChange={field.onChange}
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        inputRef={field.ref}
                                    />
                                )}
                            />
                        </CardActions>
                        <Stack direction={'row'}>
                            <Box sx={{ position: 'relative' }}>
                                <IconButton
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <AddCircleOutlineRoundedIcon />
                                </IconButton>
                                <Menu
                                    anchorOrigin={{
                                        horizontal: 'right',
                                        vertical: 'top'
                                    }}
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <InsertDriveFileRoundedIcon fontSize='small' sx={{ mr: 1 }} />
                                        Files
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </Box>
                            <Box flexGrow={1} />
                            <IconButton>
                                <MicRoundedIcon />
                            </IconButton>
                            <IconButton
                                disableRipple
                                disableTouchRipple
                                disableFocusRipple
                                type='submit'
                                disabled={isLoading}
                                color='default'
                            >
                                {isLoading ? (
                                    <StopCircleRoundedIcon color='action' />
                                ) : (
                                    <AutoAwesomeRoundedIcon color='warning' />
                                )}
                            </IconButton>
                        </Stack>
                        <TextField
                            inputRef={fileInputRef}
                            onChange={handleFileChange}
                            type='file'
                            InputProps={{
                                readOnly: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {isUploading ? (
                                            <CircularProgress size={24} />
                                        ) :
                                            <Tooltip title="Upload">
                                                <IconButton
                                                    onClick={handleUpload}
                                                    disabled={!file}
                                                    edge="end"
                                                >
                                                    <CloudUploadIcon />
                                                </IconButton>
                                            </Tooltip>}
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </CardContent>
                </Box>
            </Box>
        </Stack >
    )
}

export default React.memo(Chatbot);