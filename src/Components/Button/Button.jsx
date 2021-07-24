import React from "react";
import { CustomButton } from "./Button.styles";

function Button({ type, text }) {
  return <CustomButton type={type}>{text}</CustomButton>;
}

export default Button;
