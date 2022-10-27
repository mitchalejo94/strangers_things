import React, { useState } from "react";
import { createUser, cohortName, apiKey  } from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { action } = useParams();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("handle submit for register");
    const token = await createUser (username, password)
    localStorage.setItem ("token", token)
    console.log(token, "this is token");
    navigate ("/Login")

    // const { error, token, message } = await createUser(username, password);
    // console.error(error);
    // setToken(token);
    // if (token) {
    //   navigate.push("/");
    // }
  }
  const title = action==="login"?"login": "Register"

  return (
    <>
      <form id="registerForm" onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <input
            value = {username}
          id="username"
          placeholder="Enter Username"
          type="text"
          minLength="6"
          required onChange={(event)=> setUserName(event.target.value)}
        ></input>
        <input
        value = {password}
          id="password"
          placeholder="Enter Password"
          type="password"
          minLength="6"
          required onChange={(event)=> setPassword(event.target.value)}
        ></input>
        <input
        value = {confirmPassword}
          id="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          minLength="6"
          required onChange={(event)=> setConfirmPassword(event.target.value)}
        ></input>
        <div></div>
        <button type="submit">{title}</button>
      </form>
    </>
  );
}

export default Register;
