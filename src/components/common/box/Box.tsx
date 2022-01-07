import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./box.module.scss";

type boxProps = {
  className?: string;
  children: any;
  rounded?: boolean;
};

const Box = ({ className, children, rounded = false }: boxProps) => {
  const blockClass = classNames(styles.host, className, {
    [styles.rounded]: !!rounded,
  });

  return <div className={blockClass}>{children}</div>;
};

export default Box;

Box.propTypes = {
  children: PropTypes.any,
};
