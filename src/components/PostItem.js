import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ posts, children }) => {
  return (
    <div>
      <div className="extra content">
        <div className=" center aligned header">
          <p id="postTitle">{posts.title}</p>
          <p id="postDescription">{posts.description}</p>
          <p>{posts.price}</p>
          <br></br>
          <div id="postUsername">{posts.author.username}</div>

          <Link id="viewPost" to="">
            View Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
