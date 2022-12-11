import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense  from "./components/NewExpense/NewExpense";

const App = () => {
    const addExpenseHandler = expense => {
    console.log('in app.js');   
    console.log(expense);

  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler } />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;