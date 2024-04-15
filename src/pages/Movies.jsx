import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
export function Movies() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.clear();
        navigate('/login');

        console.log("Logged out :)!!!!");
    }

    return (
        <div>
            <h1>Movies</h1>
            {/* <NavLink to="/login" >Logout</NavLink> */}
            <button onClick={handleSubmit}>Logout</button>
        </div>
    )
}