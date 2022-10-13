import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Papel",
      amount: 85.4,
      date: new Date(2022, 5, 14).toISOString(),
    },
    {
      id: "e2",
      title: "Cartão",
      amount: 50,
      date: new Date(2022, 5, 14).toISOString(),
    },
    {
      id: "e3",
      title: "Privada",
      amount: 350.4,
      date: new Date(2022, 5, 15).toISOString(),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem></ExpenseItem>

    </div>
    
  );
}

export default App;
