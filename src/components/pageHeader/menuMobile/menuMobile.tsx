import React from 'react';
import styles from './menuMobile.module.scss';

type MobileMenuProps = {
    menuOpen: boolean,
}

const MenuMobile = ({menuOpen}: MobileMenuProps) => {
    return (
        <div
            className={styles.host}
            aria-expanded={menuOpen ? 'true' : 'false'}
        >
            Hello
        </div>
    );
};

export default MenuMobile;
