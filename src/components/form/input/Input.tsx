import React, { useState } from "react";
import styles from "./input.module.scss";
import classNames from "classnames";

export type InputProps = {
  id: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "search";
  disabled?: boolean;
  className?: string;
  borderBottom?: boolean;
};

const Input = ({
  id,
  placeholder,
  type = "text",
  disabled = false,
  className,
}: InputProps) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const blockClass = classNames(styles.host, className);

  return (
    <input
      className={blockClass}
      id={id}
      placeholder={placeholder}
      type={type}
      {...(!!disabled ? disabled : {})}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
