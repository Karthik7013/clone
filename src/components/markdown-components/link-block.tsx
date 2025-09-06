import { MarkdownComponentProps } from "../../types/app-types";
import { Link as MuiLink } from "@mui/material";
export const LinkBlock = (props: MarkdownComponentProps) => (
    <MuiLink target="_blank" rel="noopener noreferrer" {...props} />
);