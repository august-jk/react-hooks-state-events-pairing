import React from "react";
import Header from "./Header";

function Video({ video }) {
    return (
        <div>
             <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Header title={video.title} views={video.views} date={video.createdAt}/>
        </div>
    )
}
export default Video;