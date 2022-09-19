/** @format */
import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: '499',
    date: new Date(2020, 2, 5),
  },
  {
    id: 'e2',
    title: 'Tv',
    amount: '999',
    date: new Date(2020, 2, 5),
  },
  {
    id: 'e3',
    title: 'Refrigerator',
    amount: '1499',
    date: new Date(2021, 2, 5),
  },
  {
    id: 'e4',
    title: 'Napkin',
    amount: '4',
    date: new Date(2021, 2, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
