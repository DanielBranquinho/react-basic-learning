import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021,2,28);
    const expepenseTitle = 'Car Insurance';
    const expenseAmount = 265.78;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expepenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
