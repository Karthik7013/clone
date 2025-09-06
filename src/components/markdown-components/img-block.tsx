import { CardMedia } from "@mui/material";
import { MarkdownComponentProps } from "../../types/app-types";

export const ImageBlock = (props: MarkdownComponentProps) => {
    return (
        <CardMedia
            component="img"
            sx={{ borderRadius: 2, my: 2, maxHeight: 400, objectFit: "contain" }}
            {...props}
        />
    )
};