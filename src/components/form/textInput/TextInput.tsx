import React from "react";
import styles from "./textInput.module.scss";
import Input, { InputProps } from "#components/form/input/Input";
import classNames from "classnames";
import Typography from "#components/common/typography/Typography";
import FormMessage from "#components/form/formMessage/FormMessage";

export type TextInputProps = {
  label: string;
  variant?: "outlined" | "standard";
  className?: string;
  labelFloating?: boolean;
  guttorBottom?: boolean;
  children?: React.ReactNode;
} & InputProps;

const TextInput = (props: TextInputProps) => {
  const {
    label,
    variant = "standard",
    labelFloating = false,
    className,
    guttorBottom = true,
    children,
    ...restProps
  } = props;
  const blockClass = classNames(styles.host, className, {
    [styles.outlined]: variant === "outlined",
    [styles.standard]: !variant || variant === "standard",
    [styles.labelFloating]: !!labelFloating,
    [styles.gutterBottom]: !!guttorBottom,
  });

  return (
    <div className={blockClass}>
      <Input className={styles.input} {...restProps} />
      <label className={styles.label} htmlFor={props.id}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default TextInput;
