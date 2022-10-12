import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 542.58, date: new Date(2022, 6, 27) },
    { title: "Car Insurance", amount: 542.58, date: new Date(2022, 6, 27) },
    { title: "Car Insurance", amount: 542.58, date: new Date(2022, 6, 27) },
    { title: "Car Insurance", amount: 542.58, date: new Date(2022, 6, 27) },
  ];

  const expense2 = [
    {
      id:'e1',
      title:'Papel',
      amount:85.4,
      date: new Date(toLocaleString)
    },
    {
      id:'e2',
      title:'Cartão',
      amount:50,
      date: new Date(Math.date.random())
    },
    {
      id:'e3',
      title:'Privada',
      amount:350.4,
      date: new Date(Math.date.random())
    }
  ]


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
