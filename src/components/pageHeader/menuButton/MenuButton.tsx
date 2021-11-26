import React from 'react';
import styles from './menuButton.module.scss'
import classNames from "classnames";

type MenuButtonProps = {
    menuOpen?: boolean,
    onClick?: (event: React.MouseEvent) => void;
    className?: string,
}

const MenuButton = ({menuOpen = false, onClick, className}: MenuButtonProps) => {
    const blockClass = classNames(styles.host, className);

    return (
        <button
            className={blockClass}
            type="button"
            title='toggle menu'
            aria-expanded={menuOpen ? 'true' : 'false'}
            onClick={onClick}
        >
          <span className={`${styles.inner} menu-button`}>
            <span className={`${styles.text} menu-button`}>
              Press for menu
            </span>
          </span>
        </button>
    );
};

export default MenuButton;
