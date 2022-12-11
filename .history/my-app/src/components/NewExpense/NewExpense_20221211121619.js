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
        props.onAddExpense(exp)
    } 
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler}/>       
         </div>
    )
}
export default NewExpense;