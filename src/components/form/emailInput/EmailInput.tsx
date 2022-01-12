import React from "react";
import TextInput from "../textInput/TextInput";

const EmailInput = (props) => {
  return (
    <TextInput {...props} type="email">
      {props.children}
    </TextInput>
  );
};

export default EmailInput;
