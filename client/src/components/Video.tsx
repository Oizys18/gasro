import React, { Component, useState } from "react";
import white from "assets/images/1.png";
// import ReactPlayer from "react-player/lazy";
import gasro from "assets/videos/gasro.mp4";
const videoStyle = {
  padding: "none",
  margin: "none",
};

class Video extends React.Component {
  stopMovie = (e: any) => {
    e.target.pause();
    console.log("hello");
  };

  playMovie = (e: any) => {
    e.target.play();
  };
  render() {
    return (
      // <div className="home section bd-container">
      <video
        style={videoStyle}
        className="react-player"
        src={gasro}
        width="100%"
        height="100%"
        controls={true}
        loop={false}
        poster={white}
      />
      // </div>
    );
  }
}

export default Video;
