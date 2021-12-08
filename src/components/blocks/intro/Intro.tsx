import React from "react";
import styles from "./intro.module.scss";
import classNames from "classnames";
import Typography from "#components/common/typography/Typography";

type IntroProps = {
  className?: string;
  title: string;
  leadin: string;
  aligned?: "left" | "center" | "right";
  guttorBottom?: boolean;
};

const Intro = ({
  className,
  title,
  leadin,
  aligned = "left",
  guttorBottom = true,
}: IntroProps) => {
  const blockClass = classNames(styles.host, className, {
    [styles.alignCenter]: aligned === "center",
    [styles.alignRight]: aligned === "right",
    [styles.gutterBottom]: !!guttorBottom,
  });

  return (
    <header className={blockClass}>
      <Typography variant="h2" text={title} />
      <Typography variant="p" text={leadin} />
    </header>
  );
};

export default Intro;
