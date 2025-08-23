type conversationProps = {
    candidate: 'user' | 'bot',
    response: string,
    timeStamp: string
}
export default function Conversation(props: conversationProps) {
    console.log(props);

    return <></>
}
