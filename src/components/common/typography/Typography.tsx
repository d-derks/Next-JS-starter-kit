import React from 'react';
import classNames from "classnames";
import styles from './typography.module.scss'

type TypographyProps = {
    text: string,
    variant: 'h1'|'h2'|'h3'|'h4'|'p'|'a',
    size?: 'l',
    color?: 'light'| 'dark',
    gutterBottom?: boolean,
    extraClass?: string,
}

const Typography = ({ text, variant, size, color = 'dark', gutterBottom = true, extraClass }: TypographyProps) => {

    const className = classNames(styles.host, extraClass, {
        [styles.hasGutterBottom]: gutterBottom,
    });

    return React.createElement(
        variant,
        {
            className,
            'data-variant': variant,
            'data-size': size,
            'data-color': color
        },
        text,
    );
}

export default Typography;
