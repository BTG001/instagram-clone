/*Type rfce and hit enter - everything is filled up for us*/
import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      {/* header -> avatar + username */}

      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt="React"
      ></img>
      {/* image */}

      <h4>Username: caption</h4>
      {/* username + caaption */}
    </div>
  );
}

export default Post;
