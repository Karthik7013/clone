import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom';

//============ MUI IMPORTS ==============>
import { CssBaseline, LinearProgress } from '@mui/material';

//============ PROJECT IMPORTS ==============>

const App = () => {
    return (
        <>
            <CssBaseline />
            <React.Suspense fallback={"...loading"} >
                {/* <RouterProvider future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true
                } as any
                } router={allRouter()} /> */}
            </React.Suspense>
        </>
    )
}

export default App;
