import React, { useState } from "react";

function VoteButtons({ upvotes, downvotes }) {
    const [upvoteCount, setUpvoteCount] = useState(upvotes)
    const [downvoteCount, setDownvoteCount] = useState(downvotes)
    function handleVotes(e) {
        let button = e.target
        if(button.id === "upvotes"){
            setUpvoteCount(upvoteCount +1)
        } else {
            setDownvoteCount(downvoteCount +1)
        }
    }
    return(
        <div>
        <button id="upvotes" onClick={handleVotes}>{upvoteCount} 👍</button>
        <button id="downvotes" onClick={handleVotes}>{downvoteCount} 👎</button>
        </div>
    )
}
export default VoteButtons;