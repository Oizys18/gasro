import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
interface Props {
  message: string;
  disabled?: boolean;
  color?: any;
  onClick?: (name: string) => void;
}

export default function BasicButton({ ...props }: Props) {
  return (
    <>
      <Button
        disableRipple={true}
        disableElevation={true}
        color={props.color ? props.color : "default"}
        disabled={props.disabled ? props.disabled : false}
      >
        {props.message}
      </Button>
    </>
  );
}
