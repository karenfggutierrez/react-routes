import React from 'react';
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import './Login.css';

export const LoginPage = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorAuth, setErrorAuth] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        //Here goes the backend request

        if (user === "" || password === "") {
            setError(true)
            return
        } 

        //Replace with actual authentication logic (API or backend)
        if (user === "admin" && password === "123") {
            //Replace with actual authentication logic (API)
            await login({ user });
            console.log("Logged in :) !!!!!!!!!!!!!!")
            localStorage.setItem("password", password)
            //user and password saved in localstorage (don't worry if user looks like this '{"user":"admin"}' and password like this '123', the format of user is necessary due to keyName in LocalStorage, I mean, for keep logged in)
            console.log(localStorage)
            setIsAuth(true)
            //You could send the error as an alert too
          } else {
            setErrorAuth(true)
            return
          }

        setError(false)

        console.log("The user is: " + user);
        console.log("The password is: " + password);

        if(isAuth) {
            console.log("User authenticated")
        } else {
            console.log("No authenticated")
        }

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
            {errorAuth && <p>Invalid user or password!!!!!!!!!!!!!</p>}

        </section>
    )
}