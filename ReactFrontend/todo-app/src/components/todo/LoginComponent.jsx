import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "./security/AuthContext";


export default function LoginComponent() {
    const [username, setUsername] = useState("Vaibhav");

    const [password, setPassword] = useState();

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Welcome To Login Page</h1>
            {showSuccessMessage && (
                <div className="successMessage">Authenticated Successfull</div>
            )}
            {showErrorMessage && (
                <div className="errorMessage">
                    Authentication Failed. Check Your Credentials!!
                </div>
            )}

            <div className="LoginForm">
                <div>
                    <label for="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter Username"
                    />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter Password"
                    />
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}