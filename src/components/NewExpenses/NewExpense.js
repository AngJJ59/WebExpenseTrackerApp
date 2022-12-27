import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
// to pass data from chilren to parent, 
// step 1: adding a new prop in ExpenseFormthat called in the parent component
// step 2: declare a function and make children data to pass as a parameter
// step 3: create the data object
// step 4: declare a props in child class to call the onSaveExpenseData props show
const NewExpense = (props) => { 
    const saveExpenseDataHandler = (enteredExpenseData) => { // to make data pass as a parameter
        const expenseData = { //add
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    return(
        <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> 
    </div>
    )
}

export default NewExpense;