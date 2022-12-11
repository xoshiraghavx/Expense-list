import React from 'react';
import ExpenseForm from './ExpenseForm';
import './ExpenseForm.css';
import './NewExpense.css';

const NewExpense = () =>{
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpense/>       
         </div>
    )
}
export default NewExpense;