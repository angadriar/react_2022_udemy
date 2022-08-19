import React , {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){
    const [filteredYear, setFilteredyear] = useState('2020');
    const handleOnFilter = (filterYear) => {
        setFilteredyear(filterYear);
        console.log("expenses.js");
        console.log(filterYear);
    };

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilter={handleOnFilter} />
                    <ExpenseItem 
                        title={props.expenses[0].title} 
                        amount={props.expenses[0].amount}
                        date={props.expenses[0].date}>
                    </ExpenseItem>
                    <ExpenseItem 
                        title={props.expenses[1].title} 
                        amount={props.expenses[1].amount}
                        date={props.expenses[1].date}>
                    </ExpenseItem>
                    <ExpenseItem 
                        title={props.expenses[2].title} 
                        amount={props.expenses[2].amount}
                        date={props.expenses[2].date}>
                    </ExpenseItem>
                    <ExpenseItem 
                        title={props.expenses[3].title} 
                        amount={props.expenses[3].amount}
                        date={props.expenses[3].date}>
                    </ExpenseItem>
            </Card>
        </div>
    );
}

export default Expenses;