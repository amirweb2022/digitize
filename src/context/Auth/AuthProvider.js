import { useContext, useState, createContext, useEffect } from "react";

export const AuthProviderContext = createContext();
export const AuthProviderContextDispatcher = createContext();

const LOCAL_STORAGE_AUTH_KEY = "authState";

function AuthProvider({ children }) {
    const [state, setState] = useState(false);
    
    useEffect(() => {
        const userData =
            JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
        setState(userData);
    }, []);

    return (
        <AuthProviderContext.Provider value={state}>
            <AuthProviderContextDispatcher.Provider value={setState}>
                {children}
            </AuthProviderContextDispatcher.Provider>
        </AuthProviderContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthActions = () => useContext(AuthProviderContextDispatcher);