import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ posts }) => {
  return (
    <div>
      <div>
        <div>{posts.author.username}</div>
        <div>
          <p>
            {posts.description}
            <div className="extra content">
              <div className=" center aligned header">
                <b>{posts.title}</b>
                <p>{posts.description}</p>
                {/* <b>{posts.price}</b> */}
                <Link to="">View Post</Link>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
