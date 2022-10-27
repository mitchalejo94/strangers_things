import React from "react";
import { Link, Route } from "react-router-dom";
import "./Title.css";

const Title = () => {
  return (
    <header id="entireHeader">
        <nav>
        <Link className="links" to='/Posts'>Posts </Link>
        <Link className="links" to='/Login'>Login </Link>
        <Link className="links" to='/Register'>Register</Link>
        
        <div>
        <h1 id = "headerTitle">Stranger's Things</h1>
        </div>
        </nav>
    </header>
  );
};

export default Title;
