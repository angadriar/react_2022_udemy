import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import Expenseslist from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredyear] = useState("2020");
  const handleOnFilter = (filterYear) => {
    setFilteredyear(filterYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilter={handleOnFilter} />
        <Expenseslist expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
