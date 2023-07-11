
import React from "react";

function Comment({title, url}) {
    return (
        <li>
        <h4>
        <a href={url}>{title}</a>
        </h4>
        </li>
    )
}

export default Comment;