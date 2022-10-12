 import './ExpenseItem.css';

function ExpenseItem(props) {

  const expenseDate = new Date(2022,3,4);
  const expenseTitle = 'Teste';
  const expenseAmount = 223.45;

  return (
    <div className='expense-item'>
      <div>{props.date}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
