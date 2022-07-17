import React from "react";

function Header({ title, views, date }) {
    return(
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {date}</p>
        </div>
        
    )
}
export default Header;