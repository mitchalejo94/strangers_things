// import React, { useState, useEffect } from "react";
// import PostItem from "./PostItem";

// import { deletePost } from "../api/api";

// const Posts = ({ posts, setPosts, token }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredPosts, setFilteredPosts] = useState(posts);
//   console.log(posts);

//   useEffect(() => {
//     if (searchTerm) {
//       const searchTerms = searchTerm.toLowerCase().trim().split(" ");
//       const filtered = posts.filter((postObject) => {
//         const filterableValues = [postObject.description, postObject.location];

//         for (let value of filterableValues) {
//           const valueLower = value.toLowerCase().trim();

//           for (let term of searchTerms) {
//             if (
//               valueLower.length > 0 &&
//               term.length > 0 &&
//               valueLower.includes(term)
//             ) {
//               return true;
//             }
//           }
//         }
//         return false;
//       });
//       setFilteredPosts(filtered);
//     } else {
//       setFilteredPosts(posts);
//     }
//   }, [searchTerm, posts]);

//   const handleDelete = async (postId) => {
//     await deletePost(token, postId);
//     setPosts((previousPost) =>
//       previousPost.filter((posts) => posts.id !== postId)
//     );
//   };

//   return (
//     <>
{
  /* <div>
  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={(event) => {
      setSearchTerm(event.target.value);
    }}
  />
  <i className="search icon"></i>
</div>; */
}
//       <Link to="/Posts/create" id="createPostLink">
//         Create Post
//       </Link>
//       <div>
//         {filteredPosts.map((item) => {
//           return (
//             <PostItem
//               key={item.id}
//               posts={item}
//               headerElement={item.isAuthor ? <div>My Posts </div> : null}
//             >
//               {item.isAuthor ? (
//                 <button onClick={() => handleDelete(item._id)}>
//                   Delete Post
//                 </button>
//               ) : null}
//             </PostItem>
//           );
//           <button> test</button>;
//         })}
//       </div>
//     </>
//   );
// };

// export default Posts;

import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";
import { deletePost } from "../api/api";

const Posts = ({ posts, setPosts, token  }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  console.log(posts);

  useEffect(() => {
    if (searchTerm) {
      const searchTerms = searchTerm.toLowerCase().trim().split(" ");
      const filtered = posts.filter((postObject) => {
        const filterableValues = [postObject.description, postObject.location];

        for (let value of filterableValues) {
          const valueLower = value.toLowerCase().trim();

          for (let term of searchTerms) {
            if (
              valueLower.length > 0 &&
              term.length > 0 &&
              valueLower.includes(term)
            ) {
              return true;
            }
          }
        }
        return false;
      });
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchTerm, posts]);

  const handleDelete = async (postId) => {
    await deletePost(token, postId);
    setPosts((previousPost) =>
      previousPost.filter((posts) => posts.id !== postId)
    );
  };


  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <i className="search icon"> SEARCH BAR</i>
      </div>
      <Link to="/Posts/create" id="createPostLink">
        Create Post
      </Link>
      <div>
        {filteredPosts.map((item) => {
          return (
            <PostItem
              key={item.id}
              posts={item}
              headerElement={item.isAuthor ? <div>My Posts </div> : null}
            >
              {item.isAuthor ? (
                <button onClick={() => handleDelete(item._id)}>
                  Delete Post
                </button>
              ) : null}
            </PostItem>
          );
          <button> test</button>;
        })}
      </div>
    </>
  );
};

export default Posts;
