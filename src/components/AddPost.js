import React, { useEffect, useState } from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { NewPost } from "../api/api";

export default function AddPost (){
    let navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);

    const authToken = localStorage.getItem ("token" ? true : false)
    
    
    
    
    return (
        <div>
            {authToken === true ?(
            <>
            <h1>Create a New Post</h1>
            <form onSubmit = {handleSubmit}>
                <input
                type = "text"
     
                onChange = {event => setTitle(event.target.value)}
                placeholder = "title"> 
                </input>
                <input
                type = "text"
   
                onChange = {event => setDescription(event.target.value)}
                placeholder = "description">
                </input>
                <input
                type = "text"
   
                onChange = {event => setLocation(event.target.value)}
                placeholder = "location">
                </input>
                <input
                type = "text"
 
                onChange = {event => setPrice(event.target.value)}
                placeholder = "price">
                    {/* need to apply deliver */}
                </input>
                <button type = "Submit">Submit New Post</button>
                </form></>       
                ) : <h2>Please Login Before Attempting To Post</h2>    } 
        </div>
    )
}