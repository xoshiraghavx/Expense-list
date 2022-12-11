import './ExpenseForm.css';
import React, {useState}  from 'react';
   
const ExpenseForm = () =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) =>{ 
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = () => {

    }
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler }/>
            </div>
            <div className='new-expense __control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2022-01-01' step='2024-12-31'/>
            </div>
            <div className='new-expense__actions'>
                <button  type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
}
export default ExpenseForm;