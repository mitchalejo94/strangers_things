//Imports
import React, { useState, useEffect } from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import { Home, Posts, AccountForm, PostsCreateForm, PostDetail } from "./components";
// import Switch from "react-switch";
import { fetchPosts, fetchGuest } from "./api/api";
import "./App.css";

export const App = () => {
  //useStates
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || null
  );
  const [posts, setPosts] = useState([]);
  const [guest, setGuest] = useState(null);

  //Assigning variable to useHistory
  const history = useHistory();

  //useEffect to fetchPosts
  // useEffect(() => {
  //   const getPosts = async () => {
  //   //   try {
  //   //     const result = await fetchPosts();
  //   //     setPosts(result);
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }
  //   // };

  //   const {error, posts} = await fetchPosts (token)

  //   if(error){
  //     console.error(error);
  //   }
  //   setPosts (posts)
  // }
  //   getPosts();
  // }, []);

  useEffect(() => {
    const getPosts = async () => {
        const {error, posts} = await fetchPosts(token);
        if (error) {
            console.error(error);
        }
        setPosts(posts);
    };
    getPosts();
}, []);

  ///useEffect to get Guest 
  useEffect(() => {
    if (token) {
      const getGuest = async () => {
        const { username } = await fetchGuest(token);
        setGuest(username);
      };
      getGuest();
    }
  }, [token]);

  useEffect(() => {
    if (token) {
        window.localStorage.setItem("token", token);
    } else {
        window.localStorage.removeItem("token");
    }
}, [token]);


  const logOut = () => {
    setToken("");
    setGuest(null);
    history.push("/");
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
        {/* <Link className="item" to="/posts/create">
        Create Post
        </Link> */}
        <div className="right menu">
          {token ? (
            <Link onClick={logOut} className="item">
              Log Out
            </Link>
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

        <Route className="item" path="/posts/create">
          <PostsCreateForm token ={token} setPosts={setPosts}/>
        </Route>

        <Route className="item" path="/Posts/:postId">
        <PostDetail token={token} posts={posts} />
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
