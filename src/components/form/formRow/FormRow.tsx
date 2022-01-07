import React from "react";
import styles from "./formRow.module.scss";
import classNames from "classnames";

type FormRowProps = {
  children: React.ReactNode;
  className?: string;
};

const FormRow = ({ children, className }: FormRowProps) => {
  const blockClass = classNames(styles.host, className);

  return <div className={blockClass}>{children}</div>;
};

export default FormRow;
