import React from "react";
import Dialog from "@material-ui/core/Dialog";
import poster from "assets/images/oven1.png";
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
          poster={poster}
          autoPlay={true}
          id="video"
        />
        <a href="#" style={{ position: "absolute", right: "0" }}>
          <i
            className="bx bxs-x-circle bx-flip-horizontal bx-sm"
            onClick={props.handleClose}
            style={{
              color: "red",
              borderRadius: "0.8em",
              margin: "8px",
            }}
          ></i>
        </a>
      </Dialog>
    </div>
  );
}
