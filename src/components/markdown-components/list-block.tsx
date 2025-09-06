import { List, ListItem } from "@mui/material";
import { MarkdownComponentProps } from "../../types/app-types";
export const OrderedListBlock = (props: MarkdownComponentProps) => (
    <List dense disablePadding
        component="ol"
        sx={{
            listStyleType: "decimal",
            pl: 0,
            "& li": { display: "list-item" },
            paddingLeft: '1.25rem',
            paddingBottom: '0.75rem'
        }}
        {...props}
    />
);
export const ListBlock = (props: MarkdownComponentProps) => (
    <List dense disablePadding
        sx={{
            listStyleType: "disc",
            pl: 0,
            "& li": { display: "list-item" },
            paddingLeft: '1.25rem',
            paddingBottom: '0.75rem'
        }}
        {...props}
    />
);
export const ListItemBlock = (props: MarkdownComponentProps) => <ListItem {...props} />;