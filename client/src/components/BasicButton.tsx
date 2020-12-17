import React from "react";
import { Button } from "@material-ui/core";

interface Props {
  message: string;
  disabled?: boolean;
  color?: any;
  onClick: (name: string) => void;
  href?: string;
}

const BasicButton = ({ ...props }: Props) => {
  return (
    <>
      <Button
        disableRipple={true}
        color={props.color ? props.color : "default"}
        disabled={props.disabled ? props.disabled : false}
        href={props.href ? props.href : ""}
      >
        {props.message}
      </Button>
    </>
  );
};
export default BasicButton;
