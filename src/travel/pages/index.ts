import React from 'react';

const TravelHome = React.lazy(() => import('./TravelHome'));
const TravelPayment = React.lazy(() => import('./TravelPayment'))
const TravelProposalDetails = React.lazy(() => import('./TravelProposalDetails'))
const TravelQuotes = React.lazy(() => import('./TravelQuotes'))
export { TravelHome, TravelPayment, TravelProposalDetails, TravelQuotes }