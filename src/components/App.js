import React, { useState, useEffect } from "react";
import {Route, Link, Routes} from "react-router-dom"
import "./App.css";
import Posts from "./Posts";
import Title from "./Title";
import Register from "./Register"
import Login from "./Login"
import AddPost from "./AddPost";

// need to display on the screen for user to see. You need to map through it.
const App = () => {
  // const [posts, setPosts] = useState ([])
  // const  [token, setToken] = useState ("")
  return (
    <div>
      <Title />
      <Routes>
      <Route exact path="/Register" element = {<Register/>}></Route>
        <Route exact path="/Posts" element = {<Posts/>}></Route>
        <Route exact path="/Login" element = {<Login/>}></Route>

        <Route exact path="/AddPost" element={<AddPost />}></Route>
      </Routes>
    </div>
  );
};

export default App;
