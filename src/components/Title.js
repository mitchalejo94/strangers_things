import React from "react";
import { Link, Route } from "react-router-dom";
import "./Title.css";

const Title = ({setToken}) => {
  function logOut (){
    setToken("")
  }
  return (
    <header id="entireHeader">
        <nav>
        <Link className="links" to='/Posts'>Posts </Link>
        <button id = "logOut" onClick={logOut} > Logout</button>
        <Link className="links" to='/account/login'>Login </Link>
        <Link className="links" to='/account/register'>Register</Link>
        
        <div>
        <h1 id = "headerTitle">Stranger's Things</h1>
        </div>
        </nav>
    </header>
  );
};

export default Title;
