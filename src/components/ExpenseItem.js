import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return ( // with react, we can put a {} in the jsx html tag inside to call the dynamic data to be shown
        <div className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;