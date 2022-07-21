import React, {useState} from 'react';
import Title from "../../../components/UI/Title/Title";
import UserForm from "../../../components/User/Form/Form";
import {useParams} from "react-router-dom";
import {useFetchUserByIdQuery} from "../../../core/services/User";
import Loader from "../../../components/UI/Loader/Loader";
import Error from "../../../components/UI/Error/Error";
import Button from "../../../components/UI/Button/Button";
import {User} from "../../../core/types/user";

const Page = () => {
    const {userId} = useParams() as {
        userId: string;
    };

    const [editMode, setEditMode] = useState(false);

    const {
        data: user,
        isLoading,
        isSuccess,
        isError
    } = useFetchUserByIdQuery(userId);

    const handleSubmit = (user: User) => {
        console.log(user);
        setEditMode(false);
    }

    return (
        <div>
            <Title text={"Профиль пользователя"}>
                {isSuccess && <Button color={"primary"} onClick={() => setEditMode(true)} title={"Редактировать"}/>}
            </Title>
            {isLoading && <Loader/>}
            {isSuccess && <UserForm user={user} editMode={editMode} handleSubmit={handleSubmit}/>}
            {isError && <Error message={"Не удалось загрузить данные пользователя"}/>}
        </div>
    );
};

export default Page;