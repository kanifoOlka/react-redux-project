import React, {ButtonHTMLAttributes} from 'react';
import styles from './Button.module.css';
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: "primary" | "secondary";
    title: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({color, title, onClick, ...props}) => {
    return (
        <button className={classNames(styles.button, styles[color])}
                onClick={onClick}
                {...props}>
            {title}
        </button>
    );
};

export default Button;