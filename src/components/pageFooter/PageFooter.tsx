import React from 'react';
import styles from './pageFooter.module.scss';

type PageFooterProps = {
    children: React.ReactNode,
}

const PageFooter = ({children}: PageFooterProps) => {
    return (
        <footer className={styles.host}>
            {children}
        </footer>
    );
};

export default PageFooter;
