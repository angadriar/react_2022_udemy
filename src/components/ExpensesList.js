import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const Expenseslist = props => {
  return <list>
    {props.expenses.length === 0 && <h2 className="expenses-list__fallback">No expenses found</h2>}
        {props.expenses.length > 0 &&
            props.expenses.map((expense, index) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
          </list>
};



export default Expenseslist;