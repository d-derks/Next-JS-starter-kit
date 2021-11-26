import React, {useState} from 'react';
import classNames from "classnames";
import styles from './pageHeader.module.scss';
import MenuButton from "#components/pageHeader/menuButton/MenuButton";
import MenuMobile from "#components/pageHeader/menuMobile/menuMobile";
import useViewport from '../../hooks/useViewport';

type PageHeaderProps = {
    children: React.ReactNode,
}

const PageHeader = ({children}: PageHeaderProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const blockClass = classNames(styles.host, {
        [styles.isMenuVisible]: menuOpen
    });

    const { isLtLarge } = useViewport();

    return (
        <header className={blockClass}>
            {
                isLtLarge && (
                    <>
                        <MenuMobile menuOpen={menuOpen} />
                        <MenuButton
                            menuOpen={menuOpen}
                            onClick={() => {
                                setMenuOpen(!menuOpen);
                            }}
                        />
                    </>
                )
            }
            {children}
        </header>
    );
};

export default PageHeader;
