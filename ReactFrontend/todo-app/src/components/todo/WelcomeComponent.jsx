import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {retrieveHelloWorldPathVariable} from './api/HelloWorldApiService'

export default function WelcomeComponent() {

    const params = useParams();
    const [message, setMessage] = useState(null)

    function callHelloWorldRestAPI() {

        console.log("called");
        retrieveHelloWorldPathVariable('Vaibhav')
            .get('http://localhost:8080/hello-world')
            .then((response) => successfullResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log("clean"));
    }

    function successfullResponse(response) {
        console.log(response);
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error);
    }

    return (
        <div className="welcome">
            <h1>Welcome {params.username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestAPI}>
                    Hello World REST API
                </button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    );
}
