import React, { useState, useEffect } from "react";
import { deletePost } from "../api/api";

const Posts = ({ posts, setPosts, token }) => {
  const handleDeleteClick = async (postId) => {
    await deletePost(token, postId);
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };
  //need to map over the Posts
  const postMapping = posts.map((post) => {
    return (
      <div>
        <h1 id="postTitle">{post.title}</h1>
        <h3 id="postDescription">{post.description}</h3>
        <h3 id="postPrice">{post.price}</h3>
        <h3 id="postUsername">{post.author.username}</h3>
        {posts.isAuthor && token ? (
          <button
            onClick={() => handleDeleteClick(posts._id)}
            className="negative ui button left floated"
          >
            Delete
          </button>
        ) : null}
      </div>
    );
  });
  return <div>{postMapping}</div>;
};

export default Posts;
