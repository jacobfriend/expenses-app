import React from "react";
import "./Expenses.js";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  function dropdownChangeHandler(event) {
    props.onChangeFilterHandler(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter__label">Filter by year</label>
        <select value={props.selectedYear} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
