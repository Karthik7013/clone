import { ComponentPropsWithoutRef } from "react";

interface user {
    first_name: string,
    last_name: string,
    psw_hash: string,
    email: string,
    user_id: string
}

interface conversation {
    user_id: string,
    conversation_id: string,
    title: string,
    created_at: Date,
    updated_at: Date
}

interface message {
    message_id: string,
    conversation_id: string,
    role: 'user' | 'assistant',
    message: string,
    created_at: Date
}
type MarkdownComponentProps = ComponentPropsWithoutRef<"code"> & {
    inline?: boolean;
};


type file = {
    filename: string,
    size_formatted: string,
    url: string,
    thumb_url: string,
    delete_url: string
}

interface BotSubmitType {
    t: string,
    file?: file | undefined
}

export type {
    conversation,
    message,
    user,
    MarkdownComponentProps,
    BotSubmitType,
    file
}
