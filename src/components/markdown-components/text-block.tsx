import { Box, Typography, TypographyProps, useTheme } from "@mui/material";
import { MarkdownComponentProps } from "../../types/app-types";

export const HeadingBlock = (level: number) => {
    const variantMap: Record<number, TypographyProps['variant']> = {
        1: "h4",
        2: "h5",
        3: "h6",
        4: "subtitle1",
        5: "subtitle2",
        6: "body1",
    };
    return (props: MarkdownComponentProps) => (
        <Typography gutterBottom variant={variantMap[level]} {...props} />
    );
};
export const ParagraphBlock = (props: MarkdownComponentProps) => (
    <Typography paragraph variant="body1" {...props} />
);

export const QuoteBlock = ({ children, ...props }: MarkdownComponentProps) => {
    const muiTheme = useTheme();
    const mode = muiTheme.palette.mode;
    return <Box sx={{
        borderLeft: `4px solid ${muiTheme.palette.primary[mode]}`,
        padding: '1rem',
        pb: 1,
        fontStyle: 'italic',
        margin: '1em 0'
    }
    } {...props}> {children}</Box >
}