import React from 'react';
import styles from './Sidebar.module.css';
import Button from '../UI/Button/Button';
import {useAppDispatch} from "../../core/hooks/redux";
import {setUsersSort} from "../../core/store/reducers/sortSlice";

const Sidebar: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <aside className={styles.aside}>
            <p>Сортировка</p>
            <Button color={"primary"} title="по городу" onClick={() => dispatch(setUsersSort("city"))}></Button>
            <Button color={"primary"} title="по компании" onClick={() => dispatch(setUsersSort("company"))}></Button>
        </aside>
    );
};

export default Sidebar;