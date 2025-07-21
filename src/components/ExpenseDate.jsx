import "./ExpenseDate.css";
import Card from "./Card.jsx";
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function ExpensesDate (props) {
    let month = props.date.getMonth();
    let getFullYear = props.date.getFullYear();
    let date = props.date.getDate();
    return (
        <Card className="expense-date">
            <div className="expense-date__month">{months[month]}</div>
            <div className="expense-date__dayexpense-date__day">{date}</div>
            <div className="expense-date__year">{getFullYear}</div>
        </Card>
    );
}

export default ExpensesDate;