import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodosComponent from "./ListTodosComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider from "./security/AuthContext";

import "./TodoApp.css";

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/welcome/:username" element={<WelcomeComponent />} />
                        <Route path="*" element={<ErrorComponent />} />
                        <Route path='/logout' element={<LogoutComponent />} />
                        <Route path="/todos" element={<ListTodosComponent />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}












