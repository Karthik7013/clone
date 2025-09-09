import { Auth0Provider } from '@auth0/auth0-react';
export default function AuthProvider(props: {
    children: React.ReactNode
}) {
    return <Auth0Provider
        domain={import.meta.env.VITE_DOMAIN}
        clientId={import.meta.env.VITE_CLIENT_ID}
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        {
            props.children
        }
    </Auth0Provider>
}