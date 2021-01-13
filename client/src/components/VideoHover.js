import HoverVideoPlayer from 'react-hover-video-player';
import React from "react"
import gasro from "assets/videos/gasro.mp4";
import banner01 from "assets/images/banner01.jpg";
import pizza from "assets/images/pizza.png";
import white from "assets/images/1.png";
import styled from "styled-components"
export default function VideoHover() {
	return (
		<HoverVideoPlayer
			control={true}
			videoStyle={{
				zIndex: "10",
				width: "100%",
				height: "100%"
			}}
			style={{
				zIndex: "10",
				width: "100%",
				height: "100%",
			}}
			videoSrc={gasro}
			// unloadVideoOnPaused
			// sizingMode="container"
			muted={false}
			control={true}
			pausedOverlay={
				<img src={white} alt="pizza" style={{ backgroundColor: "#FEFBFB" }} />
			}
			loadingOverlay={
				< div className="loading-spinner-overlay" />
			}
		/>
	);
}

// export default class VideoHover extends React.Component {
// 	stopMovie = (e) => {
// 		e.target.pause();
// 	}

// 	playMovie = (e) => {
// 		e.target.play();
// 	}

// 	render() {
// 		return (
// 			<div >
// 				<video
// 					width="100%"
// 					height="100%"
// 					onMouseOver={this.playMovie}
// 					onMouseOut={this.stopMovie}
// 					src={gasro}
// 					poster={white}
// 					// controls={true}
// 					// preload='none'
// 					loop />
// 			</div>
// 		);
// 	}
// }
