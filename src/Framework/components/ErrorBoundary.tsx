import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { ErrorInfo } from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
    fallback: React.ReactNode
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

const ErrorComponent = () => {
    return <Dialog open={true} maxWidth="lg">
        <DialogTitle>Oops ! Something Went Wrong</DialogTitle>
        <DialogContent>
            <Typography>We encountered a error while trying to load. Try again</Typography>
        </DialogContent>
        <Button fullwidth variant='contained'>Home</Button>
    </Dialog>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            fallback: null
        };
    }

    // Catch errors in any child components
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
        // Update state so the next render will show the fallback UI
        return { hasError: true, error };
    }

    // This method is called when an error is caught
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // You can log the error to an error reporting service here
        console.error('Error caught by Error Boundary:', error, errorInfo);
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorComponent />
        }

        // If no error, render the children as usual
        return this.props.children;
    }
}

export default ErrorBoundary;
