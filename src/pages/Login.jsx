import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import './Login.css';

export const LoginPage = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const { login } = useAuth();
    //const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        //Here goes the backend request


        if (user === "" || password === "") {
            setError(true)
            return
        }

        if (user === "user" && password === "password") {
            //Replace with actual authentication logic
            await login({ username });
          } else {
            {error && <p>Invalid user or password!!!!!!!!!!!!!</p>}
          }

        setError(false)

        //localStorage.clear();
       // localStorage.setItem('user', JSON.stringify(user));
       // localStorage.setItem('token', JSON.stringify(password));
       // navigate('/movies');

        console.log("The user is: " + user);
        console.log("The password is: " + password);
    };

    return (
        <section>
            <h1>Login</h1>
            <form className="login-form"
                onSubmit={handleLogin}
            >
                <label htmlFor="user">User:</label>
                <input id="user"
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />

                <label htmlFor="password">Password:</label>
                <input id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign In</button>
            </form>
            {error && <p>User and password can not be empty!!!!!!!!!!!!!</p>}
            {/* <p>User: {user} and Password: {password}</p> */}
        </section>
    )
}