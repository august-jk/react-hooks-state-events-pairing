import video from "../data/video.js";
import React from "react";
import Video from "./Video.js";
import VoteButtons from "./VoteButtons.js";
import CommentSection from "./CommentSection.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video}/>
      <VoteButtons upvotes={video.upvotes} downvotes={video.downvotes}/>
      <br></br>
      <CommentSection comments={video.comments}/>
    </div>
  );
}

export default App;
