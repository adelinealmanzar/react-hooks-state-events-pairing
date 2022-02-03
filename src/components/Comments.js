// import React from "react";

function Comments({user, comment}) {
    return (
        <div class="comment">
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default Comments;