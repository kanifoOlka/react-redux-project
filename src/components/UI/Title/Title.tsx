import React from 'react';
import styles from './Title.module.css'
import classNames from "classnames";

interface TitleProps {
    className?: string;
    text: string;
}

const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({className, text, children, ...props}) => {
    return (
        <div className={classNames(styles.title, className)}
             {...props}>
            <h1>
                {text}
            </h1>
            {children}
        </div>
    );
};

export default Title;