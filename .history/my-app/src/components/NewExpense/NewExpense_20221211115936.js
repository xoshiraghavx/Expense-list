import React from 'react';
import ExpenseForm from './ExpenseForm';
import './ExpenseForm.css';
import './NewExpense.css';

const NewExpense = () =>{
    const onSaveExpenseDateHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...
        }

    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseDate/>       
         </div>
    )
}
export default NewExpense;