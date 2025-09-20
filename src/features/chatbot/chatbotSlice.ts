// actions/chatActions.js or inside your slice
import { createSlice } from '@reduxjs/toolkit';


type Message = {
    type: 'user' | 'assistant', message: string
};

export const sampleMarkdown = `
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
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Secure Access</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 400px;
        }

        .login-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            overflow: hidden;
            transition: transform 0.3s ease;
        }

        .login-card:hover {
            transform: translateY(-5px);
        }

        .header {
            background: linear-gradient(to right, #6e8efb, #a777e3);
            color: white;
            text-align: center;
            padding: 30px 20px;
        }

        .header h1 {
            font-weight: 600;
            font-size: 28px;
            margin-bottom: 10px;
        }

        .header p {
            opacity: 0.9;
        }

        .login-form {
            padding: 30px;
        }

        .input-group {
            margin-bottom: 20px;
            position: relative;
        }

        .input-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #333;
        }

        .input-group input {
            width: 100%;
            padding: 14px 15px 14px 45px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 16px;
            transition: all 0.3s;
        }

        .input-group input:focus {
            border-color: #6e8efb;
            outline: none;
            box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
        }

        .input-group i {
            position: absolute;
            left: 15px;
            top: 42px;
            color: #a777e3;
            font-size: 18px;
        }

        .options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
        }

        .remember {
            display: flex;
            align-items: center;
        }

        .remember input {
            margin-right: 8px;
            width: 16px;
            height: 16px;
        }

        .forgot-password {
            color: #6e8efb;
            text-decoration: none;
            font-weight: 500;
        }

        .forgot-password:hover {
            text-decoration: underline;
        }

        .login-button {
            width: 100%;
            padding: 14px;
            background: linear-gradient(to right, #6e8efb, #a777e3);
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }

        .login-button:hover {
            background: linear-gradient(to right, #5d7df0, #9666d8);
            box-shadow: 0 4px 12px rgba(110, 142, 251, 0.4);
        }

        .divider {
            text-align: center;
            margin: 25px 0;
            position: relative;
        }

        .divider::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            height: 1px;
            background: #ddd;
        }

        .divider span {
            background: white;
            position: relative;
            padding: 0 15px;
            color: #777;
        }

        .social-login {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 25px;
        }

        .social-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            text-decoration: none;
            transition: all 0.3s;
        }

        .facebook {
            background: #3b5998;
        }

        .google {
            background: #dd4b39;
        }

        .twitter {
            background: #1da1f2;
        }

        .social-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }

        .signup {
            text-align: center;
            margin-top: 20px;
            color: #555;
        }

        .signup a {
            color: #6e8efb;
            text-decoration: none;
            font-weight: 500;
        }

        .signup a:hover {
            text-decoration: underline;
        }

        @media (max-width: 480px) {
            .login-card {
                border-radius: 12px;
            }

            .header {
                padding: 25px 15px;
            }

            .login-form {
                padding: 25px 20px;
            }

            .options {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="login-card">
            <div class="header">
                <h1>Welcome Back</h1>
                <p>Sign in to access your account</p>
            </div>

            <form class="login-form">
                <div class="input-group">
                    <label for="email">Email Address</label>
                    <i class="fas fa-envelope"></i>
                    <input type="email" id="email" placeholder="Enter your email" required>
                </div>

                <div class="input-group">
                    <label for="password">Password</label>
                    <i class="fas fa-lock"></i>
                    <input type="password" id="password" placeholder="Enter your password" required>
                </div>

                <div class="options">
                    <div class="remember">
                        <input type="checkbox" id="remember">
                        <label for="remember">Remember me</label>
                    </div>
                    <a href="#" class="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" class="login-button">Sign In</button>

                <div class="divider">
                    <span>Or continue with</span>
                </div>

                <div class="social-login">
                    <a href="#" class="social-btn facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social-btn google">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="#" class="social-btn twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>

                <div class="signup">
                    Don't have an account? <a href="#">Sign up</a>
                </div>
            </form>
        </div>
    </div>
</body>
</html>

\`\`\`


---
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Secure Access</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

</head>
<body>
 <section class="py-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-16">
    <div class="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">

        <div class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 id="pricing"
                class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
            </h2>
            <p class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
            </p>
        </div>


        <div id="pricing"
            class="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            <!-- Price 1 -->
            <div
                class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3
                    class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Starter
                </h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        $1
                    </p>
                    <p class="box-border m-0 border-solid" style="border-image: initial;">
                        / month
                    </p>
                </div>
                <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        1 Website
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SSL (HTTPS)
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SiteFast Domain
                    </li>

                </ul>
                <a href="#"
                    class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                    Start Now
                </a>
            </div>
            <!-- Price 2 -->
            <div
                class="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
                <h3
                    class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Basic
                </h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        $29
                    </p>
                    <p class="box-border m-0 border-solid" style="border-image: initial;">
                        / month
                    </p>
                </div>
                <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        15 Websites
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SSL (HTTPS)
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Custom Domain
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SiteFast Branding Removal
                    </li>
                </ul>

                <a href="#"
                    class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                    Start Now
                </a>
            </div>
            <!-- Price 3 -->
            <div
                class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3
                    class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Plus
                </h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        $49
                    </p>
                    <p class="box-border m-0 border-solid" style="border-image: initial;">
                        / month
                    </p>
                </div>

                <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        50 Websites
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SSL (HTTPS)
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Custom Domain
                    </li>


                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SiteFast Branding Removal
                    </li>


                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Google Analytics
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Email Integration
                    </li>

                </ul>
                <a href="#"
                    class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                    Start Now
                </a>
            </div>
        </div>
    </div>
</section>
</body>
</html>

\`\`\`

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
type Conversation = {
    title: string,
    id: string
}

type initialProps = {
    messages: Message[],
    thinking: boolean,
    conversation: Conversation
    isLoading: boolean,
    error: null | Error
}
const initialState: initialProps = {
    error: null,
    isLoading: false,
    thinking: false,
    messages: [{
        type: "assistant",
        message:sampleMarkdown
    }],
    conversation: {
        title: 'New chat',
        id: 'abd-efg-hij-klm'
    }
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
        clearStreamError: (state) => {
            state.error = null;
        },
        newChat: (state) => {
            state.messages = [];
        },
        titleSetter: (state, action: { payload: string }) => {
            state.conversation.title = action.payload
        },
        setThink: (state, action: { payload: boolean }) => {
            state.thinking = action.payload
        }
    },
});

export const {
    addMessage,
    startStreaming,
    streamChunk,
    streamComplete,
    streamError,
    newChat,
    clearStreamError,
    titleSetter,
    setThink
} = chatSlice.actions;

export default chatSlice.reducer;