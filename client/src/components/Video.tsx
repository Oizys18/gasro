import React from "react";
import white from "assets/images/1.png";
import gasro from "assets/videos/gasro.mp4";
const videoStyle = {
  padding: "none",
  margin: "none",
};

class Video extends React.Component {
  render() {
    return (
      <video
        style={videoStyle}
        className="react-player videoH"
        src={gasro}
        width="100%"
        height="100%"
        controls={true}
        loop={false}
        poster={white}
        id="video"
      />
    );
  }
}

export default Video;
