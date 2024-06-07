import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Movies = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();

        const handleLogout = () => {
            logout();
        
        //localStorage.clear();
        console.log("Logged out :)!!!!");
    };

    return (
        <div>
            <h1>Movies</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};