//Imports
import React, { useState, useEffect } from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import { Home, Posts, AccountForm } from "./components";
// import Switch from "react-switch";
import { fetchPosts, fetchGuest } from "./api/api";
import "./App.css";

export const App = () => {
  //useStates
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || null
  );
  const [posts, setPost] = useState([]);
  const [guest, setGuest] = useState(null);

  //Assigning variable to useHistory
  const history = useHistory();

  //useEffect to fetchPosts
  useEffect(() => {
    const getPosts = async () => {
      // const {error, posts} = await fetchPosts()

      // if (error){
      //   console.error(error);
      // }

      try {
        const result = await fetchPosts();
        setPost(result);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  ///need to get and set Guest
  useEffect(() => {
    if (token) {
      const getGuest = async () => {
        const { guest } = await fetchGuest(token);
        setGuest(guest);
      };
      getGuest();
    }
  }, [token]);

  useEffect(() => {
    window.localStorage.setItem("token", token);
  }, [token]);

  const logOut = () => {
    setToken("");
    setGuest(null);
    history, push("/");
  };

  return (
    <div>
      <nav>
        <Link className="item" to="/">
          Home
        </Link>
        <Link className="item" to="/posts">
          Posts
        </Link>
        <div className="right menu">
          {token ? (
            <button onClick={logOut} className="item">
              Log Out
            </button>
          ) : (
            <>
              <Link className="item" to="/account/login">
                Log In
              </Link>
              <Link className="item" to="/account/register">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home guest={guest} />
        </Route>
        <Route className="item" path="/posts">
          <Posts posts={posts} />
        </Route>
        <Route className="item" path="/account/:action">
          <AccountForm setToken={setToken} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
