import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
    const [isActive, setIsActive] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsActive(false);
    }

    function isActiveHandler() {
        setIsActive(true);
    }

    function isNotActive() {
        setIsActive(false);
    }

    return (
        <div className="new-expense">
            {!isActive && <button onClick={isActiveHandler}>Add New Expense</button>}
            {isActive && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={isNotActive}
                />
            )}
        </div>
    );
}

export default NewExpense;
