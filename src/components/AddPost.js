import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewPost } from "../api/api";

import "./AddPost.css";

const AddPost = ({ token, setPosts }) => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <form
      className="postForm"
      onSubmit={async (event) => {
        event.preventDefault();
        const { error, post } = await NewPost(
          token,
          title,
          description,
          price,
          location
        );

        console.log("post form onSubmit:", description);

        if (post) {
          setPosts((prevPosts) => [...prevPosts, post]);
          setDescription("");
          setPrice("");
          navigate.push("/Posts");
        } else {
          setErrorMessage(error);
        }
      }}
    >
      <h1>Create a New Post</h1>
      <div className=" inputField ">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
      </div>
      <div className="inputField">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></input>
      </div>
      <div>
      <label htmlFor="location">Location</label>
        <input
        className="inputField"
          type="text"
          placeholder="location"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        ></input>
      </div>
      <div>
      <label htmlFor="price">Price</label>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>
      </div>
      <input type="text" placeholder="Will Deliver?"></input>
      <button type="Submit">Post</button>
      {errorMessage ? (
        <p className="ui negative message">{errorMessage}</p>
      ) : null}
    </form>
  );
};

export default AddPost;

//   async function handleSubmit(event) {
//     event.preventDefault();

//     const details = {
//       title: title,
//       description: description,
//       location: location,
//       price: price,
//       willDeliver: willDeliver,
//     };
//     console.log(details, "this is detail");
//     const token = localStorage.getItem("token");
//     console.log(token);

//     const response = await NewPost(details, token);
//     console.log(response, "this is response from AddPosts");
//     navigate("/Posts");
//     return response;
