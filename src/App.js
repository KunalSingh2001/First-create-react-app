import ExpansesList from "./components/ExpensesItem";
import NewExpense from "./components/ExpenseForm/NewExpense";
function App() {
  const items = [
    {id:1, date: new Date(2025, 7, 19), location:"Bangalore", description: "this is props", title: "Insurance", price:"$10"},
    {id:2, date: new Date(2025, 7, 19), location:"Delhi", description: "this is props", title: "Book", price:"$20"},
    {id:3, date: new Date(2025, 7, 19), location:"Hyderabad", description: "this is props", title: "Pen", price:"$30"},
    {id:4, date: new Date(2025, 7, 19), location:"Mumbai", description: "this is props", title: "Laptop", price:"$40"}
  ];
  return (
    <div>
        <NewExpense/>
        {items.map((val, index) => {
          return (
            <ExpansesList date={val.date} location={val.location} description={val.description} title={val.title} price={val.price}/>
          );
        })}
    </div>
  );
}

export default App;
