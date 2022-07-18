import React from 'react';
import styles from "./InfoLink.module.css";
import {Link} from "react-router-dom";

interface LinkProps {
    userId: number;
}

const InfoLink: React.FC<LinkProps> = ({userId}) => {
    return (
        <div className={styles.link}>
            <Link to={"/users/" + userId}>Подробнее</Link>
        </div>
    );
};

export default InfoLink;