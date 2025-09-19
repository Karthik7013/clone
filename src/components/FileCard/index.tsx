import { Box, Stack, Typography, useTheme } from "@mui/material";
import File from "../../assets/icons/file";
import Cancel from "../../assets/icons/circle-x";
import StyledCard from "../ui/Card";

type FileProps = {
    filename: string,
    size_formatted: string,
    handleClose?: () => void
}

const FileCard = (file: FileProps) => {
    const muiTheme = useTheme();
    return <StyledCard sx={{
        width: '100%', maxWidth: "180px", height: 50,
        bgcolor: muiTheme.palette.action.selected,
        borderRadius: 2,
        display: 'flex', alignItems: 'center', position: 'relative', px: 1.7, gap: 2
    }}>
        <Box
            bgcolor={muiTheme.palette.primary[muiTheme.palette.mode]}
            height={36}
            minWidth={36}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={2}
            overflow={'hidden'}>
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
            {file.handleClose && <Box onClick={file.handleClose}>
                <Cancel fontSize='small' color='error' sx={{ cursor: 'pointer', mt: 1 }} />
            </Box>}
        </Stack>

    </StyledCard>
}
export default FileCard;