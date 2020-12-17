import React from "react";
import { Input } from "@material-ui/core";

interface Props {
  color?: any;
  placeholder?: string;
  required?: boolean;
  onChange?: () => void;
  value?: string;
}

function InputForm({ ...props }: Props) {
  return (
    <>
      <Input
        color={props.color ? props.color : "default"}
        required={props.required ? props.required : false}
        placeholder={props.placeholder ? props.placeholder : ""}
        value={props.value ? props.value : ""}
      ></Input>
    </>
  );
}

export default InputForm;
