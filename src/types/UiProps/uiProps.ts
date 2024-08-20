type alertProps =
    {
        type: 'success' | 'error' | 'info' | 'warning' | undefined,
        message: string,
        state: boolean
    }

type uiProps = {
    dark: boolean,
    borderRadius:number,
    fontFamily:string,
    enableCookie:boolean
}

export type { uiProps,alertProps }