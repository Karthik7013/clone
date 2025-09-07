import { Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { toggleCollapse, togglePreviewMode } from "../../features/ui/uiSlice";
import Cancel from "../../assets/icons/circle-x";


const sample = `



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
`

const PreviewMode = () => {
    const dispatch: AppDispatch = useDispatch();
    const previewContent = useSelector((state: RootState) => state.ui.previewContent)
    const closePreview = () => {
        dispatch(toggleCollapse(true))
        dispatch(togglePreviewMode(false));
    }
    const iframeRef = useRef<HTMLIFrameElement>(null);
    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

            if (!iframeDoc) {
                console.error('Cannot access iframe document');
                return;
            }

            iframeDoc.open();
            iframeDoc.write(previewContent ? previewContent : sample);
            iframeDoc.close();
        } catch (error) {
            console.error('Error writing to iframe:', error);
        }
    }, [previewContent]);

    return <Stack sx={{ height: '100%', minWidth: 400 }}>
        <Toolbar>
            <Typography variant="subtitle2">Login | Sample login</Typography>
            <Box sx={{ flexGrow: 1 }}></Box>
            <IconButton onClick={closePreview}>
                <Cancel />
            </IconButton>
        </Toolbar>
        <iframe style={{
            border: 'none',
            flexGrow: 1
        }} ref={iframeRef} sandbox="allow-same-origin" />
    </Stack>
};

export default PreviewMode;