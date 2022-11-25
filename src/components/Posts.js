import React, { useState } from "react";
import PostItem from "./PostItem";
import "./Posts.css"
import { fetchPosts } from "../api/api"

const Posts = ({posts})=>{
    console.log(posts);
    return(
        <div>{posts.map ((item)=>{
            return <PostItem key={item.id} posts= {item}/>
        })}
            </div>
    )
}

export default Posts