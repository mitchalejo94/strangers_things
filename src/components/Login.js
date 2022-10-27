import React, {useState} from "react";
import { useNavigate, useParams
 } from "react-router-dom";
import { loginUser } from "../api/api";

import "./Login.css"

function Login() {
    const [userName, setUserName]= useState ('')
    const [password, setPassword]= useState ('')
    let navigate = useNavigate ()




  const handleSubmit = async (event)=> {
    event.preventDefault();
    console.log("handle submit for Login");
    
  }

  return (
    <>
      <form id = "loginForm"onSubmit={handleSubmit}>
        <h1 id = "Login">Login</h1>
        <label className="userNameAndPassword"> Username: </label>
        <input id="username" placeholder="Enter Username Here" minLength={7}></input>
        <label className="userNameAndPassword"> Password: </label>
        <input id="password" placeholder="Enter Password Here" minLength= {7}></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
