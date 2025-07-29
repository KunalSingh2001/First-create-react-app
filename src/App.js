import React, {useState} from 'react';
import ExpansesList from "./components/ExpensesItem";
import NewExpense from "./components/ExpenseForm/NewExpense";
function App() {
  const [expenses, setExpanese] = useState([
    {id:1, date: new Date(2025, 7, 19), location:"Bangalore", description: "this is props", title: "Insurance", amount:"$10"},
    {id:2, date: new Date(2025, 7, 19), location:"Delhi", description: "this is props", title: "Book", amount:"$20"},
    {id:3, date: new Date(2025, 7, 19), location:"Hyderabad", description: "this is props", title: "Pen", amount:"$30"},
    {id:4, date: new Date(2025, 7, 19), location:"Mumbai", description: "this is props", title: "Laptop", amount:"$40"}
  ]);
  function expansesSummitedData(data) {
    setExpanese((prevExpenses) => {
      console.log('UpdatedData',data, ...prevExpenses);
      return [data, ...prevExpenses]
    });
  }

  return (
    <div>
        <NewExpense onExpanseSubmitDate= {expansesSummitedData}/>
        {expenses.map((val, index) => {
          console.log(val.price);
          return (
            <ExpansesList
              key={val.id || index} // ADD a key!
              date={val.date}
              title={val.title}
              amount={val.amount}
            />
          );
        })}
    </div>
  );
}

export default App;
