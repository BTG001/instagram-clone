/*Type rfce and hit enter - everything is filled up for us*/
import React from "react";
import "./Post.css";
import { Avatar } from '@material-ui/core';

function Post( { username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
      <Avatar
        className="post__avatar"
        alt="Bruno"
        src="/static/images/avatar/1.jpg"/>
      <h3>{username}</h3>
      </div>

      <img
        className="post__image"
        src={imageUrl}
        alt="React"
      ></img>

      <h4 className="post__text">
        <strong>{username} </strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
