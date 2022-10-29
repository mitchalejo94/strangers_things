import React, { useState } from "react";
import { createUser, loginUser } from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
import "./Register.css";

function Register({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { action } = useParams();
  const navigate = useNavigate();
  const authFunction = action === "login" ? loginUser : createUser
console.log(action, "action");
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("handle submit for register");
    const result = await authFunction(username, password);

    console.log(result, "this is result");
    setToken(result.data.token);

    navigate ("/Login")

    // const { error, token, message } = await createUser(username, password);
    // console.error(error);
    // setToken(token);
    // if (token) {
    //   navigate.push("/");
    // }
  }
  const title = action === "login" ? "login" : "register";

  return (
    <>
      <form id="registerForm" onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <input
          value={username}
          id="username"
          placeholder="Enter Username"
          type="text"
          minLength="6"
          required
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <input
          value={password}
          id="password"
          placeholder="Enter Password"
          type="password"
          minLength="6"
          required
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <div></div>
        <button id = "registerButton" type="submit">{title}</button>
      </form>
    </>
  );
}

export default Register;
