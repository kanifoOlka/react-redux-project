import React from 'react';
import {Form, Formik} from "formik";
import {User} from "../../../core/types/user";
import styles from './Form.module.css';
import * as Yup from 'yup';
import Button from "../../UI/Button/Button";
import TextField from "./TextField/TextField";

interface UserFormProps {
    user: User;
    editMode: boolean;
    handleSubmit: (user: User) => void;
}

const UserSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    address: Yup.object({
            street: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            zipcode: Yup.string().required('Required'),
        }
    ),
    phone: Yup.string().required('Required'),
    website: Yup.string().required('Required')
});

const UserForm: React.FC<UserFormProps> = ({user, editMode, handleSubmit}) => {

    return (
        <Formik
            initialValues={user}
            validationSchema={UserSchema}
            onSubmit={values => {
                handleSubmit(values);
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <div className={styles.form}>
                        <TextField label="Name" name="name" errors={errors} touched={touched} readOnly={!editMode}/>
                        <TextField label="User Name" name="username" errors={errors} touched={touched}
                                   readOnly={!editMode}/>
                        <TextField label="E-mail" name="email" errors={errors} touched={touched} readOnly={!editMode}/>
                        <TextField label="Street" name="address.street" errors={errors} touched={touched}
                                   readOnly={!editMode}/>
                        <TextField label="City" name="address.city" errors={errors} touched={touched}
                                   readOnly={!editMode}/>
                        <TextField label="Zip code" name="address.zipcode" errors={errors} touched={touched}
                                   readOnly={!editMode}/>
                        <TextField label="Phone" name="phone" errors={errors} touched={touched} readOnly={!editMode}/>
                        <TextField label="Website" name="website" errors={errors} touched={touched}
                                   readOnly={!editMode}/>
                        <TextField label="Comment" name="comment" type="textarea" errors={errors} touched={touched}
                                   readOnly={!editMode}/>
                    </div>
                    <div className={styles.submitButton}>
                        <Button type={"submit"} color={"secondary"} title={"Отправить"} disabled={!editMode}/>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default UserForm;