import React from "react";
import classNames from "classnames";
import styles from "./pageHeader.module.scss";
import MenuButton from "#components/pageHeader/menuButton/MenuButton";
import MenuMobile from "#components/pageHeader/menuMobile/menuMobile";
import useViewport from "../../hooks/useViewport";

type PageHeaderProps = {
  children: React.ReactNode;
};

const PageHeader = ({ children }: PageHeaderProps) => {
  const blockClass = classNames(styles.host);
  const { isLtLarge } = useViewport();

  return (
    <header className={blockClass}>
      {isLtLarge && (
        <>
          <MenuMobile />
          <MenuButton />
        </>
      )}
      {children}
    </header>
  );
};

export default PageHeader;
