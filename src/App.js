import React, { useState } from 'react';
import ExpansesList from "./components/ExpensesItem";
import NewExpense from "./components/ExpenseForm/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter.jsx";
function App() {
	const DUMMY_DATA = [
		{ id: 1, date: new Date(2025, 7, 19), location: "Bangalore", description: "this is props", title: "Insurance", amount: "$10" },
		{ id: 2, date: new Date(2023, 7, 19), location: "Delhi", description: "this is props", title: "Book", amount: "$20" },
		{ id: 3, date: new Date(2022, 7, 19), location: "Hyderabad", description: "this is props", title: "Pen", amount: "$30" },
		{ id: 4, date: new Date(2021, 7, 19), location: "Mumbai", description: "this is props", title: "Laptop", amount: "$40" }
	];
	const [expenses, setExpanese] = useState(DUMMY_DATA);
	function expansesSummitedData(data) {
		const updatedData = {
			...data,
			amount: data.amount.toString().startsWith('$') ? data.amount : `$${data.amount}`,
			date:new Date(data.date)
		};
		setExpanese((prevExpenses) => {
			return [updatedData, ...prevExpenses]
		});

	}
	let [filteredYear, setFilteredYear] = useState("");
	function changeFilterHandler(selectedYear) {
		setFilteredYear(selectedYear);
	}
	let filteredData = "";
	if (filteredYear == "") {
		filteredData = expenses;
	} else {
		filteredData = expenses.filter((val) => {
			return val.date.getFullYear() == filteredYear;
		});
	}
	return (
		<div>
			<NewExpense onExpanseSubmitDate={expansesSummitedData} />
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={changeFilterHandler}
			/>
			{filteredData.map((val, index) => {
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
