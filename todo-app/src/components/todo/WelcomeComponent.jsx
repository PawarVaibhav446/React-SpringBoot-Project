import React from "react";
import {Link, useParams} from "react-router-dom";

export default function WelcomeComponent() {
    const params = useParams();
    return (
        <div className="welcome">
            <h1>Welcome {params.username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
        </div>
    );
}