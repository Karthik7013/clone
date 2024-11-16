import { Button, CardMedia, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { ErrorInfo } from 'react';
import Working from "../../assets/workingonit.svg";

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

const ErrorComponent = ({ onRetry }: { onRetry: () => void }) => {
    return (
        <Dialog open={true} maxWidth="lg">
            <DialogTitle>
                <CardMedia
                    component="img"
                    height="194"
                    image={Working}
                    alt="Working"
                />
            </DialogTitle>
            <DialogContent>
                <Typography variant="h6">Oops! Something Went Wrong</Typography>
                <Typography>We encountered an error while trying to load. Try again.</Typography>
                <Button fullWidth variant="contained" onClick={onRetry}>
                    Try Again
                </Button>
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
            return (
                <ErrorComponent onRetry={this.handleRetry} />
            );
        }

        // If no error, render the children as usual
        return this.props.children;
    }
}

export default ErrorBoundary;
