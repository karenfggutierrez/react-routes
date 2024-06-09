import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Movies = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();

    //User and password are still saved while logged in
    console.log(localStorage);

        const handleLogout = () => {
            logout();
        
        localStorage.clear();
        console.log("Logged out :)!!!!");
        //Localstorage is clear
        console.log(localStorage)
    };

    return (
        <div>
            <h1>Movies</h1>
            <NavLink to="/about" >About</NavLink>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};