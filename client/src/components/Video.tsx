import React, { Component, useState } from "react";
// import ReactPlayer from "react-player/lazy";
import gasro from "assets/videos/gasro.mp4";
const videoStyle = {
  padding: "none",
  margin: "none",
};

class Video extends React.Component {
  // constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     scrollPosition: 0,
  //   };
  // }
  // handleScroll = () => {
  //   const position = window.pageYOffset;
  //   this.setState({ scrollPosition: position });
  //   console.log(this.state);
  // };

  stopMovie = (e: any) => {
    e.target.pause();
    console.log("hello");
  };

  playMovie = (e: any) => {
    e.target.play();
  };
  render() {
    return (
      <div className="home section bd-container">
        <video
          style={videoStyle}
          className="react-player"
          src={gasro}
          width="100%"
          height="100%"
          controls={true}
          autoPlay={true}
          loop={false}
        />
      </div>
    );
  }
}

export default Video;
