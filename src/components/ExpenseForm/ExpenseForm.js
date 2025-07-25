import React, { useState } from "react";
import "./ExpenseForm.css";
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
const ExpansesForm = () => {
    //Both method are will work this is for small form

    // const [enteredTitle, setEnteredTitle] = useState('');    //We don't need of store state while we using Formik because its saving sate by its own
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');


    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        amount: Yup.number().required("amount is required"),
        date: Yup.string().required('date is required')
    })

    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value)
    // }

    // const amountChangeHandler = (event) => {    //We don't need of store state while we using Formik because its saving sate by its own
    //     setEnteredAmount(event.target.value)
    // }

    // const dateChangeHandler = (event) => {
    //     setEnteredDate(event.target.value)
    // }


    //We can use this approch for large form al
    // const [userInput, setUserInput] = useState ({
    //     enteredTitle: "", 
    //     enteredAmount: "", 
    //     enteredDate: ""
    // });


    //This approch will not work for this because this will not give use the letest value 
    // const titleChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle:event.target.value
    //     });
    // }

    // const amountChangeHandler = (event) => {
    //    setUserInput({
    //         ...userInput,
    //         enteredAmount:event.target.value
    //     });
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredDate:event.target.value
    //     });
    // }

    // const titleChangeHandler = (event) => {
    //     setUserInput((prevInput) => {
    //         return {
    //             ...prevInput,
    //             enteredTitle:event.target.value
    //         }
    //     });
    // }

    // const amountChangeHandler = (event) => {
    //     setUserInput((prevInput) => {
    //         return {
    //             ...prevInput,
    //             enteredAmount:event.target.value
    //         }
    //     });
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput((prevInput) => {
    //         return {
    //             ...prevInput,
    //             enteredDate:event.target.value
    //         }
    //     });
    // }
    const obj = {
        title: "",
        amount: "",
        date: ""
    }
    // const formSubmitHandler = (event) => {
    //     event.preventDefault();

    //     // setEnteredTitle("");
    //     // setEnteredAmount("");   //We don't need of store state while we using Formik because its saving sate by its own
    //     // setEnteredDate("");
    //     resetForm();
    // }

    const formSubmitHandler = (values, { resetForm }) => {
        console.log('Form data:', values);
        resetForm();
    };


    //Note :- we don't need to define value and onChnage in each field while we are using Formik ok
    return <Formik initialValues={obj} validationSchema={validationSchema} onSubmit={formSubmitHandler}>
        <Form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <Field type="text" name="title" id="title"/>
                    <ErrorMessage name="title" component="div" className="text-red-500 text-md"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <Field type="number" name="amount" id="amount"/>
                    <ErrorMessage name="amount" component="div" className="text-red-500 text-md"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <Field name ="date" type="date" id="date" min="2023-01-01" max="2024-12-31"/>
                    <ErrorMessage name="date" component="div" className="text-red-500 text-md" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </Form>
    </Formik>;
}

export default ExpansesForm;