import React from "react";
import styles from "./textInput.module.scss";
import Input, { InputProps } from "#components/form/input/Input";
import classNames from "classnames";
import Typography from "#components/common/typography/Typography";

export type TextInputProps = {
  label: string;
  variant?: "outlined" | "standard";
  className?: string;
  labelFloating?: boolean;
  guttorBottom?: boolean;
  children?: React.ReactNode;
  error?: string;
} & InputProps;

const TextInput = (props: TextInputProps) => {
  const {
    label,
    variant = "standard",
    labelFloating = false,
    className,
    guttorBottom = true,
    children,
    error,
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
      <label className={styles.label}>{label}</label>
      {error && (
        <Typography
          text={error}
          variant="p"
          color="error"
          gutterBottom={false}
        />
      )}
    </div>
  );
};

export default TextInput;
