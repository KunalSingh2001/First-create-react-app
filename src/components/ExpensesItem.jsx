import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx"
function ExpansesList(props) {
    
    
    return (
        <div class="expense-item">
            
            <ExpenseDate date ={props.date} ></ExpenseDate>
            <p className="expense-item__description">{props.description}</p>
            <div>{props.title}</div>
            <div className="expense-item__location">{props.location}</div>
            <div className="expense-item__price">{props.price}</div>
        </div>
    );
}
export default ExpansesList;