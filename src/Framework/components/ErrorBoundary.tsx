import { Button, CardMedia, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { ErrorInfo } from 'react';
import Working from "../../assets/workingonit.svg";

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

interface ErrorBoundaryProps {
    fallback?: React.ReactNode; // Define the type for the fallback component
    children: React.ReactNode;
}

export const ErrorComponent = () => {
    return (
        <Dialog hideBackdrop open={true} maxWidth="sm">
            <DialogTitle>
                <CardMedia
                    component="img"
                    width={'20%'}
                    image={Working}
                    alt="Working"
                />
            </DialogTitle>
            <DialogContent>
                <Typography color='error.dark' variant="subtitle2">Oops! Something Went Wrong</Typography>
                <Typography>We encountered an error while trying to load. Try again.</Typography>
            </DialogContent>
        </Dialog>
    );
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    // Catch errors in any child components
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
        return { hasError: true, error };
    }

    // This method is called when an error is caught
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log the error details, for example to a service
        console.error('Error caught by Error Boundary:', error, errorInfo);
        this.setState({ error, errorInfo });
    }

    // Retry the operation or refresh the component tree
    handleRetry = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        // If no error, render the children as usual
        return this.props.children;
    }
}

export default ErrorBoundary;
