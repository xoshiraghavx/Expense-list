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
                <input type='number' min/>
            </div>
        </div>
    </form>
}
export default ExpenseForm;