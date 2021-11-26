import React from 'react';
import styles from "./buttonClose.module.scss";
import classNames from "classnames";
import IconClose from '#components/icons/IconClose';

type buttonCloseProps = {
    title?: string,
    className?: string,
    size?: 'small' | 'medium' | 'large',
    color?: 'light'|'dark',
    onClick?: (event: React.MouseEvent) => void;

}

const ButtonClose = ({ title, onClick, size = 'medium', color ='dark', className }: buttonCloseProps) => {

    const blockClass = classNames(styles.host, className, {
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
    });

    return (
        <button
            className={blockClass}
            data-host='button-close'
            title={title}
            type='button'
            onClick={onClick}
        >
            <IconClose
                className={`${styles.icon} ${color === 'light'?`${styles.light}`: null}`}
                width='100%'
                height='100%'
            />
                <span className='u-visual-hidden'>
                    {title}
                </span>
        </button>
    );
};

export default ButtonClose;
