import React from "react";
import Comment from "./Comment";

function CommentList({commentsData}) {
   const commentNodes = commentsData.map(function (comment) {
    return (
        <Comment key={comment.id} title = {comment.title} url={comment.url}></Comment>
    )
   });
    return (
        <>
        {commentNodes}
        </>
    )
}




export default CommentList;