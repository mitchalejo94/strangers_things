//Imports
import React, { useState, useEffect } from "react";
import { Route, Link, Routes, Form, Switch} from "react-router-dom";
import {Home, Posts} from "./components"
// import Switch from "react-switch";
import { fetchPosts, } from "./api/api";
import "./App.css";


export const App = ()=>{
  //useStates
    // const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [posts, setPost] = useState ([])

//useEffect to fetchPosts
    useEffect(()=>{
      const getPosts = async ()=>{
        try{
          const result = await fetchPosts()
          setPost(result)
        }catch(error){
          console.error(error);
        }
      }
      getPosts()
    },[]);
    return(
      <div>
        <nav>
          <Link className="item" to="/">
            Home
          </Link>
          <Link className="item" to="/posts">
          </Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route className="item" path="/posts">
            <Posts posts = {posts} />

          </Route>
        </Switch>
      </div>
    )

  
}
export default App;
