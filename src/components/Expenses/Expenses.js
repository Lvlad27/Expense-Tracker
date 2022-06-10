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
<<<<<<< HEAD
                <ExpensesFilter selected={selectedYear} onYearChange={yearChangeHandler} />
                {filteredExpenses.map((expense) => (
=======
                <ExpensesFilter
                    selected={selectedYear}
                    onYearChange={yearChangeHandler}
                />
                {props.items.map((expense) => (
>>>>>>> eb1590b84355f1fd49bd69bcf47703752e632e32
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
                {console.log(props.items)}
            </Card>
        </div>
    );
}

export default Expenses;
