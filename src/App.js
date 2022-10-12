import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Papel",
      amount: 85.4,
      date: new Date(2022, 5, 13),
    },
    {
      id: "e2",
      title: "Cartão",
      amount: 50,
      date: new Date(2022, 5, 14),
    },
    {
      id: "e3",
      title: "Privada",
      amount: 350.4,
      date: new Date(2022, 5, 15),
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
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
