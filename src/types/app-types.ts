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


interface FormSubmit {
    query: string,
    file?: file | undefined,
    temp: boolean,
    think: boolean,
    web_search: boolean,
    model: string,
    context: string
    chat_id: string | undefined
}

export type {
    conversation,
    message,
    user,
    MarkdownComponentProps,
    FormSubmit,
    BotSubmitType,
    file
}
