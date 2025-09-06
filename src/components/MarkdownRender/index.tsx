type props = {
    children: string
}

import { componentMap } from "../markdown-components/components-map";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import Markdown from 'react-markdown';
import { useEffect } from "react";
import { useTheme } from "@mui/material";
export default function ReactMarkdown(props: props) {
    const muiTheme = useTheme();
    useEffect(() => {
        // Remove old theme if exists
        const existingLink = document.getElementById("hljs-theme") as HTMLLinkElement;
        if (existingLink) {
            existingLink.remove();
        }

        // Create new theme link
        const link = document.createElement("link");
        link.id = "hljs-theme";
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href =
            muiTheme.palette.mode === "dark"
                ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tomorrow-night-bright.min.css"
                : "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css";
        document.head.appendChild(link);
    }, [muiTheme.palette.mode]);
    return <Markdown
        components={componentMap}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
    >{props.children}</Markdown>
}