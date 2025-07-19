import "./ExpenseItem.css";
function ExpansesList(props) {
    return (
        <div class="expense-item">
            <p className="expense-item__description">{props.description}</p>
            <div>{props.date.toDateString()}</div>
            <div>{props.title}</div>
            <div className="expense-item__location">{props.location}</div>
            <div className="expense-item__price">{props.price}</div>
        </div>
    );
}
export default ExpansesList;