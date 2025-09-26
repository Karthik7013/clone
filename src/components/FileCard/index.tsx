import { Box, Stack, Typography, useTheme } from "@mui/material";
import File from "../../assets/icons/file";
import StyledCard from "../ui/Card";

type FileProps = {
    filename: string,
    size_formatted: string,
    handleClose?: () => void
}

const FileCard = (file: FileProps) => {
    const muiTheme = useTheme();
    return         <StyledCard sx={{ maxWidth: '200px', height: 50, display: 'flex', alignItems: 'center',borderRadius:"12px", position: 'relative', px: 1, gap: 1 }}>
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
                                    <Box >
                                       
                                    </Box>
                                </Stack>
    
                            </StyledCard>
    
    
    // <StyledCard sx={{
    //     width: '100%', maxWidth: "180px", height: 50,
    //     cursor: 'pointer',
    //     display: 'flex', alignItems: 'center', position: 'relative', px: 1, gap: 1
    // }}>
    //     <Box
    //         bgcolor={muiTheme.palette.primary[muiTheme.palette.mode]}
    //         height={36}
    //         minWidth={36}
    //         display={'flex'}
    //         justifyContent={'center'}
    //         alignItems={'center'}
    //         borderRadius={2}
    //         overflow={'hidden'}>
    //         <File fontSize="small" />
    //     </Box>
    //     <Stack alignItems={'center'} direction={'row'} flexGrow={1} padding={1} pl={0} gap={5}>
    //         <Box
    //             flexGrow={1} display={'flex'} flexDirection={'column'}>
    //             <Typography variant='caption' sx={{
    //                 display: "inline-block",   // or "block"
    //                 maxWidth: 100,             // 👈 adjust based on your layout
    //                 overflow: "hidden",
    //                 textOverflow: "ellipsis",
    //                 whiteSpace: "nowrap",
    //             }}>{file.filename}</Typography>
    //             <Typography variant='caption'>{file.size_formatted}</Typography>
    //         </Box>
    //         {file.handleClose && <Box onClick={file.handleClose}>
    //             <Cancel fontSize='small' color='error' sx={{ cursor: 'pointer', mt: 1 }} />
    //         </Box>}
    //     </Stack>

    // </StyledCard>
}
export default FileCard;