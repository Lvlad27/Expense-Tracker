import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2020');

    function yearChangeHandler(selectedYear) {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onYearChange={yearChangeHandler} />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;
