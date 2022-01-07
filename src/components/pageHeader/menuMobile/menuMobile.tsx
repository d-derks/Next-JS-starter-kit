import React from "react";
import styles from "./menuMobile.module.scss";
import { useOvermindActions, useOvermindState } from "../../../store/overmind";

const MenuMobile = () => {
  const {
    app: { mainMenuOpen },
  } = useOvermindState();

  const {
    app: { toggleMainMenu },
  } = useOvermindActions();
  const handleMainClose = () => {
    toggleMainMenu(false);
  };
  return (
    <>
      <div
        className={styles.host}
        aria-expanded={mainMenuOpen ? "true" : "false"}
      >
        Hello
      </div>
      <button onClick={handleMainClose}>close</button>
    </>
  );
};

export default MenuMobile;
