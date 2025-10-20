// actions/chatActions.js or inside your slice
import { createSlice } from '@reduxjs/toolkit';


type Message = {
    type: 'user' | 'assistant', message: string
};

export const sampleMarkdown = `
# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

This is a **bold** word, this is *italic*, and this is a [link to OpenAI](https://openai.com).

---

\`\`\`mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Success]
    B -->|No| D[Failure]
    C --> E[End]
    D --> E
\`\`\`
\`\`\`mermaid
flowchart TD
    A[Start Here] --> B{Is it working?}
    B -->|Yes| C[🎉 Success!]
    B -->|No| D[🔧 Debug]
    C --> E[🏁 Finish]
    D --> F[Research Solution]
    F --> B

    style A fill:#50fa7b,color:#000,stroke:#000
    style C fill:#50fa7b,color:#000,stroke:#000
    style D fill:#ff5555,color:#000,stroke:#000
    style E fill:#bd93f9,color:#000,stroke:#000
\`\`\`
\`\`\`mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as API
    participant D as Database

    U->>F: Click Login
    F->>A: POST /login
    A->>D: Query user credentials
    D-->>A: Return user data
    A-->>F: JWT Token
    F-->>U: Redirect to Dashboard

    Note over U,A: Authentication Process
    Note right of D: Encrypted passwords

\`\`\`
\`\`\`mermaid
classDiagram
    class Vehicle {
        +String make
        +String model
        +int year
        +startEngine()
        +stopEngine()
    }

    class Car {
        +int doors
        +String fuelType
        +openTrunk()
    }

    class Motorcycle {
        +String type
        +boolean hasSidecar
        +doWheelie()
    }

    class ElectricCar {
        +int batteryCapacity
        +int range
        +chargeBattery()
    }

    Vehicle <|-- Car
    Vehicle <|-- Motorcycle
    Car <|-- ElectricCar

\`\`\`
\`\`\`mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing : Start Event
    Processing --> Success : Operation Complete
    Processing --> Error : Operation Failed
    Success --> Idle : Reset
    Error --> Idle : Reset
    Error --> Processing : Retry

    state Processing {
        [*] --> Initializing
        Initializing --> Working : Data Loaded
        Working --> Validating : Process Complete
        Validating --> [*] : Validation Done
    }
\`\`\`
\`\`\`mermaid
erDiagram
    CUSTOMER {
        string customer_id PK
        string first_name
        string last_name
        string email
        date created_at
    }

    ORDER {
        string order_id PK
        string customer_id FK
        decimal total_amount
        string status
        date order_date
    }

    PRODUCT {
        string product_id PK
        string name
        decimal price
        int stock_quantity
    }

    ORDER_ITEM {
        string order_id FK
        string product_id FK
        int quantity
        decimal unit_price
    }

    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ ORDER_ITEM : contains
    PRODUCT ||--o{ ORDER_ITEM : included_in

\`\`\`
\`\`\`mermaid
pie title Programming Language Usage 2024
    "JavaScript" : 35.6
    "Python" : 28.3
    "Java" : 15.2
    "C#" : 9.8
    "Other" : 11.1
\`\`\`
\`\`\`mermaid
gantt
    title Project Development Timeline
    dateFormat YYYY-MM-DD
    axisFormat %b %d

    section Planning
    Requirements Gathering :done, req1, 2024-01-01, 7d
    Technical Design :active, design, after req1, 10d

    section Development
    Frontend Development :dev1, after design, 15d
    Backend Development :dev2, after design, 20d
    Database Setup :dev3, after design, 7d

    section Testing
    Unit Testing :test1, after dev1, 7d
    Integration Testing :test2, after dev2, 10d
    User Acceptance :test3, after test2, 5d
\`\`\`
\`\`\`mermaid
journey
    title User Shopping Journey
    section Discover
      Visit Website: 5: User
      Browse Products: 4: User
      Search Items: 3: User
    section Consider
      Read Reviews: 4: User
      Compare Prices: 3: User
      Add to Cart: 5: User
    section Convert
      Checkout: 5: User
      Make Payment: 5: User
      Receive Confirmation: 4: User
\`\`\`
\`\`\`mermaid
gitGraph
    commit id: "Initial"
    commit id: "Feature A"
    branch feature-b
    checkout feature-b
    commit id: "Feature B Start"
    commit id: "Feature B Progress"
    checkout main
    commit id: "Hotfix"
    checkout feature-b
    commit id: "Feature B Complete"
    checkout main
    merge feature-b id: "Merge Feature B"
    commit id: "Release v1.0"
\`\`\`
\`\`\`mermaid

mindmap
  root((Web Development))
    Frontend
      Frameworks
        React
        Vue
        Angular
      Styling
        CSS
        Sass
        Tailwind
    Backend
      Languages
        JavaScript
        Python
        Java
      Databases
        MongoDB
        PostgreSQL
        MySQL
    DevOps
      CI/CD
        GitHub Actions
        Jenkins
      Containers
        Docker
        Kubernetes

\`\`\`
\`\`\`mermaid
timeline
    title Web Evolution Timeline
    1990s : HTML Invention
           : First Websites
           : CSS Introduction
    2000s : Web 2.0
           : AJAX Revolution
           : Mobile Web
    2010s : Responsive Design
           : Single Page Apps
           : Progressive Web Apps
    2020s : Web3 & Blockchain
           : AI Integration
           : Metaverse
\`\`\`

\`\`\`mermaid
C4Context
    title System Context diagram for Internet Banking System

    Person(customer, "Banking Customer", "A customer of the bank with online access")
System(banking_system, "Internet Banking System", "Allows customers to view account information and make payments")

System_Ext(mainframe, "Mainframe Banking System", "Stores customer and account information")
System_Ext(email_system, "E-mail System", "Sends transaction notifications")

Rel(customer, banking_system, "Uses")
Rel(banking_system, mainframe, "Gets account information from")
Rel(banking_system, email_system, "Sends e-mails using")
\`\`\`





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
> this is blockquote
> sub blockquote
---



<audio controls src="https://assets.mixkit.co/active_storage/sfx/2290/2290-preview.mp3"></audio>

Block code:

### Code Examples

Inline code: \`const x = 42;\`



---
Here’s a horizontal rule above ☝️ and below 👇
---

Final paragraph with a mix of **bold**, *italic*, [link](https://example.com), and inline \`code\`.
`;
type Conversation = {
    title: string,
    id: string
}

type initialProps = {
    messages: Message[],
    thinking: boolean,
    conversation: Conversation | undefined,
    isStreaming: boolean,
    isLoading: boolean,
    error: null | Error
}
const initialState: initialProps = {
    error: null,
    isLoading: false,
    isStreaming: false,
    thinking: false,
    messages: [],
    conversation: undefined
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action: { payload: { type: 'user' | 'assistant', message: string } }) => {
            const { payload } = action;
            state.messages.push(payload)
        },


        streamStart: (state) => {
            state.isStreaming = true;
        },
        streamChunk: (state, action: { payload: string }) => {
            const { payload } = action;
            console.log(payload, '=')
            const lastMsg = state.messages[state.messages.length - 1];
            if (lastMsg && lastMsg.type === 'assistant') {
                lastMsg.message += payload;
            } else {
                state.messages.push({ type: 'assistant', message: payload });
            }
        },
        streamComplete: (state) => {
            state.isStreaming = false;
        },


        streamError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        clearStreamError: (state) => {
            state.error = null;
        },
        newChat: (state, action: { payload: Conversation }) => {
            state.conversation = action.payload
        },
        setLoading: (state, action: { payload: boolean }) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
});

export const {
    newChat,
    addMessage,
    streamStart,
    streamChunk,
    streamComplete,
    streamError,
    clearStreamError,
    // titleSetter,
    // setThink,
    setLoading,
    setError
} = chatSlice.actions;

export default chatSlice.reducer;