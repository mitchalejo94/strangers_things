import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { registerUser, loginUser } from "../api/api";

const AccountForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const { action } = useParams();

  console.log("action", action);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const authFn = action === "register" ? registerUser : loginUser;
    const { error, token, message } = await authFn(username, password);
    if(error){

    console.error(error);
}
    setToken(token);
    if (token) {
      history.push("/");
    }
  };

  const title = action === "login" ? "Log In" : "Sign Up";

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <div className="field">
        <label>Username</label>
        <input
          type="text"
          value={username}
          placeholder="type in username"
          minLength="6"
          required
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="type in password"
          minLength="6"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="ui button" type="submit">
        {title}
      </button>
    </form>
  );
};

export default AccountForm;
