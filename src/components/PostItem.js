import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ posts }) => {
  return (
    <div>
      <div>
       
        <div>
          <p >
            <div className="extra content">
              <div className=" center aligned header">
                <b id="postTitle">{posts.title}</b>
                <p id="postDescription">{posts.description}</p>
                <b>{posts.price}</b>
                <br></br>
                <div id = "postUsername">{posts.author.username}</div>
                
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
