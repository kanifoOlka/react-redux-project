import React from 'react';
import styles from './Item.module.css';
import {User} from "../../../core/types/user";
import InfoGroup from "./components/InfoGroup/InfoGroup";
import InfoLink from "./components/InfoLink/InfoLink";

const UserItem: React.FC<{ user: User }> = ({user}) => {
    return (
        <div className={styles.item}>
            <InfoGroup user={user}/>
            <InfoLink userId={user.id}/>
        </div>
    );
};

export default UserItem;