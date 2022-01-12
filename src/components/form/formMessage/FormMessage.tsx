import React from "react";
import Typography from "#components/common/typography/Typography";

export type FormMessageProps = {
  text?: string;
  error?: any;
};

const FormMessage = ({ text, error }: FormMessageProps) => {
  return (
    <Typography
      text={error ? error : text}
      variant="p"
      color={error ? "error" : null}
      gutterBottom={false}
    />
  );
};

export default FormMessage;
