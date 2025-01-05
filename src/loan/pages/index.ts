import React from "react"

const LoanLandingPage = React.lazy(() => import('./LoanLandingPage'));
const LoanQuotesPage = React.lazy(() => import('./LoanQuotesPage'));
const FailedPage = React.lazy(() => import('./FailedPage'));
const ThankYouPage = React.lazy(() => import('./ThankYouPage'));
const LoanPaymentPage = React.lazy(() => import('./LoanPaymentPage'));

export { LoanLandingPage, LoanPaymentPage, LoanQuotesPage, FailedPage, ThankYouPage }