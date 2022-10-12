import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense2 = [
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
        title={expense2[0].title}
        amount={expense2[0].amount}
        date={expense2[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expense2[1].title}
        amount={expense2[2].amount}
        date={expense2[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
