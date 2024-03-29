import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './security/AuthContext'

import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodosComponent from "./ListTodosComponent";
import LoginComponent from "./LoginComponent";
import TodoComponent from "./TodoComponent"
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

                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                        } />

                        <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoComponent />
                            </AuthenticatedRoute>
                        } />

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}












