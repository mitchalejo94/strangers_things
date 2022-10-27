import React, { useState, useEffect } from "react";
import {fetchPosts} from "../api/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts()
      .then((response) => {
        console.log(response, "this is response in Posts.js");
        const posts = response.data.posts;
        setPosts(posts);
        console.log(posts, "this is posts from Post.js");
      })
      .catch((error) => {
        console.log(error, "error from Posts.js");
      });
  }, []);

  //need to map over the Posts
  const postMapping = posts.map((post) => {
    return (
      <div>
        <h1 id = "postTitle">{post.title}</h1>
        <h3 id = "postDescription">{post.description}</h3>
        <h3 id = "postPrice">{post.price}</h3>
        <h3 id = "postUsername">{post.author.username}</h3>
      </div>
    );
  });
  return <div>{postMapping}</div>;
};

export default Posts;
