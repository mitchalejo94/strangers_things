import React, { useState, useEffect } from "react";


const Posts = ({posts}) => {


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
