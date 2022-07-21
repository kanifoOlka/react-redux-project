import React, {useMemo} from 'react';
import styles from './List.module.css';
import Title from "../../../components/UI/Title/Title";
import Loader from "../../../components/UI/Loader/Loader";
import UsersList from "../../../components/User/List/List";
import Error from "../../../components/UI/Error/Error";
import {useFetchAllUsersQuery} from "../../../core/services/User";
import {useAppSelector} from "../../../core/hooks/redux";

const UserList: React.FC = () => {
    const {
        data: users = [],
        isLoading,
        isSuccess,
        isError
    } = useFetchAllUsersQuery(10);

    const sort = useAppSelector(state => state.sortReduser.sort);

    const sortedUsers = useMemo(() => {
        const sortedUsers = users.slice();
        if (sort) {
            if (sort === "city") {
                sortedUsers.sort((a, b) => a.address.city.localeCompare(b.address.city));
            }
            if (sort === "company") {
                sortedUsers.sort((a, b) => a.company.name.localeCompare(b.company.name));
            }
        }
        return sortedUsers
    }, [users, sort])

    let content

    if (isLoading) {
        content = <Loader/>
    } else if (isSuccess) {
        content = <>
            <UsersList users={sortedUsers}/>
            <p className={styles.summary}>
                Найдено {users.length} пользователей
            </p>
        </>
    } else if (isError) {
        content = <Error message={"Не удалось загрузить пользователей"}/>
    }

    return (
        <>
            <Title text={"Список пользователей"}/>
            {content}
        </>
    );
};

export default UserList;