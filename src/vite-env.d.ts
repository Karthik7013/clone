/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CLERK_PUBLISHABLE_KEY: string;
    readonly VITE_API_URL: string;
    readonly VITE_BASE_URL: string;
    readonly VITE_CLIENT_ID: string;
    readonly VITE_DOMAIN: string;
    // Add any other environment variables here
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}