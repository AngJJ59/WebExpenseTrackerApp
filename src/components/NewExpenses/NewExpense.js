import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
// to pass data from chilren to parent, 
// step 1: adding a new prop in ExpenseFormthat(children) called in the parent component
// step 2: declare a function and make children data to pass as a parameter
// step 3: create the data object
// step 4: declare a props in child class to call the onSaveExpenseData props show
const NewExpense = (props) => { 
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => { // to make data pass as a parameter
        const expenseData = { //add
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Create New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;