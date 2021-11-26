import React from 'react';
import classNames from "classnames";
import styles from './button.module.scss';

type buttonProps = {
    text: string,
    secondary?: boolean;
    className?: string,
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    size?: 'small' | 'medium' | 'large';
    setRef?: string,
    onClick?: (event: React.MouseEvent) => void;
}

const Button = ({ text, href, secondary, size, onClick, setRef, className, type= 'button'}: buttonProps) => {

    const blockClass = classNames(styles.host, className, {
        [styles.primary]: !secondary,
        [styles.secondary]: !!secondary,
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium' || !size,
        [styles.large]: size === 'large',
    });

    const renderButton = (href) => {

        if (href) {
            return (
                <a
                    href={href}
                    ref={setRef}
                    className={blockClass}
                    title={text}
                >
                    <span className={styles.inner}>
                        {text}
                    </span>
                </a>
            )
        }
            return (
                <button
                    ref={setRef}
                    className={blockClass}
                    title={text}
                    type={type}
                    onClick={onClick}
                >
                    <span className={styles.inner}>
                        {text}
                    </span>
                </button>
            )

    }

    return (
       <>
           {renderButton(href)}
       </>
    );
}

export default Button;
