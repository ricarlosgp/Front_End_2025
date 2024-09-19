import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from '../pages/auth.routes';

export function Routes() {
    return (
        <BrowserRouter>
            <AppRoutes />
            <AuthRoutes/>
        </BrowserRouter>
    )
}