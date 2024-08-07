type alertProps =
    {
        type: 'success' | 'error' | 'info' | 'warning' | undefined,
        message: string,
        state: boolean
    }

type uiProps = {
    dark: boolean,
    borderRadius:number,
    fontFamily:string
}

export type { uiProps,alertProps }