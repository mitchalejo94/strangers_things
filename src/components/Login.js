import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loginUser } from "../api/api";


import "./Login.css";

function Login({setToken}) {
   
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleChange = (event)=>{
    const change = event.target.id
    if(change === 'userName'){
        console.log(userName, "this is username")
        setUserName(event.target.value);
    }else if(change === 'password'){
        console.log(password, "this is password");
        setPassword(event.target.value)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userName, password, "handle submit for Login");
    const result = await loginUser (userName,password)
    setToken(result.data.token)
    
    // navigate ("/Posts")
  };

  return (
    <>
      <form id="loginForm" onSubmit={handleSubmit}>
        <h1 id="Login">Login</h1>
        <label className="userNameAndPassword"> Username: </label>
        <input
          id="username"
          placeholder="Enter Username "
        //   value = {userName} 
          onChange={handleChange}
          minLength={7}
        ></input>
        <label className="userNameAndPassword"> Password: </label>
        <input
          id="password"
          value = {password}onChange={handleChange}
          type="password"
          placeholder="Enter Password "
          minLength={7}
        ></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
