import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="year-dropdown">Filter by Year</label>
                <select
                    value={props.selected}
                    onChange={dropdownChangeHandler}
                    id="year-dropdown"
                >
                    <option value="">Select Year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;