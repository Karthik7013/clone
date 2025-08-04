import { Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import PageNotFound from "../components/PageNotFound";
import { Container } from "@mui/material";
import Chatbot from "../components/Chatbot";

const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<AppLayout />} />
        <Route path='/chat' element={
            <Container
                maxWidth={'md'}
                sx={{ height: '100dvh', padding: 0 }}>
                <Chatbot />
            </Container>
        } />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
}
export default AppRoutes;