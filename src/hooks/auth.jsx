/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});


function AuthProvider({ children }) { 
    const [data, setData] = useState({});

    async function signIn({ email, password }) {        
        try {
            const response = await api.post("/sessions", { email, password });
            const { token, user } = response.data;

            localStorage.setItem("@login:user", JSON.stringify(user));
            localStorage.setItem("@login:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ token, user });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar.");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@login:token, token");
        localStorage.removeItem("@login:token, user");

        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@login:token, token");
        const user = localStorage.getItem("@login:token, user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    
    return (
        <AuthContext.Provider value={{ 
            signIn,
            signOut,
            user: data.user,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
