import React from 'react';
import toast, { Toaster } from "react-hot-toast";
import css from "./MoviesPage.module.css";
import { AiFillWarning } from "react-icons/ai";
import { Formik, Form, Field } from "formik";

const MoviesPage = ({ onSubmit }) => {
    const handleSubmit = (values, actions) => {
        if (values.query.trim() === "") {
            toast("Please, enter your query", {
                duration: 3000,
                icon: <AiFillWarning color="red" size={28} />,
            });
            return;
        }

        onSubmit(values.query);
        actions.resetForm();
    };

    return (
        <div>
            <header className={css.searchBar}>
                <Toaster position="top-right" />
                <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
                    <Form className={css.form}>
                        <Field
                            className={css.input}
                            type="text"
                            name="query"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                        />
                        <button className={css.btn} type="submit">
                            Search
                        </button>
                    </Form>
                </Formik>
            </header>
            {/* Add your MoviesPage content here */}
        </div>
    );
};

export default MoviesPage;