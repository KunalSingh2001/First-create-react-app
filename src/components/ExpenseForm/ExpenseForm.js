import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpansesForm = () => {
    //Both method are will work this is for small form

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }


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

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const obj = {
            title :enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        }
        console.log(obj);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={titleChangeHandler} value={enteredTitle} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" onChange={amountChangeHandler} value={enteredAmount} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpansesForm;