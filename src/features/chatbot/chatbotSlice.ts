// actions/chatActions.js or inside your slice
import { createSlice } from '@reduxjs/toolkit';


type Message = { type: 'user' | 'assistant', message: string };

const sampleMarkdown = `
# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

This is a **bold** word, this is *italic*, and this is a [link to OpenAI](https://openai.com).

---
\`\`\`ts
import { useRef } from "react";
import { useUploadFileMutation } from "../../features/upload/uploadApi";
import { CircularProgress } from "@mui/material";
import IconButton from "../ui/IconButton"
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import { BotSubmitType, file } from "../../layouts/AppLayout";
import { UseFormSetValue } from "react-hook-form";
// Maximum file size (5MB in bytes)
const MAX_FILE_SIZE = 10 * 1024 * 1024;
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
                if (event.target.files[0].size > MAX_FILE_SIZE) {
                    alert('File size must be under 5MB.')
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
\`\`\`

---

Here’s an image:

![Sample Image](https://diplo-media.s3.eu-central-1.amazonaws.com/2025/06/que-es-perplexity-869880273.png)

---

### Unordered List
- First item
- Second item
  - Nested item
- Third item

### Ordered List
1. First ordered
2. Second ordered
   1. Nested ordered
3. Third ordered

---

### Table Example
| Name   | Age | Role      |
|--------|-----|-----------|
| Alice  | 25  | Developer |
| Bob    | 30  | Designer  |
| Charlie| 35  | Manager   |

---
> this is blockquote
> sub blockquote
---



<audio controls src="https://assets.mixkit.co/active_storage/sfx/2290/2290-preview.mp3"></audio>

Block code:

### Code Examples

Inline code: \`const x = 42;\`



---
Here’s a horizontal rule above ☝️ and below 👇
---

Final paragraph with a mix of **bold**, *italic*, [link](https://example.com), and inline \`code\`.
`;


type initialProps = {
    messages: Message[],
    isLoading: boolean,
    error: null | Error
}
const initialState: initialProps = {
    error: null,
    isLoading: false,
    messages: [{
        type: 'assistant',
        message: sampleMarkdown
    }]
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action: { payload: { type: 'user' | 'assistant', message: string } }) => {
            const { payload } = action;
            state.messages.push(payload)
        },
        startStreaming: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        streamChunk: (state, action: { payload: string }) => {
            const { payload } = action;
            const lastMsg = state.messages[state.messages.length - 1];
            if (lastMsg && lastMsg.type === 'assistant') {
                lastMsg.message += payload;
            } else {
                state.messages.push({ type: 'assistant', message: payload });
            }
        },
        streamComplete: (state) => {
            state.isLoading = false;
        },
        streamError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        newChat: (state) => {
            state.messages = [];
        }
    },
});

export const {
    addMessage,
    startStreaming,
    streamChunk,
    streamComplete,
    streamError,
    newChat
} = chatSlice.actions;

export default chatSlice.reducer;