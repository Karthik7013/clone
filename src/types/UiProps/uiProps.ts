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
    customerEditProfile:boolean,
    counter:number
}

export type { uiProps, alertProps }