import React, {useEffect, useState} from 'react';
import styles from './List.module.css';
import UserService from "../../../core/services/User";
import {User} from "../../../core/types/User";
import Title from "../../../components/UI/Title/Title";
import Loader from "../../../components/UI/Loader/Loader";
import UsersList from "../../../components/User/List/List";
import {useFetching} from "../../../core/hooks/useFetching";
import Error from "../../../components/UI/Error/Error";

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [fetchUsers, isUsersLoading, getUsersError] = useFetching(async () => {
        const usersData = await UserService.getAll();
        setUsers(usersData);
    })

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <Title text={"Список пользователей"}/>
            {getUsersError && <Error message={getUsersError}/>}
            {(() => {
                if (isUsersLoading) {
                    return <Loader/>
                } else {
                    return <>
                        <UsersList users={users}/>
                        <p className={styles.summary}>
                            Найдено {users.length} пользователей
                        </p>
                    </>
                }
            })()}
        </>
    );
};

export default UserList;