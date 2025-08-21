import { useRef } from "react";
import { useUploadFileMutation } from "../../features/upload/uploadApi";
import { CircularProgress, IconButton } from "@mui/material";
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import { BotSubmitType, file } from "../Chatbot";
import { UseFormSetValue } from "react-hook-form";
const Upload = ({
    setValue
}: {
    setValue: UseFormSetValue<BotSubmitType>
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation()
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const formData = new FormData();
            if (event.target.files?.length) {
                formData.append('image', event.target.files[0]);
            } else {
                // throw error no file selected
            }
            const {
                delete_url,
                filename,
                size_formatted,
                thumb_url,
                url
            }: file = await uploadFile(formData).unwrap();
            const file = {
                delete_url,
                filename,
                size_formatted,
                thumb_url,
                url
            };
            setValue('file', file);
        } catch (err) {
            alert('Upload failed');
            console.error(err);
        } finally {
            if (fileInputRef.current?.value) {
                fileInputRef.current.value = '';
            }
        }
    }

    const handleChangeFile = () => {
        fileInputRef.current?.click();
    };

    return <>
        <IconButton disabled={isUploading} onClick={handleChangeFile}>
            {isUploading ? <CircularProgress size={20} /> : <AttachFileRoundedIcon />}
        </IconButton>
        <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
        />
    </>
}
export default Upload;