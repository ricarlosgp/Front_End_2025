import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});


// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) { 
    const [data, setData] = useState({});

    async function signIn({ email, password }) {        
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
            localStorage.setItem("@login:user", JSON.stringify(user));
            localStorage.setItem("@login:token", token);

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token})


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
            api.defaults.headers.authorization = `Bearer ${token}`;

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

export { AuthProvider, useAuth };