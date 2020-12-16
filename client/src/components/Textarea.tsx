import React, { useState } from "react";
import { TextField } from "@material-ui/core";
interface Props {}

const TextArea: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <div>
        <TextField></TextField>
      </div>
    </>
  );
};
export default TextArea;
