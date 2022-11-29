import { useParams } from 'react-router-dom'
import {addComment} from '../api/api'
import PostItem from './PostItem'
import React, {useState} from "react";

 const PostDetail = (props)=>{
    const {token, posts} = props
    const {postID} = useParams()
    const [message, setMessage] = useState ('');
    const [errorMessage, setErrorMessage]= useState (null)

    const singPost = posts. find ((singPost)=>{
        const foundPost = singPost._id == postID
        return foundPost
    })

    const handleOnSubmit = async (event) => {
        event.preventDefault();

    const {success, error, message} = await addComment(token, postID, messageText);

    if(success) {
        setMessage('')
        console.log("added a comment");
    }else {
        setErrorMessage (error);
        console.log('failed to load comment!');
    }
 }
 if(!singPost){
    return(
        <p> Loading post details.</p>
    )
 }
 return(<>
 <PostItem posts={singPost} />
 <form onSubmit={handleOnSubmit}>
    <input value={message}
   onChange={(event) => setMessage(event.target.value)} /> 
    <button type="submit">Comment</button>


 </form>
 
 </>)

 }

export default PostDetail;