import React from "react";
import ExpansesForm from "./ExpenseForm";
import "./NewExpense.css";



const NewExpense = (props) => {
   function saveExpenseDataHandler(data) {
        props.onExpanseSubmitDate(data);
   }


    return <div className="new-expense">
        <ExpansesForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;