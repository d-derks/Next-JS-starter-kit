import React from "react";
import Typography from "#components/common/typography/Typography";
import styles from "#components/form/form.module.scss";
import classNames from "classnames";

type FormProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  onSubmit: any;
};

const Form = ({ title, children, className, onSubmit }: FormProps) => {
  const blockClass = classNames(styles.host, className);

  return (
    <form className={blockClass} onSubmit={onSubmit}>
      <fieldset className={styles.inner}>
        <Typography text={title} variant="legend" />
        {children}
      </fieldset>
    </form>
  );
};

export default Form;
