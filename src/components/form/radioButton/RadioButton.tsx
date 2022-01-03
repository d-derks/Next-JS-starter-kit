import React from "react";
import styles from "./radioButton.module.scss";
import classNames from "classnames";
import Typography from "#components/common/typography/Typography";

type RadioButtonProps = {
  label: string;
  name: string;
  className?: string;
  disabled?: boolean;
  labelHidden?: boolean;
};

const RadioButton = ({
  label,
  name,
  className,
  disabled = false,
  labelHidden = false,
}: RadioButtonProps) => {
  const blockClass = classNames(styles.host, className, {
    [styles.labelHidden]: !!labelHidden,
  });

  return (
    <label>
      <input
        className={blockClass}
        type="radio"
        name={name}
        {...(!!disabled ? disabled : {})}
      />
      <Typography variant="span" text={label} />
    </label>
  );
};

export default RadioButton;
