import React from "react";
const AlertBox = React.lazy(() => import('./AlertBox'));
const ChatBot = React.lazy(() => import('./ChatBot'));
const Header = React.lazy(() => import('./Header'));
const MessageBox = React.lazy(() => import('./MessageBox'));
const ProductSummary = React.lazy(() => import('./ProductSummary'))
const OtpModal = React.lazy(() => import('./OtpModal'));
const PageNotFound = React.lazy(() => import('./PageNotFound'));
const ProviderLogo = React.lazy(() => import('./ProviderLogo'));
const ErrorBoundary = React.lazy(() => import('./ErrorBoundary'));
const CompareQuotes = React.lazy(() => import('./CompareQuotes'));

export { AlertBox, ChatBot, ErrorBoundary, Header, MessageBox, OtpModal, PageNotFound, ProductSummary, ProviderLogo, CompareQuotes }