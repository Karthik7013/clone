import { CardMedia } from "@mui/material"
import { MarkdownComponentProps } from "../../types/app-types"

export const AudioBlock = (props: MarkdownComponentProps) => {
    return <CardMedia component='audio' {...props}></CardMedia>
}