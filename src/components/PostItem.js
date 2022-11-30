import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ posts, headerElement, children }) => {
  return (
    <div>
      <div>
        <div className="extra content">
          <div className=" center aligned header">
            <b id="postTitle">{posts.title}</b>
            {headerElement}
            <b id="postDescription">{posts.description}</b>
            <b>{posts.price}</b>
            <br></br>
            <div id="postUsername">{posts.author.username}</div>

            <Link to={`/Posts/${posts._id}`}>View Post</Link>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
