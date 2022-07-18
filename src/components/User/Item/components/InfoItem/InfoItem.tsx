import React from 'react';
import styles from './InfoItem.module.css';

interface InfoItemProps {
    name: string,
    value: string
}

const InfoItem: React.FC<InfoItemProps> = ({name, value}) => {
    return (
        <div className={styles.infoItem}>
            <span>{name}</span>{value}
        </div>
    );
};

export default InfoItem;