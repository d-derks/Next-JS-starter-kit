import React from "react";
import styles from "./checkbox.module.scss";
import classNames from "classnames";
import Typography from "#components/common/typography/Typography";
import IconCheck from "#components/icons/IconCheck";

type CheckboxProps = {
  label: string;
  children?: React.ReactNode;
  name?: string;
  className?: string;
  disabled?: boolean;
};

const Checkbox = ({
  label,
  name,
  className,
  disabled,
  children,
}: CheckboxProps) => {
  const blockClass = classNames(styles.host, className);

  return (
    <label className={blockClass}>
      <input
        className={styles.input}
        type="checkbox"
        name={name}
        disabled={disabled}
      />
      <Typography
        extraClass={styles.text}
        variant="span"
        text={label}
        gutterBottom={false}
      />
      {!children ? <IconCheck className={styles.icon} /> : children}
    </label>
  );
};

export default Checkbox;
