import React, {useState } from "react";
import {  useNavigate } from "react-router-dom";
import { NewPost } from "../api/api";

import "./AddPost.css";

export default function AddPost() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);


  async function handleSubmit(event) {
    event.preventDefault();

    const details = {
      title: title,
      description: description,
      location: location,
      price: price,
      willDeliver: willDeliver,
    };
    console.log(details, "this is detail");
    const token = localStorage.getItem("token");
    console.log(token);

    const response = await NewPost(details, token);
    console.log(response, "this is response from AddPosts");
    navigate("/Posts");
    return response;
  }
  return (
    <div>
      <>
        <h1>Create a New Post</h1>
        <form onSubmit={handleSubmit}
        id="postForm">
          <input
          id="title"
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            placeholder="title"
          ></input>
          <input
            id="description"
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="description"
          ></input>
          <input
            id="location"
            onChange={(event) => setLocation(event.target.value)}
            type="text"
            placeholder="location"
          ></input>
          <input type="text" placeholder="price"></input>
          <input
          id = "price"
            type="text"
            onChange={(event) => setPrice(event.target.value)}
            placeholder="price"
          ></input>
          <input
            type="text"
            id="willDeliver"
            onChange={(event) => setWillDeliver(event.target.value)}
            placeholder="Will Deliver?"
          ></input>
          <button id="addPostButton" type="Submit">
            Post
          </button>
        </form>
      </>
    </div>
  );
}
