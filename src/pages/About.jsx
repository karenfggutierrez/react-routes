import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const About = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
      logout();

      localStorage.clear();
      console.log("Logged out :)!!!!");
    };

    return (
        <div>
            <h1>About</h1>
            <NavLink to="/movies" >Movies</NavLink>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}