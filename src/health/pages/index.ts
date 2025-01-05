import React from 'react';

const HealthHome = React.lazy(() => import('./HealthHome'));
const HealthPayment = React.lazy(() => import('./HealthPayment'));
const HealthProposal = React.lazy(() => import('./HealthProposal'));
const HealthQuotes = React.lazy(() => import('./HealthQuotes'));

export { HealthHome, HealthPayment, HealthProposal, HealthQuotes }