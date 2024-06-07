import React from 'react';
import { useAuth } from "../hooks/useAuth";

export const About = () => {

    const { logout } = useAuth();

    const handleLogout = () => {
      logout();
    };

    return (
        <div>
            <h1>About</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}