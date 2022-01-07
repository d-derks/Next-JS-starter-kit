import React from "react";
import styles from "./menuButton.module.scss";
import classNames from "classnames";
import { useOvermindActions, useOvermindState } from "../../../store/overmind";

type MenuButtonProps = {
  className?: string;
};

const MenuButton = ({ className }: MenuButtonProps) => {
  const blockClass = classNames(styles.host, className);
  const {
    app: { mainMenuOpen },
  } = useOvermindState();

  const {
    app: { toggleMainMenu },
  } = useOvermindActions();

  const handleMenuButtonClick = () => {
    toggleMainMenu();
  };
  return (
    <button
      className={blockClass}
      type="button"
      title="toggle menu"
      aria-expanded={mainMenuOpen ? "true" : "false"}
      onClick={handleMenuButtonClick}
    >
      <span className={`${styles.inner} menu-button`}>
        <span className={`${styles.text} menu-button`}>Press for menu</span>
      </span>
    </button>
  );
};

export default MenuButton;
