import React, { useState } from "react";
import { MarkdownComponentProps } from "../../types/app-types";
import { Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";

import Typography from "../../components/ui/Typography"
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import Copy from "../../assets/icons/copy";
import Download from "../../assets/icons/download";
import Checked from "../../assets/icons/checked";

type customButtonProps = {
    icon?: React.ReactNode;
    children?: React.ReactNode,
    onClick?: () => void
}
const CustomButton = (props: customButtonProps) => {
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    if (isMobile) return <IconButton color="inherit" size="small" {...props}>{props?.icon}</IconButton>
    return <Button color="inherit" size="small" startIcon={props?.icon} {...props}>
        {
            props?.children
        }
    </Button>
}
export const CodeBlock = ({ inline, className, children, ...props }: MarkdownComponentProps) => {
    const muiTheme = useTheme();
    const mode = muiTheme.palette.mode;
    const borderRadius = muiTheme.shape.borderRadius;
    const [copied, setCopied] = useState(false);
    const code = React.Children.toArray(children)
        .map((child) => typeof child === 'string' ? child : '')

    // Extract language (null-safe)
    const match = /language-(\w+)/.exec(className || "");
    const language = match?.[1] ?? "text";

    const handleCopy = () => {
        console.log(code);
        // navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    if (language === 'text' && !inline) return <code style={{
        backgroundColor: muiTheme.palette.primary[mode], padding: '0.2em 0.5em', borderRadius: '4px',

    }} className={className} {...props}>{children}</code>

    return <Box sx={{
        borderRadius,
        // overflow: 'hidden'
    }}>
        <Box
            sx={{
                bgcolor: mode === 'dark' ? muiTheme.palette.grey[900] : muiTheme.palette.grey[300],
                position: 'sticky',
                top: 0,
                justifyContent: 'space-between',
                display: 'flex',
                padding: '0.5em 1em',
            }}>
            <Typography sx={{
                color: muiTheme.palette.text.disabled
            }} as='span'>{language}</Typography>
            <Box>
                <CustomButton onClick={handleCopy} icon={copied ?
                    <Checked fontSize="small" /> : <Copy fontSize="small" />} children={copied ? "Copied!" : "Copy"} />
                <CustomButton icon={<Download fontSize="small" />} children="Download" />

                {language === 'html' &&
                    <CustomButton icon={<PlayCircleRoundedIcon fontSize="small" />} children="Run" />}
            </Box>
        </Box>
        <code className={className} {...props}>{children}</code>
    </Box>
};