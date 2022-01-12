import React from "react";
import styles from "./input.module.scss";
import classNames from "classnames";
import { UseFormRegister, FieldValues } from "react-hook-form";

export type InputProps = {
  id: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "search";
  disabled?: boolean;
  className?: string;
  borderBottom?: boolean;
  defaultValue?: string;
  register?: UseFormRegister<FieldValues>;
  required?: boolean;
};

const Input = ({
  id,
  placeholder,
  type = "text",
  disabled = false,
  className,
  name,
  defaultValue,
  register,
  required = false,
  ...restProps
}: InputProps) => {
  const blockClass = classNames(styles.host, className);

  return (
    <input
      className={blockClass}
      id={id}
      placeholder={placeholder}
      type={type}
      {...register(name, { required: required })}
      {...(!!disabled ? disabled : {})}
      {...restProps}
    />
  );
};

export default Input;
