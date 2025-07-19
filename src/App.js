import ExpansesList from "./components/ExpensesItem";
function App() {
  return (
    <div>
        <h1>Hello World</h1>
        <p>dcdhcbhbdchb</p>
        <ExpansesList date={new Date(2025, 7, 19)} location="Bangalore" description="this is props" title="Insurance" price="$10"></ExpansesList>
        <ExpansesList date={new Date(2025, 7, 19)} location="Delhi" description="this is props" title="Book" price="$20"></ExpansesList>
        <ExpansesList date={new Date(2025, 7, 19)} location="Hyderabad" description="this is props" title="Pen" price="$30"></ExpansesList>
        <ExpansesList date={new Date(2025, 7, 19)} location="Mumbai" description="this is props" title="Laptop" price="$40"></ExpansesList>
    </div>
  );
}

export default App;
