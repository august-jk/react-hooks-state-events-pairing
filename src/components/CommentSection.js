import React, {useState} from "react";

function CommentSection({ comments }) {
    const [toggle, setToggle] = useState(true)
   function handleClick() {
    setToggle(current => !current)
   }
    
    const individualComments = comments.map((comment) => (
       <li key={comment.id}>
       <h3>{comment.user}</h3>
       <p>{comment.comment}</p>
       </li>
    ))
    const commentsSection =
        <div>
            <h2>{comments.length} Comments</h2>
            <div>{individualComments}</div> 
        </div>
        
    return (
        <div>
            <button onClick={handleClick}>{toggle ? "Hide" : "Show"} Comments</button>
            {toggle ? commentsSection : null}
        </div>
    )
}
export default CommentSection;