type alertProps =
    {
        type: 'success' | 'error' | 'info' | 'warning' | undefined,
        message: string,
        state: boolean
    }

type uiProps = {
    dark: boolean,
    borderRadius: number,
    fontFamily: string,
    cookieConsent: boolean,
    customizePalleteOpen: boolean,
    customerEditProfile: boolean,
    isMobile: boolean,
    isDesktop: boolean,
    productsCompare: Number[],
    otpModal: boolean,
    addEmployeeModal: boolean
}

export type { uiProps, alertProps }