import React from 'react';
import { NavLink } from "react-router-dom";

export function Home() {

    return (
        <div>
            <h1>Home</h1>
            <h2>Welcome</h2>
            <NavLink to="/login" >Login</NavLink>
        </div>
    )
}