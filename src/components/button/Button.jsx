import React from 'react';
import classNames from 'classnames';

export const Button = ({
    children,
    className,
    onClick,
    ...attrs
}) => {
    const classes = classNames(
        'btn',
        className
    );
    return (
        <button
            className={classes}
            onClick={onClick}
            {...attrs}
        >
            {children}
        </button>
    )
}
