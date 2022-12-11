import './ExpenseForm.css';
import React  from 'react';
   
const ExpenseForm = () =>{
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2022-01-01' step='2024-12-31'/>
            </div>
            <div className='new-expense__actions'>

            </div>
        </div>
    </form>
}
export default ExpenseForm;