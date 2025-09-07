import React, { useState } from "react";
import { MarkdownComponentProps } from "../../types/app-types";
import { Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";

import Typography from "../../components/ui/Typography"
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import Copy from "../../assets/icons/copy";
import Download from "../../assets/icons/download";
import Checked from "../../assets/icons/checked";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { setPreviewContent, toggleCollapse, togglePreviewMode } from "../../features/ui/uiSlice";

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
    const dispatch: AppDispatch = useDispatch();
    const muiTheme = useTheme();
    const mode = muiTheme.palette.mode;
    const borderRadius = muiTheme.shape.borderRadius;
    const [copied, setCopied] = useState(false);
    const openPreview = () => {
        dispatch(togglePreviewMode(true)) // open preview slider
        dispatch(toggleCollapse(false)); // close the sidedrawer
        dispatch(setPreviewContent());
        const content = extractTextFromNode(children);
        dispatch(setPreviewContent(content));
    }


    // Extract language (null-safe)
    const match = /language-(\w+)/.exec(className || "");
    const language = match?.[1] ?? "text";

    const extractTextFromNode = (node: React.ReactNode): string => {
        if (typeof node === 'string') return node;
        if (typeof node === 'number') return String(node);
        if (Array.isArray(node)) return node.map(extractTextFromNode).join('');

        if (React.isValidElement(node)) {
            return extractTextFromNode(node.props.children);
        }

        return '';
    };

    const handleCopy = () => {
        const codeToCopy = extractTextFromNode(children);
        navigator.clipboard.writeText(codeToCopy);
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
                    <CustomButton onClick={openPreview} icon={<PlayCircleRoundedIcon fontSize="small" />} children="Run" />}
            </Box>
        </Box>
        <code className={className} {...props}>{children}</code>
    </Box>
};