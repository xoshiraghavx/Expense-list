import './ExpenseForm.css';
import React, {useState}  from 'react';
   
const ExpenseForm = () =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) =>{ 
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {

    }
    const dateChangeHandler = (event) => {

    }

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler }/>
            </div>
            <div className='new-expense __control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2022-01-01' step='2024-12-31' onChange={dateChangeHandler}/>
            </div>
            <div className='new-expense__actions'>
                <button  type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
}
export default ExpenseForm;