import React from 'react';
import ExpenseForm from './ExpenseForm';
import './ExpenseForm.css';
import './NewExpense.css';

const NewExpense = (props) =>{
    const onSaveExpenseDateHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.
    } 
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler}/>       
         </div>
    )
}
export default NewExpense;