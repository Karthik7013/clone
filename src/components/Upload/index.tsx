import { useRef, useState } from "react";
import { useUploadFileMutation } from "../../features/upload/uploadApi";
import { CircularProgress, IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Upload = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation()
    const [file, setFile] = useState<File | null>(null)

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
    return <TextField
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
}
export default Upload;