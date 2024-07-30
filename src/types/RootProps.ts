import { vehicleProps } from "./VehicleProps/vehicleProps"
import { authProps } from "./AuthProps/AuthProps"
import { dashboardProps } from "./DashboardProps/dashboardProps"
import { healthProps } from "./HealthProps/healthProps"
import { loanProps } from "./LoanProps/LoanProps"
import { travelProps } from "./TravelProps/travelProps"
import { uiProps } from "./UiProps/uiProps"




type RootProps = {
    ui: uiProps,
    auth: authProps,
    loan: loanProps,
    travel: travelProps,
    vehicle: vehicleProps,
    health: healthProps,
    dashboard: dashboardProps
}

export type { RootProps }