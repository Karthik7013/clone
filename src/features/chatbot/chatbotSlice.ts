// actions/chatActions.js or inside your slice
import { createSlice } from '@reduxjs/toolkit';


type Message = { type: 'user' | 'assistant', message: string };

const sampleMarkdown = `
# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

This is a **bold** word, this is *italic*, and this is a [link to OpenAI](https://openai.com).

---

Here’s an image:

![Sample Image](https://placekitten.com/400/200)

---

### Unordered List
- First item
- Second item
  - Nested item
- Third item

### Ordered List
1. First ordered
2. Second ordered
   1. Nested ordered
3. Third ordered

---

### Table Example
| Name   | Age | Role      |
|--------|-----|-----------|
| Alice  | 25  | Developer |
| Bob    | 30  | Designer  |
| Charlie| 35  | Manager   |

---

### Code Examples

Inline code: \`const x = 42;\`

Block code:

\`\`\`ts
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
console.log(greet("World"));
\`\`\`

---

Here’s a horizontal rule above ☝️ and below 👇

---

Final paragraph with a mix of **bold**, *italic*, [link](https://example.com), and inline \`code\`.
`;


type initialProps = {
    messages: Message[],
    isLoading: boolean,
    error: null | Error
}
const initialState: initialProps = {
    error: null,
    isLoading: false,
    messages: []
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action: { payload: { type: 'user' | 'assistant', message: string } }) => {
            const { payload } = action;
            state.messages.push(payload)
        },
        startStreaming: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        streamChunk: (state, action: { payload: string }) => {
            const { payload } = action;
            const lastMsg = state.messages[state.messages.length - 1];
            if (lastMsg && lastMsg.type === 'assistant') {
                lastMsg.message += payload;
            } else {
                state.messages.push({ type: 'assistant', message: payload });
            }
        },
        streamComplete: (state) => {
            state.isLoading = false;
        },
        streamError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        newChat: (state) => {
            state.messages = [];
        }
    },
});

export const {
    addMessage,
    startStreaming,
    streamChunk,
    streamComplete,
    streamError,
    newChat
} = chatSlice.actions;

export default chatSlice.reducer;