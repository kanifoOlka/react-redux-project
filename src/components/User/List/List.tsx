import React from 'react';
import {User} from "../../../core/types/user";
import styles from "../../../pages/User/List/List.module.css";
import UserItem from "../Item/Item";

interface UserListProps {
    users: User[];
}

const UsersList: React.FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user => (
                <div key={user.id} className={styles.item}>
                    <UserItem user={user}/>
                </div>
            ))}
        </div>
    );
};

export default UsersList;