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
                <p>{posts.description}</p>
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
