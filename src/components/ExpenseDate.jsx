import "./ExpenseDate.css";
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
        <div class="expense-date">
            <div class="expense-date__month">{months[month]}</div>
            <div class="expense-date__dayexpense-date__day">{date}</div>
            <div class="expense-date__year">{getFullYear}</div>
        </div>
    );
}

export default ExpensesDate;