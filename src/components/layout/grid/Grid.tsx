import React from "react";
import styles from "./grid.module.scss";
import classNames from "classnames";

export type GridProps = {
  className?: string;
  children: React.ReactNode;
  /** container queries: the child elements respond to the set container widths */
  sizes?: {
    xs: {
      columns: number;
      containerWidth: string;
    };
    sm: {
      columns: number;
      containerWidth: string;
    };
    md: {
      columns: number;
      containerWidth: string;
    };
  };
  /**  number will be times 1rem */
  gutter?: number;
};

const Grid = ({ className, children, sizes, gutter }: GridProps) => {
  const blockClass = classNames(styles.host, className);

  return (
    <div
      className={blockClass}
      style={{
        ["--grid-columns-xs" as string]: sizes?.xs.columns || 2,
        ["--grid-columns-sm" as string]: sizes?.sm.columns || 3,
        ["--grid-columns-md" as string]: sizes?.md.columns || 4,

        ["--grid-container-xs" as string]: sizes?.xs.containerWidth || "400px",
        ["--grid-container-sm" as string]: sizes?.sm.containerWidth || "800px",
        ["--grid-container-md" as string]: sizes?.md.containerWidth || "1000px",

        ["--grid-gutter" as string]: gutter || "1",
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
