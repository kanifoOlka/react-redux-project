import React from 'react';
import styles from './Sidebar.module.css';
import Button from '../UI/Button/Button';

const Sidebar = () => {
    return (
        <aside className={styles.aside}>
            <p>Сортировка</p>
            <Button color={"primary"} title="по городу"></Button>
            <Button color={"primary"} title="по компании"></Button>
        </aside>
    );
};

export default Sidebar;