import { Box, Paper, Table, useTheme } from "@mui/material";
import { MarkdownComponentProps } from "../../types/app-types";

export const TableBlock = ({ children, ...props }: MarkdownComponentProps) => {
    const muiTheme = useTheme();
    return (
        <Box sx={{ overflowX: "auto", my: 2 }}>
            <Table
                elevation={1}
                component={Paper}
                {...props}
                sx={{
                    borderCollapse: "collapse",
                    width: "100%",
                    overflow: 'hidden',
                    borderRadius: '0.5em',
                    border: `1px solid ${muiTheme.palette.divider}`,
                    "& th, & td": {
                        border: `1px solid ${muiTheme.palette.divider}`,
                        padding: "8px",
                        textAlign: "left",
                    },
                    "& th": {
                        backgroundColor: muiTheme.palette.divider
                    },
                }}
            >
                {children}
            </Table>
        </Box>
    );
};