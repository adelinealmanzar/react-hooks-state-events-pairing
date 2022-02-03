import React, { useState } from "react";
import Comments from "./Comments";

function CommentContainer({comments}) {
    const [showHide, setHideOnOFF] = useState(true)
    function handleHide() {
        setHideOnOFF(showHide => !showHide)
    }

    const renderEachComment = comments.map(comment => {
        return <Comments
        user={comment.user}
        comment={comment.comment}
        />
    })

    return (
        <div>
        <button onClick={handleHide}>{showHide ? "Hide Comment" : "Show Comment"}</button>
        <h3>{comments.length} Comments</h3>
        {showHide ? renderEachComment : null}
    </div>
    )
}

export default CommentContainer;