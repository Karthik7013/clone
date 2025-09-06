import { CardMedia, useTheme } from "@mui/material";
import { MarkdownComponentProps } from "../../types/app-types";

export const VideoBlock = (props: MarkdownComponentProps) => {
    const muiTheme = useTheme();
    return (
        <CardMedia
            component="video"
            sx={{ borderRadius: muiTheme.shape.borderRadius, my: 2, objectFit: "contain" }}
            {...props}
        />
    )
};