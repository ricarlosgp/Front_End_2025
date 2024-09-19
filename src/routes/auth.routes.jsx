import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';


export function AuthRoutes() {
    retunr (
        <Routes>
            <Route path="/" SignIn = {<SignIn />} />
            <Route path="/register" element = {<SignUp />} /> 
        </Routes>
    )
}