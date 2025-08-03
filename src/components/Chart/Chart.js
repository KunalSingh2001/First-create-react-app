import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';
function Chart(props) {
    const expensesOnlyArray = props.chartExpenses.map((monthExpenseData) => {
        return monthExpenseData.amount;

    });
    const maxValue = Math.max(...expensesOnlyArray);
        const chartData = [
        { expenseMonth: "Jan", expenseValue: 0 },
        { expenseMonth: "Feb", expenseValue: 0 },
        { expenseMonth: "Mar", expenseValue: 0 },
        { expenseMonth: "Apr", expenseValue: 0 },
        { expenseMonth: "May", expenseValue: 0 },
        { expenseMonth: "Jun", expenseValue: 0 },
        { expenseMonth: "Jul", expenseValue: 0 },
        { expenseMonth: "Aug", expenseValue: 0 },
        { expenseMonth: "Sep", expenseValue: 0 },
        { expenseMonth: "Oct", expenseValue: 0 },
        { expenseMonth: "Nov", expenseValue: 0 },
        { expenseMonth: "Dec", expenseValue: 0 },
    ];

    for(let expenses of props.chartExpenses) {
       chartData[expenses.date.getMonth()].expenseValue += expenses.amount;
    }
    console.log();
    return (
        <div className='chart'>
            {chartData.map((monthData) => {
                return (
                    <ChartBar key={monthData.expenseMonth} label={monthData.expenseMonth} value={monthData.expenseValue} maxValue={maxValue}/>
                );
            })}
        </div>
    )
}

export default Chart;