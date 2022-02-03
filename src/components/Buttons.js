import React, {useState} from "react";
import CommentContainer from "./CommentContainer";

function Buttons({numLikes, numDislikes, comments}) {
    const [upClicks, setUpClicks] = useState(numLikes)
    const [downClicks, setDownClicks] = useState(numDislikes)

    function handleUpClick() {
        setUpClicks(upClicks => upClicks + 1)
    }
    function handleDownClick() {
        setDownClicks(downClicks => downClicks + 1)
    }


    return (
        <>
            <div>
                <button onClick={handleUpClick}>{upClicks}👍</button>
                <button onClick={handleDownClick}>{downClicks}👎</button>
            </div>
            <CommentContainer
                comments={comments}
            />
        </>
    )
}

export default Buttons;