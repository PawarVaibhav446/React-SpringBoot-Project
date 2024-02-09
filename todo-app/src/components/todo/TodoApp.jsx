import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider, { useAuth } from './security/AuthContext'

import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodosComponent from "./ListTodosComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider from "./security/AuthContext";

import "./TodoApp.css";

export default function TodoApp() {

    function AuthenticatedRoute({ children }) {
        const authContext = useAuth()

        if (authContext.isAuthenticated)
            return children

        return <Navigate to="/" />
    }

    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponent />} />

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        } />

                        <Route path="*" element={<ErrorComponent />} />
                        
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />

                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                        } />
                        
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}












