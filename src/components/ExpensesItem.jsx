import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx"
import Card from "./Card.jsx";
function ExpansesList(props) {
    const [title, setTitle] = useState(props.title);
    function buttonClickHandler () {
        setTitle('New Title');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date ={new Date(props.date)} />
            <h2>{title}</h2>
            {/* <h4 className="expense-item__location">{props.location}</h4> */}
            <div className="expense-item__price">{props.amount}</div>
            {/* <button onClick={buttonClickHandler}>Click me</button> */}
        </Card>
    );
}
export default ExpansesList;