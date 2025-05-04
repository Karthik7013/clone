import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
//============ MUI IMPORTS ==============>
import { CssBaseline } from '@mui/material';
//============ PROJECT IMPORTS ==============>
const App = () => {
    return (_jsxs(_Fragment, { children: [_jsx(CssBaseline, {}), _jsx(React.Suspense, { fallback: "...loading" })] }));
};
export default App;
