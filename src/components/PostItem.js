import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ posts, headerElement, children  }) => {
  return (
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
                
                <Link to={`/Posts/${posts._id}`}>View Post</Link>
              </div>
            </div>
          </p>
        </div>
      </div>
   
  );
};

export default PostItem;
