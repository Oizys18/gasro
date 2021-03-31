import HoverVideoPlayer from 'react-hover-video-player';
import React from "react"
import gasro from "assets/videos/gasro.mp4";
import white from "assets/images/1.png";
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
			fullscreen
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
