import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

export function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user === "" || password === "") {
            setError(true)
            return
        }

        setError(false)

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', JSON.stringify(password));
        navigate('/movies');

        console.log("The user is: " + user);
        console.log("The password is: " + password);
    }

    return (
        <section>
            <h1>Login</h1>
            <form className="login-form"
                onSubmit={handleSubmit}
            >
                <input type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                />
                <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button>SignIn</button>
            </form>
            {error && <p>User and password can not be empty!!!!!!!!!!!!!</p>}
            {/* <p>User: {user} and Password: {password}</p> */}
        </section>
    )
}