import { lazy } from "react";

const VehicleHome = lazy(() => import('./VehicleHome'));
const VehiclePayment = lazy(() => import('./VehiclePayment'));
const VehicleProposal = lazy(() => import('./VehicleProposal'))
const VehicleQuotes = lazy(() => import('./VehicleQuotes'));

export { VehicleHome, VehiclePayment, VehicleProposal, VehicleQuotes }