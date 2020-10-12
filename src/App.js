import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>Instagram Clone with React 🚀 !</h1>

      <Post username="bruno" caption="It is working" imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18.08.13.png" />
      <Post username="designerkibet" caption="This is dope!"/>
      <Post username="cyril" caption="How did you do that?"/>

    </div>
  );
}

export default App;
