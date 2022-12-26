import React, { useState } from 'react'; // use state allows us to define values as state where changes to these values should show 
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [title, newTitle] = useState(props.title)

    const clickHandler = () => {
        newTitle('Green tea')
    }

    return ( // with react, we can put a {} in the jsx html tag inside to call the dynamic data to be shown
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;