import React from "react";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components";
import white from "assets/images/1.png";
import gasro from "assets/videos/gasro.mp4";
interface Props {
  open: boolean;
  handleClose: (e: any) => void;
}

export default function VideoDialog({ ...props }: Props) {
  return (
    <div>
      <Dialog
        maxWidth="xl"
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <video
          src={gasro}
          width="100%"
          height="100%"
          controls={true}
          loop={false}
          poster={white}
          autoPlay={true}
          id="video"
        />
        <a href="#" style={{ position: "absolute", right: "0" }}>
          <i
            className="bx bxs-x-circle bx-flip-horizontal bx-sm"
            onClick={props.handleClose}
            style={{
              color: "red",
              //   backgroundColor: "white",
              borderRadius: "0.8em",
              margin: "8px",
            }}
          ></i>
        </a>
      </Dialog>
    </div>
  );
}
