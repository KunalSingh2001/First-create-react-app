import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx"
import Card from "./Card.jsx";
function ExpansesList(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date ={props.date} />
            <h2>{props.title}</h2>
            <h4 className="expense-item__location">{props.location}</h4>
            <div className="expense-item__price">{props.price}</div>
        </Card>
    );
}
export default ExpansesList;