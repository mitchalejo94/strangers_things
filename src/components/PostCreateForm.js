import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../api/api";

const PostsCreateForm = ({ token, setPosts }) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const history = useHistory();

  return (
    <form
      className="ui form"
      onSubmit={async (event) => {
        event.preventDefault();

        const { error, post } = await createPost(
          token,
          title,
          description,
          price,
          location
        );

        console.log("post form", description);

        if (post) {
          setPosts((prevPosts) => [...prevPosts, post]);
          setDescription("");
          setPrice("");
          history.push("/Posts");
        } else {
          setErrorMessage(error);
        }
      }}>
      <h2>Create your post</h2>
      <div>
        <label htmlFor="description">Post Description</label>
        <input
          name="description"
          type="text"
          className="field"
          placeholder="Item description"
          required
          autoComplete="off"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></input>
      </div>

      <div className="field">
        <label htmlFor="price"> Set Price</label>
        <input
          name="price"
          type="text"
          className="field"
          placeholder="Set Price"
          required
          autoComplete="off"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>
      </div>

      <div className="field">
        <label htmlFor="title"> Set Title</label>
        <input
          name="title"
          type="text"
          className="field"
          placeholder="Set Title"
          required
          autoComplete="off"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
      </div>

      <div className="field">
        <label htmlFor="location"> Set Location</label>
        <input
          name="location"
          type="text"
          className="field"
          placeholder="Location"
          autoComplete="off"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        ></input>
      </div>

      {errorMessage ? <p className="ui negative message">{errorMessage}</p> : null}

      <button type="submit" className="ui button">
        Create Post
      </button>
    </form>
  );
};

export default PostsCreateForm;
