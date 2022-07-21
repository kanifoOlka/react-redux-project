import React from 'react';
import {Field, Form, Formik} from "formik";
import {User} from "../../../core/types/user";
import styles from './Form.module.css';
import * as Yup from 'yup';
import Button from "../../UI/Button/Button";

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
            {({errors, touched, isValid}) => (
                <Form>
                    <div className={styles.form}>
                        <label htmlFor="name">Name</label>
                        <Field className={errors.name && touched.name && styles.error} name="name"
                               readOnly={!editMode}/>
                        <label htmlFor="username">User Name</label>
                        <Field className={errors.username && touched.username && styles.error} name="username"
                               readOnly={!editMode}/>
                        <label htmlFor="email">E-mail</label>
                        <Field className={errors.email && touched.email && styles.error} name="email"
                               readOnly={!editMode}/>
                        <label htmlFor="address.street">Street</label>
                        <Field className={errors.address?.street && touched.address?.street && styles.error}
                               name="address.street" readOnly={!editMode}/>
                        <label htmlFor="address.city">City</label>
                        <Field className={errors.address?.city && touched.address?.city && styles.error}
                               name="address.city" readOnly={!editMode}/>
                        <label htmlFor="address.zipcode">Zip code</label>
                        <Field className={errors.address?.zipcode && touched.address?.zipcode && styles.error}
                               name="address.zipcode" readOnly={!editMode}/>
                        <label htmlFor="phone">Phone</label>
                        <Field className={errors.phone && touched.phone && styles.error} name="phone"
                               readOnly={!editMode}/>
                        <label htmlFor="website">Website</label>
                        <Field className={errors.website && touched.website && styles.error} name="website"
                               readOnly={!editMode}/>
                        <label htmlFor="comment">Comment</label>
                        <Field as="textarea" name="comment" readOnly={!editMode}/>
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