/*Type rfce and hit enter - everything is filled up for us*/
import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
      <Avatar
        className="post__avatar"
        alt="Bruno"
        src="/static/images/avatar/1.jpg"/>
      <h3>Username</h3>
      </div>
      {/* header -> avatar + username */}

      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt="React"
      ></img>

      <h4 className="post__text">
        <strong>bruno: </strong> Wow! Day Three of building this
      </h4>
    </div>
  );
}

export default Post;
