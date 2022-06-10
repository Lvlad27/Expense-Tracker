import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    function yearChangeHandler(selectedYear) {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onYearChange={yearChangeHandler} />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;
