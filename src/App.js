import React, {useState} from 'react';
import './styles/main.css'
import Form from './components/form'
import Block from './components/block'
function App() {
  const [income,setIncome] = useState([]);
  const [expenses,setExpenses] = useState([]);
  const green = '#3AC680';
  const red = '#E64A4A';

  const newEntry = (entry) => {
    if(entry.incomeBtn && entry.expenseBtn){
      console.log('Both were triggered');
    } 
    else if(entry.incomeBtn){
      const newIncomeSet = setIncome([...income,entry])
      console.log(`new income set was triggered: ${income}`);
    } 
    else if(entry.expenseBtn) {
      const newExpenseSet = setExpenses([...expenses,entry]);
      console.log('new expense set was triggered');
    } 
    else {
      console.log('neither one was selected');
    }
  }

  const incomeBlocks = income.map(income => {
    const titles = income.entry;
    const capitalTitle = titles.charAt(0).toUpperCase() + titles.slice(1);

    return (
      <Block title={capitalTitle} 
    amount={income.amount} 
    type='income'
    color={green}/>
    )
  })

  const expenseBlocks = expenses.map(expense => {
    const titles = expense.entry;
    const capitalTitle = titles.charAt(0).toUpperCase() + titles.slice(1);
    return (
      <Block title={capitalTitle} 
    amount={expense.amount} 
    type='expense'
    color={red}/>
    )
  })

  return (
    <div className="App">
      <div className="hero">
        <h1 className="hero-title">Money Tracker</h1>
        <h3 className="hero-subtitle">Track all your expenses with ease</h3>
        <button className="hero-btn"><a href="#form">Start Now</a></button>
      </div>
      <section id="form" className="form">
        <Form newEntry={newEntry}></Form>
      </section>
      <section className="income">
        <div className="income-header">
          <h2 className="header-titles bg-green">Income</h2>
        </div>
        <div className="income-column">
          {incomeBlocks}
        </div>
      </section>
      <section className="expenses">
        <div className="expenses-header">
          <h2 className="header-titles bg-red">Expenses</h2>
        </div>
        <div className="expense-column">
          {expenseBlocks}
        </div>
      </section>
    </div>
  );
}

export default App;
