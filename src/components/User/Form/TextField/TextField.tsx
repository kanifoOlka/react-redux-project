import React from 'react';
import {Field, FormikErrors, FormikTouched} from "formik";
import styles from "./TextField.module.css"

interface TextFieldProps {
    label: string;
    name: string;
    type?: string;
    errors: FormikErrors<{
        [field: string]: any
    }>
    touched: FormikTouched<{
        [field: string]: any
    }>
    readOnly?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
                                                 label,
                                                 name,
                                                 type,
                                                 errors,
                                                 touched,
                                                 readOnly
                                             }) => {

    const keys = name.split(".");

    const checkError = (initialValue: number, obj: any): boolean => {
        const key = keys[initialValue];
        const value = obj[key];
        if (value) {
            if (typeof value === "object") {
                return checkError(initialValue + 1, value);
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    const isError = checkError(0, errors);
    const isTouched = checkError(0, touched);

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Field as={type ? type : "input"} className={isError && isTouched ? styles.error : ''} name={name}
                   readOnly={readOnly}/>
        </>
    );
};

export default TextField;