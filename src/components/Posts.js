import React, { useState } from "react";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";
import { deletePost } from "../api/api";

const Posts = ({ posts, setPosts, token }) => {
  console.log(posts);

  const handleDelete = async (postId) => {
    await deletePost(token, postId);
    setPosts((previousPost) =>
      previousPost.filter((posts) => posts.id !== postId)
    );
  };

  return (
    <>
      <Link to="/Posts/create" id="createPostLink">
        Create Post
      </Link>
      <div>
        {posts.map((item) => {
          return (
            <PostItem
              key={item.id}
              posts={item}
              headerElement={item.isAuthor ? <div>My Posts </div> : null}
            >
            {item.isAuthor ?(
                <button onClick={(() => handleDelete (item._id))}>
                    Delete Post

                </button>
            ):null}



            </PostItem>
          );
          <button> test</button>
        })}
      </div>
    </>
  );
};

export default Posts;
