import { useRef } from "react";
import { useUploadFileMutation } from "../../features/upload/uploadApi";
import { CircularProgress, Tooltip } from "@mui/material";
import IconButton from "../ui/IconButton"
import { file, FormSubmit } from "../../types/app-types";
import { UseFormSetValue } from "react-hook-form";
import AttachFile from "../../assets/icons/attach";
// import { streamError } from "../../features/chatbot/chatbotSlice";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../store/store";

// Maximum file size (5MB in bytes)
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const Upload = ({
    setValue
}: {
    // setValue: UseFormSetValue<BotSubmitType>
    setValue: UseFormSetValue<FormSubmit>
}) => {
    // const dispatch: AppDispatch = useDispatch();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation()
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const formData = new FormData();
            if (event.target.files?.length) {
                if (event.target.files[0].size > MAX_FILE_SIZE) {
                    alert('file too big !')
                    // dispatch(streamError(new Error('File size must be under 10MB.')))
                    return
                }
                formData.append('image', event.target.files[0]);
            } else {
                return
                // throw error no file selected
            }
            const { data } = await uploadFile(formData).unwrap();
            const file: file = {
                filename: data?.filename,
                size_formatted: data?.size_formatted,
                url: data?.url,
                thumb_url: data?.thumb?.url,
                delete_url: data?.delete_url
            };
            setValue('file', file);
        } catch (err) {
            // dispatch(streamError(new Error('Failed to upload')))
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
        <Tooltip title="Upload docs or images (max 10mb each)">
            <IconButton disabled={isUploading} onClick={handleChangeFile}>
                {isUploading ? <CircularProgress size={20} /> : <AttachFile fontSize="inherit" />}
            </IconButton>
        </Tooltip>
        <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
        />
    </>
}
export default Upload;