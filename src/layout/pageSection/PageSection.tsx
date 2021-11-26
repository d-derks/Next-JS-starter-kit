import React from 'react';
import propTypes from 'prop-types';
import styles from './pageSection.module.scss';
import classNames from "classnames";

type pageSectionProps = {
    children: React.ReactNode,
    element?: 'div'|'section',
    color?: 'dark'|'light'
    className?: string,
    maxWidth?: 'l'|'xl',
    fullWidth?: boolean,
}

const PageSection = ({children, element = 'div', color = 'light', className, maxWidth = 'l', fullWidth = false}: pageSectionProps) => {
    const blockClass = classNames(styles.host, className, {
        [styles.isMaxWidthXl]: maxWidth === 'xl',
        [styles.isFullWidth]: !!fullWidth,
        [styles.isBgDark]: color === 'dark',
    });

    const renderSection = () => {
        // section elememnt
        if (element === 'section') {
            if (fullWidth) {
                return <section className={blockClass}>{children}</section>
            } else {
                return (
                    <section className={blockClass}>
                        <div className={styles.inner}>
                            {children}
                        </div>
                    </section>
                )
            }
        } else {
            // div element
            if (fullWidth) {
                return <div className={blockClass}>{children}</div>
            } else {
                return (
                    <div className={blockClass}>
                        <div className={styles.inner}>
                            {children}
                        </div>
                    </div>
                )
            }
        }

    }
    return (
        renderSection()
    );
};

export default PageSection;

PageSection.propTypes = {
    children: propTypes.node,
    element: propTypes.string,
    color: propTypes.string,
    className: propTypes.string,
    maxWidth: propTypes.string,
    fullWidth: propTypes.bool,
}
