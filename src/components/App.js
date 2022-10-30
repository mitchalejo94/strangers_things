import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import {fetchPosts, createUser} from "../api/api";
import "./App.css";
import Posts from "./Posts";
import Title from "./Title";
import Register from "./Register";
import Login from "./Login";
import AddPost from "./AddPost";

// need to display on the screen for user to see. You need to map through it.
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [posts, setPosts] = useState([]);

  //UseEffect for Register and token
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  console.log(token, "this is token App.js");

  //useEffect to fetchPosts
  useEffect(() => {
    fetchPosts()
      .then((response) => {
        console.log(response, "this is response in App.js");
        const posts = response.data.posts;
        setPosts(posts);
        console.log(posts, "this is posts from App.js");
      })
      .catch((error) => {
        console.log(error, "error from App.js");
      });
  }, []);

  return (
    <div>
      <Title setToken = {setToken}/>
      <Routes>
        <Route
          exact
          path="/account/:action"
          element={<Register setToken={setToken} />}
        ></Route>
        <Route exact path="/posts" element={<Posts posts = {posts}/>}></Route>
        {/* <Route exact path="/Login" element={<Login setToken={setToken}/>}></Route> */}

        <Route exact path="/AddPost" element={<AddPost AddPost = {AddPost} />}></Route>
      </Routes>
    </div>
  );
};

export default App;
