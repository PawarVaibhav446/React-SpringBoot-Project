import React from "react";
import { useState, createContext, useContext } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    function login(username, password) {
        if (username === "Vaibhav" && password === "dummy") {
            setAuthenticated(true);
            setUsername(username)
            return true;
        } else {
            setAuthenticated(false);
            setUsername(null)
            return false;
        }
    }
    function logout() {
        setAuthenticated(false);
    }

    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username}}>
            {children}
        </AuthContext.Provider>
    );
}
