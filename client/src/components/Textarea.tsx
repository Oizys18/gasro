import React, { useState } from "react";
import { TextField } from "@material-ui/core";
interface Props {}

function TextArea({ ...props }: Props) {
  return (
    <>
      <div>
        <TextField></TextField>
      </div>
    </>
  );
}
export default TextArea;
